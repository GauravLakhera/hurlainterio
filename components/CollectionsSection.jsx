"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CollectionCard from "./CollectionCard";
import CollectionImage1 from "../public/assets/Kitchen/collection-img-1.png";
import CollectionImage2 from "../public/assets/Kitchen/collection-img-2.jpg";
import CollectionImage3 from "../public/assets/Wardrobe/collection-img-3.png";
import CollectionImage4 from "../public/assets/Wardrobe/collection-img-4.png";
// Add your wall panel and WPC exterior images
import WallPanelImage from "../public/assets/19.jpg"; // Add your actual image path
import WPCExteriorImage from "../public/assets/20.jpg"; // Add your actual image path

const CollectionsSection = () => {
  const collections = [
    {
      id: "modular-kitchen",
      name: "Elegante Modular Kitchen",
      description:
        "A perfect blend of modern aesthetics and smart storage, the Elegante Modular Kitchen features sleek cabinets, hidden appliances, and a clutter-free layout for effortless cooking.",
      image: CollectionImage1.src,
      features: ["Premium Materials", "Handcrafted Details", "Custom Finishes"],
      category: "Kitchen",
    },
    {
      id: "rustica-luxe",
      name: "Rustica Luxe Kitchen",
      description:
        "Inspired by warm tones and natural finishes, Rustica Luxe combines wooden textures with high-end appliances, creating a cozy yet sophisticated culinary space.",
      image: CollectionImage2.src,
      features: ["Rich Textures", "Bold Designs", "Statement Pieces"],
      category: "Kitchen",
    },
    {
      id: "slide-wardrobe",
      name: "Urban Slide Wardrobe",
      description:
        "Designed for compact city living, this sliding-door wardrobe offers maximum storage with a sleek, contemporary design — perfect for bedrooms where space is a luxury.",
      image: CollectionImage3.src,
      features: ["Space Efficient", "Modern Aesthetics", "Premium Hardware"],
      category: "Wardrobe",
    },
    {
      id: "closet",
      name: "Classique Walk-In Closet",
      description:
        "Experience the ultimate in wardrobe luxury with Classique — a walk-in wardrobe concept offering open shelves, drawer organizers, and ambient lighting for a premium dressing experience.",
      image: CollectionImage4.src,
      features: ["Luxury Design", "Refined Details", "Custom Organization"],
      category: "Wardrobe",
    },
    {
      id: "wall-panels",
      name: "Architectural Wall Panels",
      description:
        "Transform your interiors with our premium wall panel collection featuring 3D textures, natural wood finishes, and contemporary patterns that add depth and character to any space.",
      image:
        "https://images.unsplash.com/photo-1701422522251-332666e37ed3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["3D Textures", "Natural Finishes", "Easy Installation"],
      category: "Wall Panel",
    },
    {
      id: "wpc-exteriors",
      name: "WPC Exterior Cladding",
      description:
        "Weather-resistant WPC exterior solutions that combine the beauty of wood with advanced composite technology, perfect for facades, decking, and outdoor applications.",
      image: WPCExteriorImage?.src || "/api/placeholder/400/300",
      features: ["Weather Resistant", "Low Maintenance", "Eco-Friendly"],
      category: "Exterior",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-amber-100 text-amber-800 px-6 py-2 rounded-full text-sm font-medium mb-6">
            Premium Collections
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Curated for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Perfection
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each collection is meticulously designed to bring luxury,
            functionality, and timeless elegance to your living spaces.
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-20">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {collection.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {collection.name}
                  </h3>

                  <p className="text-gray-600 mb-6 test-sm leading-relaxed">
                    {collection.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {collection.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium border border-amber-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 "></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Space?
              </h3>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Let our design experts help you choose the perfect collection
                for your dream home. Get personalized recommendations and
                detailed information about our premium offerings.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-amber-600 px-10 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Contact Us for More Info</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.button>
                </Link>

                <Link href="tel:+1234567890">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white/30 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300 flex items-center space-x-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>Call Now</span>
                  </motion.button>
                </Link>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold mb-2">24/7</div>
                    <div className="text-white/80">Customer Support</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-2">Free</div>
                    <div className="text-white/80">Design Consultation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-2">100+</div>
                    <div className="text-white/80">Completed Projects</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionsSection;
