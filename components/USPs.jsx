'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Wrench, Award, Truck, Phone } from 'lucide-react';

const USPs = () => {
  const usps = [
    {
      icon: Shield,
      title: '15-Year Warranty',
      description: 'Comprehensive warranty coverage on all our premium furniture pieces.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Clock,
      title: '45-Day Production',
      description: 'Fast and efficient production timeline without compromising on quality.',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Wrench,
      title: 'Expert Installation',
      description: 'Professional installation service by our certified craftsmen.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only the finest materials and meticulous attention to detail.',
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
    },
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'Complimentary white-glove delivery service within metro areas.',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your needs.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Hurla Interio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Where design meets detail. We deliver seamless, space-smart kitchen and wardrobe solutions with an uncompromised focus on quality and aesthetics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${usp.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <usp.icon className={`w-8 h-8 ${usp.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                  {usp.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {usp.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPs;