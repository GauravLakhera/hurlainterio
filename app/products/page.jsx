'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Filter, Grid, List, Search, Star, Heart, ShoppingCart } from 'lucide-react';

// export const metadata = {
//   title: 'Premium Products - Luxury Studio | Handcrafted Furniture',
//   description: 'Explore our extensive collection of premium furniture products including kitchen solutions, wardrobes, and custom pieces. Each product showcases exceptional craftsmanship.',
// };

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'kitchen', name: 'Kitchen', count: 8 },
    { id: 'wardrobe', name: 'Wardrobe', count: 6 },
    { id: 'living', name: 'Living Room', count: 10 },
  ];

  const products = [
    {
      id: 1,
      name: 'Luxury Kitchen Island',
      category: 'kitchen',
      price: '$12,500',
      originalPrice: '$15,000',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      rating: 5,
      reviews: 24,
      features: ['Marble Top', 'Soft Close', 'LED Lighting'],
      isNew: true,
    },
    {
      id: 2,
      name: 'Custom Walk-in Wardrobe',
      category: 'wardrobe',
      price: '$8,900',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      rating: 5,
      reviews: 18,
      features: ['Custom Design', 'Premium Wood', 'Mirror Doors'],
      isFeatured: true,
    },
    {
      id: 3,
      name: 'Modern Kitchen Cabinets',
      category: 'kitchen',
      price: '$6,750',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      rating: 4,
      reviews: 32,
      features: ['Handleless Design', 'Soft Close', 'Water Resistant'],
    },
    {
      id: 4,
      name: 'Luxury Sofa Set',
      category: 'living',
      price: '$4,200',
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      rating: 5,
      reviews: 15,
      features: ['Italian Leather', 'Handcrafted', 'Lifetime Warranty'],
    },
    {
      id: 5,
      name: 'Designer Wardrobe System',
      category: 'wardrobe',
      price: '$11,200',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      rating: 5,
      reviews: 21,
      features: ['Modular System', 'LED Interior', 'Smart Storage'],
      isNew: true,
    },
    {
      id: 6,
      name: 'Premium Kitchen Suite',
      category: 'kitchen',
      price: '$18,500',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      rating: 5,
      reviews: 12,
      features: ['Complete Suite', 'Quartz Counters', 'Smart Appliances'],
      isFeatured: true,
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeFilter === 'all' || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Premium Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our extensive collection of handcrafted furniture and custom solutions, 
              each piece designed to elevate your living spaces with unmatched quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    activeFilter === category.id
                      ? 'bg-amber-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md ${
                  viewMode === 'grid' ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md ${
                  viewMode === 'list' ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'w-80 h-64' : 'h-64'
                }`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 space-y-2">
                    {product.isNew && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        New
                      </span>
                    )}
                    {product.isFeatured && (
                      <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-200">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-200">
                      <ShoppingCart className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  {/* Price Badge */}
                  {product.originalPrice && (
                    <div className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Save {Math.round(((parseFloat(product.originalPrice.replace('$', '').replace(',', '')) - parseFloat(product.price.replace('$', '').replace(',', ''))) / parseFloat(product.originalPrice.replace('$', '').replace(',', ''))) * 100)}%
                    </div>
                  )}
                </div>

                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full font-medium capitalize">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                      ))}
                      <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {product.name}
                  </h3>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <Link href={`/products/${product.id}`}>
                      <button className="bg-amber-600 text-white px-6 py-2 rounded-md font-medium hover:bg-amber-700 transition-colors duration-200">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Need Custom Solutions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Our design team can create bespoke furniture pieces tailored to your specific 
            requirements and space constraints.
          </p>
          <Link href="/contact">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-amber-700 transition-colors duration-300">
              Request Custom Quote
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}