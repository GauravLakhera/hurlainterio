'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';

const CollectionCard = ({ collection }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
    >
      <Link href={`/collections/${collection.id}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={collection.image}
            alt={collection.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center space-x-2 text-white">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">Premium Collection</span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
            {collection.name}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {collection.description}
          </p>
          
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {collection.features.map((feature, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-sm font-medium">
              Explore Collection
            </span>
            <motion.div
              whileHover={{ x: 5 }}
              className="text-amber-600 group-hover:text-amber-700"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CollectionCard;