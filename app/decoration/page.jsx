'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

// export const metadata = {
//   title: 'Interior Decoration - Hurla Interior | Premium Home Decor & Furnishing',
//   description: 'Transform your space with our premium interior decoration items including wardrobe sets, wall panels, WPC exteriors, louvers, and luxury furnishing solutions.',
// };

export default function Decoration() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const decorationItems = [
    {
      id: 1,
      name: 'Premium Wardrobe Sets',
      category: 'Storage Solutions',
      price: '₹45,000 - ₹1,20,000',
      image: 'https://angiehomes.co/cdn/shop/files/Tag-Luxury-Wardrobe-ANGIE-HOMES-1688387099157.jpg?v=1688387101',
      description: 'Complete wardrobe solutions with premium finishes, smart storage, and contemporary designs.',
      features: ['Sliding Doors', 'Soft Close', 'LED Lighting', 'Custom Compartments'],
      applications: ['Bedroom', 'Dressing Room', 'Guest Room'],
      material: 'Premium Plywood & Laminate',
      warranty: '5 Years'
    },
    {
      id: 2,
      name: '5 Flute Louver Panels',
      category: 'Wall Treatments',
      price: '₹280 - ₹450 per sq ft',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/4/303421624/KS/FX/AE/3487402/wall-louvers-wpc-500x500.png',
      description: 'Elegant fluted wood panels that add texture and sophistication to any interior space.',
      features: ['Natural Wood Grain', 'Easy Installation', 'Acoustic Benefits', 'Customizable'],
      applications: ['Living Room', 'Bedroom', 'Office', 'Reception'],
      material: 'Premium Engineered Wood',
      warranty: '3 Years'
    },
    {
      id: 3,
      name: 'WPC Exterior Cladding',
      category: 'Exterior Solutions',
      price: '₹320 - ₹580 per sq ft',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/5/306569057/FS/ED/IA/187623257/wpc-exterior-wall-cladding.jpeg',
      description: 'Weather-resistant WPC cladding for stunning exterior facades and outdoor applications.',
      features: ['Weather Resistant', 'Termite Proof', 'Low Maintenance', 'UV Stable'],
      applications: ['Facade', 'Balcony', 'Garden Area', 'Outdoor Walls'],
      material: 'Wood Plastic Composite',
      warranty: '10 Years'
    },
    {
      id: 4,
      name: 'Decorative Wall Panels',
      category: 'Wall Treatments',
      price: '₹200 - ₹800 per sq ft',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/2/383571464/QT/HK/IK/17633583/decorative-wooden-wall-panels.jpg',
      description: '3D textured wall panels that create stunning focal points and add depth to your interiors.',
      features: ['3D Texture', 'Paintable Surface', 'Easy Installation', 'Moisture Resistant'],
      applications: ['Living Room', 'Bedroom', 'Office', 'Hotel Lobby'],
      material: 'MDF / PVC / Gypsum',
      warranty: '2 Years'
    },
    {
      id: 5,
      name: 'Designer Ceiling Solutions',
      category: 'Ceiling Systems',
      price: '₹150 - ₹500 per sq ft',
      image: 'https://suryakerala.com/wp-content/uploads/2025/02/baffle-ceiling-hunter-douglas-surya-enterprises-kerala-1.jpg',
      description: 'Modern false ceiling designs with integrated lighting and premium finishes.',
      features: ['Integrated Lighting', 'Gypsum Board', 'Modern Design', 'Sound Insulation'],
      applications: ['Living Room', 'Bedroom', 'Office', 'Commercial'],
      material: 'Gypsum Board & Metal Frame',
      warranty: '5 Years'
    },
    {
      id: 6,
      name: 'Luxury Flooring Solutions',
      category: 'Flooring',
      price: '₹80 - ₹350 per sq ft',
      image: 'https://blog.bairdbrothers.com/wp-content/uploads/2023/10/Natural-stone-flooring-ceramic-floor-tile-luxury-vinyl-tile-and-solid-hardwood-flooring-options.jpg',
      description: 'Premium laminate and vinyl flooring options for residential and commercial spaces.',
      features: ['Scratch Resistant', 'Water Resistant', 'Easy Maintenance', 'Natural Look'],
      applications: ['Living Room', 'Bedroom', 'Office', 'Retail'],
      material: 'Laminate / Vinyl / SPC',
      warranty: '15 Years'
    },
    {
      id: 7,
      name: 'Window Blinds & Curtains',
      category: 'Window Treatments',
      price: '₹120 - ₹400 per sq ft',
      image: 'https://m.media-amazon.com/images/I/61W+zqBMINL._UF894,1000_QL80_.jpg',
      description: 'Elegant window treatments including motorized blinds, curtains, and sheer panels.',
      features: ['Motorized Options', 'Light Control', 'Privacy', 'Remote Control'],
      applications: ['Living Room', 'Bedroom', 'Office', 'Conference Room'],
      material: 'Fabric / Wood / Aluminum',
      warranty: '3 Years'
    },
    {
      id: 8,
      name: 'Designer Lighting Solutions',
      category: 'Lighting',
      price: '₹2,500 - ₹25,000 per piece',
      image: 'https://thedecorkart.com/cdn/shop/articles/Revitalize_Your_Bedroom_with_Innovative_Lighting_Solutions.jpg?v=1716144383',
      description: 'Contemporary lighting fixtures including chandeliers, pendant lights, and LED strips.',
      features: ['LED Technology', 'Dimmable', 'Energy Efficient', 'Smart Controls'],
      applications: ['Living Room', 'Dining', 'Bedroom', 'Kitchen'],
      material: 'Metal / Glass / Crystal',
      warranty: '2 Years'
    },
    {
      id: 9,
      name: 'Modular Storage Systems',
      category: 'Storage Solutions',
      price: '₹15,000 - ₹60,000',
      image: 'https://danishdesignco.com.sg/wp-content/uploads/2021/04/String.jpg',
      description: 'Versatile modular storage units for organized and clutter-free living spaces.',
      features: ['Modular Design', 'Multiple Configurations', 'Easy Assembly', 'Space Optimization'],
      applications: ['Living Room', 'Study', 'Kids Room', 'Office'],
      material: 'Engineered Wood',
      warranty: '3 Years'
    }
  ];

  const categories = ['All', 'Storage Solutions', 'Wall Treatments', 'Exterior Solutions', 'Ceiling Systems', 'Flooring', 'Window Treatments', 'Lighting'];

  const filteredItems = activeCategory === 'All' 
    ? decorationItems 
    : decorationItems.filter(item => item.category === activeCategory);

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
            alt="Interior Decoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="inline-block bg-amber-600/90 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
              Premium Interior Decoration • 1000+ Products
            </span>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block">Beautiful</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Interiors
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Transform your house into a stunning home with our premium collection of 
              interior decoration items, from elegant wall panels to luxury furniture solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-xl"
              >
                Explore Products
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/40 hover:border-white text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Get Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 opacity-80">Discover our collection</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border border-white/40 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '1000+', label: 'Premium Products' },
              { number: '50+', label: 'Design Styles' },
              { number: '25+', label: 'Trusted Brands' },
              { number: '5000+', label: 'Happy Homes' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Decoration Items */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Choose Our Products
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We curate only the finest interior decoration items that combine aesthetics, 
              durability, and functionality for modern homes.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: 'Premium Quality',
                description: 'Only the finest materials and craftsmanship for lasting beauty.',
                icon: '💎'
              },
              {
                title: 'Latest Trends',
                description: 'Stay ahead with contemporary designs and global trends.',
                icon: '🎨'
              },
              {
                title: 'Expert Installation',
                description: 'Professional installation by certified technicians.',
                icon: '🔧'
              },
              {
                title: 'Warranty Support',
                description: 'Comprehensive warranty and after-sales service.',
                icon: '🛡️'
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Product Range
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive collection of interior decoration items 
              designed to elevate every corner of your home.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          {/* <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex justify-center mb-16"
          >
            <div className="flex flex-wrap justify-center gap-4 bg-white p-2 rounded-2xl shadow-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm ${
                    activeCategory === category
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div> */}

          {/* Products Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="group cursor-pointer"
                onClick={() => setSelectedProduct(item)}
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-600/90 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg">
                        {item.category}
                      </span>
                    </div>

                    {/* Price Badge */}
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                        {item.price}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                      {item.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-2">
                      {item.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Material & Warranty */}
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span>{item.material}</span>
                      <span>{item.warranty} Warranty</span>
                    </div>

                    <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Complete Service Package
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From consultation to installation, we provide end-to-end services 
              for all your interior decoration needs.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Free Consultation',
                description: 'Expert advice on product selection and design planning.',
                icon: '💬',
                features: ['Site Visit', '3D Visualization', 'Product Recommendation']
              },
              {
                title: 'Professional Installation',
                description: 'Certified technicians ensure perfect installation.',
                icon: '🔨',
                features: ['Skilled Technicians', 'Quality Tools', 'Clean Installation']
              },
              {
                title: 'After-Sales Support',
                description: 'Comprehensive warranty and maintenance services.',
                icon: '🤝',
                features: ['Warranty Coverage', 'Maintenance Tips', '24/7 Support']
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-600 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Let our experts help you choose the perfect decoration items for your space. 
              Get personalized recommendations and professional installation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-amber-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl"
                >
                  Get Free Consultation
                </motion.button>
              </Link>
              <Link href="tel:+1234567890">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300"
                >
                  Call Now
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Modal Header */}
            <div className="relative h-64 rounded-t-3xl overflow-hidden">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-6 left-6">
                <span className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {selectedProduct.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-2xl font-bold text-amber-600">{selectedProduct.price}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Material</div>
                  <div className="font-semibold">{selectedProduct.material}</div>
                </div>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {selectedProduct.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.applications.map((app, index) => (
                    <span
                      key={index}
                      className="bg-amber-100 text-amber-800 px-3 py-2 rounded-lg text-sm font-medium"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Warranty */}
              <div className="bg-gray-50 p-4 rounded-2xl mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">{selectedProduct.warranty} Warranty Included</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="flex-1">
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-xl font-semibold transition-colors duration-300">
                    Get Quote
                  </button>
                </Link>
                <button className="flex-1 border-2 border-gray-300 hover:border-amber-600 text-gray-700 hover:text-amber-600 py-3 px-6 rounded-xl font-semibold transition-colors duration-300">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
