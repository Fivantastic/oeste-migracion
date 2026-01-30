interface AmazonProductGridProps {
  products: string;
  columns?: string;
}

export default function AmazonProductGrid({ products, columns = "4" }: AmazonProductGridProps) {
  const affiliateTag = "oestevaquero-21";
  const productList = products.split(',').map(p => p.trim());
  const cols = parseInt(columns);
  
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${cols} gap-6 my-8`}>
      {productList.map((asin) => (
        <a
          key={asin}
          href={`https://www.amazon.es/dp/${asin}?tag=${affiliateTag}`}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="group border-2 border-gray-200 rounded-lg p-4 hover:border-orange-600 hover:shadow-lg transition-all duration-300"
        >
          <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
            <img
              src={`https://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=${asin}&Format=_SL250_&ID=AsinImage&MarketPlace=ES&ServiceVersion=20070822&WS=1&tag=${affiliateTag}`}
              alt="Producto Amazon"
              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Ver en Amazon</p>
            <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold text-sm group-hover:bg-orange-700 transition-colors">
              Ver Producto
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
