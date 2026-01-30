export const AMAZON_TAG = "oestevaquero-21"; // confirmed ES tag

export type BuildUrlParams =
  | { type: "dp"; asin: string; marketplace?: "es" }
  | { type: "node"; node: string; marketplace?: "es" }
  | { type: "search"; q: string; marketplace?: "es" };

const MARKET_DOMAINS: Record<string, string> = {
  es: "www.amazon.es",
};

export function buildAmazonUrl(p: BuildUrlParams): string {
  const host = MARKET_DOMAINS[p.marketplace || "es"];
  if (p.type === "dp") {
    return `https://${host}/dp/${encodeURIComponent(p.asin)}?tag=${AMAZON_TAG}`;
  }
  if (p.type === "node") {
    return `https://${host}/b?node=${encodeURIComponent(p.node)}&tag=${AMAZON_TAG}`;
  }
  return `https://${host}/s?k=${encodeURIComponent(p.q)}&tag=${AMAZON_TAG}`;
}
