// Sanitize raw MDX/HTML coming from WordPress so MDX compiler doesn't crash.
// - Wrap unquoted attribute values with quotes (e.g., width=100% -> width="100%")
// - Normalize smart quotes to normal quotes
// - Leave already quoted ("...", '...') or JSX expression ({...}) untouched
// - Decode common escaped sequences from exports (\u003c, %22, etc.)
// - Strip Divi/ET builder shortcodes like [et_pb_*]
// - Remove HTML comments (including WP block markers <!-- wp:* -->)
// - Remove <script>...</script> blocks which are invalid in MDX/RSC
// - Convert AAWP shortcodes to MDX components

// attribute=VALUE where VALUE isn't starting with ", ', { and VALUE does not include whitespace or tag closers
const ATTR_UNQUOTED = /(\s[\w:-]+)=(?!["'{])([^\s"'>][^\s"'>]*)/g;
const DIVI_SHORTCODES = /\[\/?et_pb[^\]]*\]/g; // [et_pb_*] or [/et_pb_*]
const EXTRA_SHORTCODES = /\[\/?(?:aawp(?:_[^\]]*)?|dsm_[^\]]*)\]/gi; // [aawp_*], [dsm_*]
const HTML_COMMENTS = /<!--[\s\S]*?-->/g; // strip HTML comments with normal hyphens
const HTML_DECLARATIONS = /<![\s\S]*?>/g; // strip any <! ... > (comments with typographic dashes, DOCTYPE, CDATA markers)
const SCRIPT_BLOCKS = /<script[\s\S]*?<\/script>/gi; // strip scripts
const STYLE_BLOCKS = /<style[\s\S]*?<\/style>/gi; // strip styles

/**
 * Convert AAWP WordPress shortcodes to MDX components
 * Example: [aawp box="B08SVPPR2L,B084Z25L6S" grid="3"] -> <AAWPBox box="B08SVPPR2L,B084Z25L6S" grid="3" />
 */
function convertAAWPShortcodes(input: string): string {
  // Match [aawp ...] shortcodes with various attributes
  // Handle both box="..." and box= "..." (with space)
  const aawpPattern = /\[aawp\s+([^\]]+)\]/gi;
  
  return input.replace(aawpPattern, (match, attrs) => {
    // Parse attributes from the shortcode
    const attrMap: Record<string, string> = {};
    
    // Match attribute="value" or attribute='value' or attribute= "value" patterns
    const attrPattern = /(\w+)\s*=\s*["']([^"']+)["']/g;
    let attrMatch;
    
    while ((attrMatch = attrPattern.exec(attrs)) !== null) {
      attrMap[attrMatch[1]] = attrMatch[2];
    }
    
    // Build MDX component props
    const props = Object.entries(attrMap)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<AAWPBox ${props} />`;
  });
}

export function sanitizeMDXSource(input: string): string {
  if (!input) return input;
  let s = input;

  // Early decode of common escaped brackets so later regexes (like comments) can catch them
  s = s
    .replace(/\\u003c/gi, '<')
    .replace(/\\u003e/gi, '>')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&amp;/gi, '&');

  // Decode common percent-encoded quotes that appear in Divi exports
  s = s.replace(/%22/g, '"').replace(/%27/g, "'");

  // decode common percent-encoded sequences that appear inside attributes
  s = s
    .replace(/%22/g, '"')
    .replace(/%27/g, "'")
    .replace(/%3C/gi, '<')
    .replace(/%3E/gi, '>');

  // Convert AAWP shortcodes to MDX components BEFORE stripping
  s = convertAAWPShortcodes(s);
  
  // strip Divi/ET shortcodes that are not valid HTML/MDX
  s = s.replace(DIVI_SHORTCODES, '');
  // Strip other shortcodes but NOT aawp (already converted)
  s = s.replace(/\[\/?(?:dsm_[^\]]*)\]/gi, '');

  // strip HTML comments and WP block comments (robust, including broken spacing)
  s = s.replace(HTML_COMMENTS, "");

  // Aggressively strip Divi shortcodes wrappers like [et_pb_text ...] and [/et_pb_text]
  // Keep their inner HTML content that usually follows the closing bracket
  s = s.replace(/\[(?:\/)?et_pb_[^\]]*\]/g, "");

  // Debug: Check for problematic input patterns before fixing
  const hasProblematicPattern = s.includes('value="8"<input') || s.match(/<input[^>]*value="8"[^>]*<input/);
  if (hasProblematicPattern) {
    console.log('[SANITIZER DEBUG] Found problematic input pattern before fixes');
    const match = s.match(/value="8"[^>]*<input[^>]*>/);
    if (match) {
      console.log('[SANITIZER DEBUG] Pattern found:', match[0]);
    }
  }

  // Log the exact content around ds-arrow before any fixes
  if (s.includes('ds-arrow')) {
    const dsIndex = s.indexOf('ds-arrow-left');
    if (dsIndex !== -1) {
      const start = Math.max(0, dsIndex - 50);
      const end = Math.min(s.length, dsIndex + 200);
      console.log('[SANITIZER DEBUG] Content around ds-arrow-left BEFORE fixes:', s.slice(start, end));
    }
  }

  // CRITICAL FIX: Handle malformed input tags that cause MDX compilation errors
  // Fix any input tag that's not properly self-closed before another tag starts
  
  // First, handle the most specific case: consecutive input tags without proper closing
  s = s.replace(
    /(<input[^>]*?)(?<!\/)\s*(<input)/g,
    '$1 />$2'
  );
  
  // Handle input tags not properly closed before any other tag
  s = s.replace(
    /(<input[^>]*?)(?<!\/)\s*(<[a-zA-Z])/g,
    '$1 />$2'
  );
  
  // Handle the exact problematic pattern from logs (multiple variations)
  s = s.replace(
    /<input([^>]*id="ds-arrow-left"[^>]*value="8"[^>]*?)(<input[^>]*id="ds-arrow-right"[^>]*value="9"[^>]*)/g,
    '<input$1 />$2'
  );
  
  // More aggressive: fix any unclosed void element before another element
  const voidElements = ['input', 'br', 'hr', 'img', 'meta', 'link', 'area', 'base', 'col', 'embed', 'param', 'source', 'track', 'wbr'];
  voidElements.forEach(tag => {
    const regex = new RegExp(`(<${tag}[^>]*?)(?<!/)\\s*(<[a-zA-Z])`, 'gi');
    s = s.replace(regex, '$1 />$2');
  });
  
  // Log the exact content around ds-arrow after fixes
  if (s.includes('ds-arrow')) {
    const dsIndex = s.indexOf('ds-arrow-left');
    if (dsIndex !== -1) {
      const start = Math.max(0, dsIndex - 50);
      const end = Math.min(s.length, dsIndex + 200);
      console.log('[SANITIZER DEBUG] Content around ds-arrow-left AFTER fixes:', s.slice(start, end));
    }
  }

  const beforeInputFix = hasProblematicPattern;
  const afterInputFix = s.includes('value="8"<input') || s.match(/<input[^>]*value="8"[^>]*<input/);
  if (beforeInputFix && afterInputFix) {
    console.error('[SANITIZER DEBUG] Input pattern still present after fixes!');
    const match = s.match(/value="8"<input[^>]*>/);
    if (match) {
      console.error('[SANITIZER DEBUG] Found pattern:', match[0]);
    }
  }
  
  // Fix malformed tags where a new '<' starts before closing the current tag
  // This handles cases where tags are concatenated without proper closing
  s = s.replace(/<([a-zA-Z][\w:-]*)([^<>]*?)<([a-zA-Z])/g, '<$1$2><$3');
  s = s.replace(HTML_DECLARATIONS, '');
  s = s.replace(SCRIPT_BLOCKS, '');
  s = s.replace(STYLE_BLOCKS, '');

  // ensure HTML void elements are self-closed for MDX compliance
  const VOID_TAGS = 'area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr';
  const VOID_RE = new RegExp(`<(?:${VOID_TAGS})(\\b[^>]*?)>`, 'gi');
  s = s.replace(VOID_RE, (m: string) => {
    // if already self-closed, keep as is
    if (m.length >= 2 && m[m.length - 2] === '/') return m;
    return m.slice(0, -1) + ' />';
  });

  // remove inline style attributes to avoid React style string errors
  // Handle both simple and complex style attributes (including those with escaped quotes)
  s = s.replace(/\sstyle=(?:"[^"]*"|'[^']*')/gi, '');

  // unwrap block-level elements that are incorrectly wrapped in <p> ... </p>
  const BLOCK_TAGS = '(?:h[1-6]|div|section|article|header|footer|main|aside|nav|ul|ol|li|table|thead|tbody|tr|th|td|blockquote|hr)';
  const OPEN_BLOCK_IN_P = new RegExp(`<p>\\s*(<${BLOCK_TAGS}\\b)`, 'gi');
  s = s.replace(OPEN_BLOCK_IN_P, (_m, blk: string) => blk);
  const CLOSE_BLOCK_BEFORE_P_CLOSE = new RegExp(`(</${BLOCK_TAGS}>)\\s*</p>`, 'gi');
  s = s.replace(CLOSE_BLOCK_BEFORE_P_CLOSE, (_m, endBlk: string) => endBlk);

  // flatten nested <p> tags: <p><p> -> <p> and </p></p> -> </p>
  s = s.replace(/<p>\s*<p\b/gi, '<p');
  s = s.replace(/<\/p>\s*<\/p>/gi, '</p>');

  // if a <p> contains any block-level tag anywhere, drop the wrapping <p> completely
  const P_WRAP_BLOCK = new RegExp(`<p>([\\s\\S]*?<${BLOCK_TAGS}\\b[\\s\\S]*?)<\\/p>`, 'gi');
  s = s.replace(P_WRAP_BLOCK, (_m, inner: string) => inner);

  // if a <p> starts with inline text and then a block tag, close the paragraph before the block
  const P_TEXT_THEN_BLOCK = new RegExp(`<p>([^<]+?)\\s*(<${BLOCK_TAGS}\\b)`, 'gi');
  s = s.replace(P_TEXT_THEN_BLOCK, (_m, text: string, blk: string) => {
    const trimmed = text.trim();
    return trimmed ? `<p>${trimmed}</p>${blk}` : blk;
  });

  // remove empty paragraphs
  s = s.replace(/<p>\s*<\/p>/gi, '');

  // React expects className instead of class
  s = s.replace(/\sclass="/gi, ' className="');

  // remove lines that only contain a stray </p>
  s = s.replace(/^\s*<\/p>\s*$/gm, '');

  // remove </p> immediately after headings like </h2></p>
  s = s.replace(/(<\/(?:h[1-6])>)\s*<\/p>/gi, '$1');

  // collapse duplicated closing paragraphs
  s = s.replace(/<\/p>\s*<\/p>/g, '</p>');

  // remove orphan '/>' that are not attached to a start tag (e.g., stray '/>' at line start or after text)
  // This is more aggressive to catch the MDX compilation error
  // Examples fixed:
  //   /> <AmazonBox ... />
  //   text />\n
  //   word />
  s = s.replace(/(^|[^<\w])\s*\/>(?=\s*(?:<|$|\w))/gm, '$1');
  
  // More aggressive: remove any '/>' that's not properly part of a self-closing tag
  // This catches cases where '/>' appears without a proper opening '<tag'
  s = s.replace(/(?<!<[^>]*)\s*\/>/g, '');
  
  // Final cleanup: remove any remaining orphaned '/>' patterns
  // This is the most aggressive approach to eliminate the MDX compilation error
  s = s.replace(/\s*\/>\s*(?![^<]*>)/g, ' ');

  // unwrap anchors that only contain <br /> (common leftover from editors)
  s = s.replace(/<a\b[^>]*>\s*(?:<br\s*\/?>(?:\s|&nbsp;)*?)+\s*<\/a>/gi, '<br />');

  // remove a trailing </p> immediately after an AmazonBox component
  s = s.replace(/(<AmazonBox\b[^>]*\/>)(\s*)<\/p>/g, '$1');

  // Quote unquoted attribute values safely (avoid swallowing '>' or '/>')
  s = s.replace(/<(\w[\w:-]*)([^>]*?\s)([\w:-]+)=([^\s\"\'>/][^\s>]*)(?=\s|\/>|>)/g, (_m, tag, pre, name, val) => `<${tag}${pre}${name}="${val}"`);

  return s;
}
