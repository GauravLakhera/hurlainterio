// Enhanced version for Laminam with technical specifications
'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function ProductModal({ product, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl transform transition-all">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-8 py-6 flex justify-between items-center rounded-t-3xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
            <p className="text-amber-600 font-medium">{product.collection} Collection</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={product.image}
                    alt={`${product.name} view ${i}`}
                    className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-75 transition-opacity"
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-amber-600 font-medium uppercase tracking-wide">{product.category}</span>
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-gray-600 ml-2">({product.reviews} reviews)</span>
                  </div>
                </div>

                <div className="flex items-baseline space-x-4 mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-2xl text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                  <span className="text-stone-500">per sqm</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                {product.fullDescription}
              </p>

              {/* Technical Specifications */}
              <div className="bg-stone-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-stone-500 mb-1">Size</div>
                    <div className="font-medium">{product.size}</div>
                  </div>
                  <div>
                    <div className="text-sm text-stone-500 mb-1">Thickness</div>
                    <div className="font-medium">{product.thickness}</div>
                  </div>
                  <div>
                    <div className="text-sm text-stone-500 mb-1">Finish</div>
                    <div className="font-medium">{product.finish}</div>
                  </div>
                  <div>
                    <div className="text-sm text-stone-500 mb-1">Collection</div>
                    <div className="font-medium">{product.collection}</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-stone-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((application, index) => (
                    <span
                      key={index}
                      className="bg-amber-100 text-amber-800 px-3 py-2 rounded-lg text-sm font-medium"
                    >
                      {application}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 pt-6">
                <Link href="/contact" className="flex-1">
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-colors shadow-lg">
                    Get Quote
                  </button>
                </Link>
                <button className="flex-1 border-2 border-stone-300 hover:border-stone-400 text-stone-700 py-4 px-8 rounded-xl font-semibold text-lg transition-colors">
                  Download Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
