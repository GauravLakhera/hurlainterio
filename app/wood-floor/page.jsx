'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { TreePine, Shield, Droplets, Thermometer, Star, Award, Leaf, Home } from 'lucide-react';

// export const metadata = {
//   title: 'Premium Wood Flooring - Luxury Studio | Hardwood & Engineered Floors',
//   description: 'Discover our exquisite collection of premium wood flooring options. From classic hardwood to modern engineered floors, find the perfect flooring for your space.',
// };

export default function WoodFloor() {
  const [activeType, setActiveType] = useState('all');

  const floorTypes = [
    { id: 'all', name: 'All Floors', icon: Home },
    { id: 'hardwood', name: 'Hardwood', icon: TreePine },
    { id: 'engineered', name: 'Engineered', icon: Shield },
    { id: 'luxury', name: 'Luxury Vinyl', icon: Droplets },
  ];

  const floorOptions = [
    {
      id: 1,
      name: 'European Oak Hardwood',
      type: 'hardwood',
      species: 'White Oak',
      price: '$12.50/sq ft',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      rating: 5,
      features: ['Natural Grain', 'Hand-Scraped', 'UV Finish', '25 Year Warranty'],
      thickness: '3/4"',
      width: '5"',
      finish: 'Matte',
      isNew: true,
    },
    {
      id: 2,
      name: 'Walnut Engineered Plank',
      type: 'engineered',
      species: 'American Walnut',
      price: '$8.75/sq ft',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      rating: 5,
      features: ['Stable Core', 'Wide Plank', 'Low VOC', 'Lifetime Warranty'],
      thickness: '1/2"',
      width: '7"',
      finish: 'Satin',
      isFeatured: true,
    },
    {
      id: 3,
      name: 'Luxury Vinyl Plank',
      type: 'luxury',
      species: 'Oak Look',
      price: '$4.25/sq ft',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      rating: 4,
      features: ['Waterproof', 'Click Lock', 'Scratch Resistant', '20 Year Warranty'],
      thickness: '6mm',
      width: '6"',
      finish: 'Textured',
    },
    {
      id: 4,
      name: 'Maple Hardwood Classic',
      type: 'hardwood',
      species: 'Hard Maple',
      price: '$10.00/sq ft',
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      rating: 5,
      features: ['Light Color', 'Smooth Finish', 'Durable', '30 Year Warranty'],
      thickness: '3/4"',
      width: '3.25"',
      finish: 'Gloss',
    },
    {
      id: 5,
      name: 'Hickory Engineered Wide Plank',
      type: 'engineered',
      species: 'Hickory',
      price: '$9.50/sq ft',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      rating: 5,
      features: ['Rustic Character', 'Wire Brushed', 'Extra Wide', 'Lifetime Warranty'],
      thickness: '5/8"',
      width: '9"',
      finish: 'Natural Oil',
      isNew: true,
    },
    {
      id: 6,
      name: 'Bamboo Luxury Flooring',
      type: 'luxury',
      species: 'Bamboo',
      price: '$6.00/sq ft',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      rating: 4,
      features: ['Eco-Friendly', 'Strand Woven', 'High Density', '25 Year Warranty'],
      thickness: '1/2"',
      width: '5"',
      finish: 'Semi-Gloss',
      isFeatured: true,
    },
  ];

  const filteredFloors = floorOptions.filter(floor => 
    activeType === 'all' || floor.type === activeType
  );

  const benefits = [
    {
      icon: TreePine,
      title: 'Premium Materials',
      description: 'Sourced from sustainable forests with FSC certification',
    },
    {
      icon: Shield,
      title: 'Lifetime Warranty',
      description: 'Comprehensive warranty coverage on all premium flooring',
    },
    {
      icon: Award,
      title: 'Expert Installation',
      description: 'Professional installation by certified flooring specialists',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Low VOC finishes and sustainable manufacturing processes',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-amber-50 via-white to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Premium Wood Flooring
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform your space with our exquisite collection of premium wood flooring. 
              From classic hardwood to innovative engineered solutions, find the perfect 
              foundation for your luxury interior.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="#flooring">
                <button className="bg-amber-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-amber-700 transition-colors duration-300">
                  Explore Collection
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300">
                  Free Consultation
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Wood Flooring
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer the finest selection of wood flooring with unmatched quality, 
              sustainability, and craftsmanship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-2xl mb-6">
                  <benefit.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Type Filter */}
      <section id="flooring" className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {floorTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveType(type.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeType === type.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                <type.icon className="w-5 h-5" />
                <span>{type.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Flooring Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFloors.map((floor, index) => (
              <motion.div
                key={floor.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={floor.image}
                    alt={floor.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 space-y-2">
                    {floor.isNew && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        New
                      </span>
                    )}
                    {floor.isFeatured && (
                      <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Species Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {floor.species}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full font-medium capitalize">
                      {floor.type}
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(floor.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {floor.name}
                  </h3>

                  {/* Specifications */}
                  <div className="mb-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Thickness:</span>
                      <span className="font-medium">{floor.thickness}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Width:</span>
                      <span className="font-medium">{floor.width}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Finish:</span>
                      <span className="font-medium">{floor.finish}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {floor.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-900">{floor.price}</span>
                    <span className="text-sm text-gray-500">per sq ft</span>
                  </div>

                  <Link href={`/wood-floor/${floor.id}`}>
                    <button className="w-full bg-amber-600 text-white py-3 rounded-md font-medium hover:bg-amber-700 transition-colors duration-200">
                      View Details
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Professional Installation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our certified flooring specialists ensure perfect installation with 
              attention to every detail.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Site Assessment',
                description: 'Comprehensive evaluation of your space, subfloor condition, and environmental factors.',
              },
              {
                step: '02',
                title: 'Professional Installation',
                description: 'Expert installation using industry-best practices and premium tools and materials.',
              },
              {
                step: '03',
                title: 'Quality Inspection',
                description: 'Thorough quality check and final inspection to ensure perfect results.',
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 text-white rounded-full text-2xl font-bold mb-6">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Schedule a free consultation with our flooring experts and discover 
              the perfect wood flooring solution for your home.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/contact">
                <button className="bg-white text-amber-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Get Free Quote
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300">
                  View Gallery
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}