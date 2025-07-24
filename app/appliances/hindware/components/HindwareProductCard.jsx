import Link from 'next/link';

export default function HindwareProductCard({ product, viewMode, onViewDetail }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-64 h-48 md:h-auto relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            {product.originalPrice && (
              <span className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 text-xs font-semibold rounded">
                SAVE ₹{(product.originalPrice - product.price).toLocaleString()}
              </span>
            )}
          </div>
          
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-sm text-orange-600 font-medium">{product.category}</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">
                  {formatPrice(product.price)}
                </div>
                {product.originalPrice && (
                  <div className="text-sm text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </div>
                )}
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">{product.shortDescription}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {product.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="flex items-center text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={onViewDetail}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  View Detail
                </button>
                <Link href="/contact">
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.originalPrice && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 text-xs font-semibold rounded">
            SAVE ₹{(product.originalPrice - product.price).toLocaleString()}
          </span>
        )}
      </div>
      
      <div className="p-5">
        <div className="mb-3">
          <span className="text-sm text-orange-600 font-medium">{product.category}</span>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {product.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </div>
            {product.originalPrice && (
              <div className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </div>
            )}
          </div>
          <div className="flex items-center">
            <div className="flex items-center text-yellow-400 mr-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-600">({product.reviews})</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={onViewDetail}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-3 rounded-lg text-sm font-medium transition-colors"
          >
            View Detail
          </button>
          <Link href="/contact">
            <button className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors w-full">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
