'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Zap, Thermometer, Droplets, Wind, Star, Award, Shield, Wrench, ChevronRight, Users, Globe, TrendingUp } from 'lucide-react';

export default function Appliances() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Brands', icon: Zap },
    { id: 'kitchen', name: 'Kitchen Solutions', icon: Thermometer },
    { id: 'bathroom', name: 'Bathroom Fittings', icon: Droplets },
    { id: 'hardware', name: 'Furniture Hardware', icon: Wrench },
  ];

  // Featured brands with their specialties
  const brands = [
    {
      id: 'elica',
      name: 'ELICA',
      tagline: 'Italian Excellence in Kitchen Design',
      description: 'Premium kitchen hoods, induction hobs, and cooking appliances with 50+ years of Italian craftsmanship.',
      image: '/api/placeholder/600/400',
      category: 'kitchen',
      origin: 'Italy',
      since: '1970',
      products: '1000+',
      specialty: 'Kitchen Appliances',
      color: 'blue',
      features: ['Filterless Technology', 'Smart Controls', 'Italian Design', 'Energy Efficient'],
      href: '/appliances/elica'
    },
    {
      id: 'hindware',
      name: 'HINDWARE',
      tagline: 'Trusted Indian Excellence',
      description: 'Complete kitchen and bathroom solutions with premium sinks, taps, and home improvement products.',
      image: '/api/placeholder/600/400',
      category: 'bathroom',
      origin: 'India',
      since: '1960',
      products: '500+',
      specialty: 'Kitchen & Bathroom',
      color: 'orange',
      features: ['Stainless Steel', 'Rust Resistant', 'Modern Design', 'Durability'],
      href: '/appliances/hindware'
    },
    {
      id: 'hafele',
      name: 'HÄFELE',
      tagline: 'German Engineering Excellence',
      description: 'Premium furniture hardware and architectural solutions with German precision and innovation.',
      image: '/api/placeholder/600/400',
      category: 'hardware',
      origin: 'Germany',
      since: '1923',
      products: '15000+',
      specialty: 'Furniture Hardware',
      color: 'green',
      features: ['German Engineering', 'Precision Fittings', 'Soft Close', 'Premium Materials'],
      href: '/appliances/hafele'
    }
  ];

  const filteredBrands = brands.filter(brand => 
    activeCategory === 'all' || brand.category === activeCategory
  );

  const benefits = [
    {
      icon: Award,
      title: 'Premium Brands',
      description: 'Curated selection from world-renowned manufacturers with proven excellence',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Comprehensive warranty coverage and after-sales support for all products',
    },
    {
      icon: Wrench,
      title: 'Professional Service',
      description: 'Expert installation and maintenance by certified technicians',
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: 'Dedicated support team for product selection and technical assistance',
    },
  ];

  const stats = [
    { label: 'Happy Customers', value: '10,000+', icon: Users },
    { label: 'Premium Brands', value: '25+', icon: Award },
    { label: 'Products Available', value: '5,000+', icon: TrendingUp },
    { label: 'Years Experience', value: '15+', icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Premium Home Solutions
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Home with
              <span className="block text-amber-400">Premium Appliances</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover our curated collection of world-class appliances from Italy's Elica, 
              India's trusted Hindware, and Germany's precision-engineered Häfele.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="#brands">
                <button className="bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-all duration-300 transform hover:scale-105">
                  Explore Brands
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Get Consultation
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-xl"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-xl mb-4">
                  <stat.icon className="w-6 h-6 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section id="brands" className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Premium Brand Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We've partnered with the world's most trusted brands to bring you 
              the finest in home appliances and solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredBrands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Brand Header */}
                <div className={`p-6 bg-gradient-to-r ${
                  brand.color === 'blue' ? 'from-blue-600 to-blue-700' :
                  brand.color === 'orange' ? 'from-orange-600 to-red-600' :
                  'from-green-600 to-emerald-600'
                } text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className="w-full h-full rounded-full bg-white transform translate-x-8 -translate-y-8"></div>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">{brand.name}</h3>
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                        Since {brand.since}
                      </span>
                    </div>
                    <p className="text-lg font-medium mb-2">{brand.tagline}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Globe className="w-4 h-4" />
                        <span>{brand.origin}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>{brand.products}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brand Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                {/* Brand Details */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {brand.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {brand.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${
                            brand.color === 'blue' ? 'bg-blue-500' :
                            brand.color === 'orange' ? 'bg-orange-500' :
                            'bg-green-500'
                          }`}></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={brand.href}>
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      brand.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                      brand.color === 'orange' ? 'bg-orange-600 hover:bg-orange-700' :
                      'bg-green-600 hover:bg-green-700'
                    } text-white transform hover:scale-105`}>
                      <span>Explore {brand.name}</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Hurla Interior
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We bring you the world's finest appliances with unmatched service 
              and support for your home transformation journey.
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
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-2xl mb-6 group-hover:bg-amber-200 transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let our experts help you choose the perfect appliances for your lifestyle. 
              From consultation to installation, we're with you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/contact">
                <button className="bg-white text-amber-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300">
                  View Our Work
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
}
