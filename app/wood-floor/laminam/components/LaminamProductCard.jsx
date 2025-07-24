import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LaminamProductCard({ product, viewMode, onViewDetail }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-80 h-64 md:h-auto relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            {product.originalPrice && (
              <span className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-2 text-sm font-semibold rounded-lg shadow-lg">
                SAVE ₹{(product.originalPrice - product.price).toLocaleString()}
              </span>
            )}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-stone-700">
              {product.collection}
            </div>
          </div>
          
          <div className="flex-1 p-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-amber-600 font-medium text-sm uppercase tracking-wide">{product.category}</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-stone-600 mb-4 leading-relaxed">{product.shortDescription}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-gray-900">
                  {formatPrice(product.price)}
                </div>
                {product.originalPrice && (
                  <div className="text-lg text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </div>
                )}
                <div className="text-sm text-stone-500 mt-1">per sqm</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <div className="text-sm text-stone-500">Size</div>
                <div className="font-medium">{product.size}</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-stone-500">Thickness</div>
                <div className="font-medium">{product.thickness}</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-stone-500">Finish</div>
                <div className="font-medium">{product.finish}</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-stone-500">Rating</div>
                <div className="flex items-center">
                  <div className="flex items-center text-amber-400 mr-2">
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
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {product.features.slice(0, 4).map((feature, index) => (
                <span
                  key={index}
                  className="text-xs bg-stone-100 text-stone-700 px-3 py-1 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={onViewDetail}
                className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-800 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View Details
              </button>
              <Link href="/contact" className="flex-1">
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Get Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {product.originalPrice && (
          <span className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-2 text-sm font-semibold rounded-lg shadow-lg">
            SAVE ₹{(product.originalPrice - product.price).toLocaleString()}
          </span>
        )}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-stone-700">
          {product.collection}
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-stone-700">
          {product.thickness}
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <span className="text-amber-600 font-medium text-sm uppercase tracking-wide">{product.category}</span>
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
        </div>
        
        <p className="text-stone-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div>
            <div className="text-stone-400">Size</div>
            <div className="font-medium text-stone-700">{product.size}</div>
          </div>
          <div>
            <div className="text-stone-400">Finish</div>
            <div className="font-medium text-stone-700">{product.finish}</div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {product.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-2xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </div>
            {product.originalPrice && (
              <div className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </div>
            )}
            <div className="text-xs text-stone-500">per sqm</div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center text-amber-400 mr-1">
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

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={onViewDetail}
            className="bg-stone-100 hover:bg-stone-200 text-stone-800 py-3 px-4 rounded-lg text-sm font-medium transition-colors"
          >
            View Details
          </button>
          <Link href="/contact">
            <button className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-4 rounded-lg text-sm font-medium transition-colors w-full">
              Get Quote
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
