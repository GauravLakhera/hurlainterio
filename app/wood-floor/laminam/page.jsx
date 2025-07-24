"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import LaminamHero from "./components/LaminamHero";
import LaminamProductCard from "./components/LaminamProductCard";
import ProductModal from "./components/ProductModal";
import FilterSort from "../../appliances/elica/components/FilterSort";

const laminamProducts = [
  {
    id: 1,
    name: "Laminam Calacatta Oro Extra",
    price: 4990,
    originalPrice: 5990,
    image:
      "https://www.cawdorstonegallery.co.uk/wp-content/uploads/2024/09/calacatta-oro-venato-laminam-cawdor-stone-gallery.png",
    shortDescription:
      "Luxurious Calacatta marble replica with golden veining for sophisticated interiors.",
    fullDescription:
      "Premium ceramic slab replicating the iconic Calacatta marble with distinctive golden veining. This large-format surface combines the beauty of natural stone with superior technical performance, perfect for high-end residential and commercial applications.",
    features: [
      "3mm Thickness",
      "Ultra-Thin",
      "Stain Resistant",
      "Heat Resistant",
      "Scratch Resistant",
    ],
    category: "Marble Effect",
    collection: "Calacatta",
    size: "1620x3240mm",
    thickness: "3mm",
    finish: "Polished",
    rating: 4.9,
    reviews: 87,
    applications: ["Countertops", "Wall Cladding", "Furniture", "Facades"],
  },
  {
    id: 2,
    name: "Laminam Nero Greco Anticato",
    price: 3990,
    image:
      "https://images.squarespace-cdn.com/content/v1/65f17efae978dd703d6ac8ad/57ea703f-89e7-4032-b9c6-78eb843ef611/nero%2Bgreco%2B4.jpg",
    shortDescription:
      "Elegant black marble with subtle veining and antique finish for timeless appeal.",
    fullDescription:
      "Sophisticated interpretation of black marble with delicate white veining and an antique finish. This ceramic slab offers the drama of dark stone while maintaining easy maintenance and superior durability for luxury applications.",
    features: [
      "5.6mm Thickness",
      "Antique Finish",
      "Low Maintenance",
      "UV Resistant",
      "Frost Resistant",
    ],
    category: "Marble Effect",
    collection: "Nero Greco",
    size: "1620x3240mm",
    thickness: "5.6mm",
    finish: "Antique",
    rating: 4.8,
    reviews: 124,
    applications: ["Flooring", "Wall Cladding", "Bathroom", "Kitchen"],
  },
  {
    id: 3,
    name: "Laminam Oxide Nero",
    price: 3490,
    originalPrice: 3990,
    image:
      "https://res.cloudinary.com/trends-publishing/image/upload/s--8vtHp9Ps--/c_scale,dpr_2.0,g_center,w_320/e_anti_removal:10,g_south_east,l_trends_watermark,o_70,w_50,x_10,y_10/f_auto,q_auto:best/cb_5011418603201305.jpg",
    shortDescription:
      "Industrial-inspired oxidized metal effect for contemporary architectural projects.",
    fullDescription:
      "Contemporary ceramic surface inspired by oxidized metal textures. Features deep black tones with subtle metallic undertones, perfect for modern architectural applications and industrial-chic interiors.",
    features: [
      "12mm Thickness",
      "Metal Effect",
      "Anti-Slip",
      "Chemical Resistant",
      "Easy Clean",
    ],
    category: "Metal Effect",
    collection: "Oxide",
    size: "1000x3000mm",
    thickness: "12mm",
    finish: "Natural",
    rating: 4.7,
    reviews: 156,
    applications: ["Flooring", "Facades", "Ventilated Systems", "Countertops"],
  },
  {
    id: 4,
    name: "Laminam Cemento Rasato Grigio",
    price: 2990,
    image:
      "https://laminam-cdn.thron.com/delivery/public/image/laminam/77a1372a-e93d-40a8-98ef-ab39e643ba45/miwtpa/std/290x290/Natural-thumbnail.webp?scalemode=centered&format=auto",
    shortDescription:
      "Minimalist concrete effect with smooth texture for modern architectural spaces.",
    fullDescription:
      "Clean, minimalist interpretation of polished concrete with smooth, uniform texture. This ceramic slab captures the essence of contemporary concrete architecture while offering superior performance and easier maintenance.",
    features: [
      "3mm Thickness",
      "Concrete Effect",
      "Uniform Texture",
      "Water Resistant",
      "Impact Resistant",
    ],
    category: "Concrete Effect",
    collection: "Cemento Rasato",
    size: "1620x3240mm",
    thickness: "3mm",
    finish: "Natural",
    rating: 4.6,
    reviews: 203,
    applications: [
      "Wall Cladding",
      "Furniture",
      "Interior Design",
      "Retail Spaces",
    ],
  },
  {
    id: 5,
    name: "Laminam Travertino Romano",
    price: 4490,
    originalPrice: 4990,
    image:
      "https://laminam-cdn.thron.com/delivery/public/image/laminam/d7e3c933-c989-4bd5-9d53-9f6e7610b9e7/miwtpa/std/290x290/Bush%20Hammered-thumbnail.webp?scalemode=centered&format=auto",
    shortDescription:
      "Classic Roman travertine reproduction with authentic texture and natural warmth.",
    fullDescription:
      "Faithful reproduction of classic Roman travertine with authentic surface texture and natural color variations. This ceramic slab brings the timeless beauty of Italian stone to modern architecture with enhanced performance characteristics.",
    features: [
      "5.6mm Thickness",
      "Stone Texture",
      "Natural Variations",
      "Thermal Shock Resistant",
      "Eco-Friendly",
    ],
    category: "Stone Effect",
    collection: "Travertino",
    size: "1620x3240mm",
    thickness: "5.6mm",
    finish: "Natural",
    rating: 4.8,
    reviews: 178,
    applications: ["Flooring", "Pool Areas", "Outdoor Spaces", "Bathrooms"],
  },
  {
    id: 6,
    name: "Laminam Wood Essence Rovere",
    price: 3990,
    image:
      "https://materialdepot-images-hbh2cjbvbtfmanhx.z02.azurefd.net/V000494/essenze-rovere-chiaro-nexion-tiles-tiles/essenze-rovere-chiaro-1200x200-mm-wood-look-9-mm/2.jpg?width=600",
    shortDescription:
      "Authentic wood grain reproduction with ceramic durability for versatile applications.",
    fullDescription:
      "Sophisticated ceramic interpretation of oak wood grain with realistic texture and natural color variations. Combines the warmth of wood aesthetics with the technical advantages of ceramic, ideal for high-traffic areas.",
    features: [
      "12mm Thickness",
      "Wood Grain",
      "High Traffic",
      "Moisture Resistant",
      "Fade Resistant",
    ],
    category: "Wood Effect",
    collection: "Wood Essence",
    size: "1000x3000mm",
    thickness: "12mm",
    finish: "Natural",
    rating: 4.7,
    reviews: 145,
    applications: ["Flooring", "Furniture", "Retail", "Hospitality"],
  },
  {
    id: 7,
    name: "Laminam Fokos Cenere",
    price: 5490,
    image:
      "https://worktoplibrary.co.uk/wp-content/uploads/2022/03/laminam-fokos-sale-sample.jpg",
    shortDescription:
      "Contemporary ash-toned surface with subtle texture for sophisticated interiors.",
    fullDescription:
      "Modern ceramic surface in sophisticated ash tones with subtle textural variations. Part of the exclusive Fokos collection, this slab offers exceptional versatility for luxury residential and commercial projects.",
    features: [
      "3mm Thickness",
      "Exclusive Collection",
      "Sophisticated Tone",
      "Large Format",
      "Premium Quality",
    ],
    category: "Contemporary",
    collection: "Fokos",
    size: "1620x3240mm",
    thickness: "3mm",
    finish: "Natural",
    rating: 4.9,
    reviews: 92,
    applications: ["Luxury Interiors", "Hotels", "Offices", "Showrooms"],
  },
  {
    id: 8,
    name: "Laminam Pietra di Savoia Antracite",
    price: 4290,
    originalPrice: 4790,
    image:
      "https://stone-tile.com/media/catalog/product/p/i/pietra_di_savoia_antracite.jpg?auto=webp&format=pjpg&width=768&height=768&fit=crop",
    shortDescription:
      "Alpine stone replica with charcoal tones for elegant architectural applications.",
    fullDescription:
      "Elegant reproduction of Alpine Pietra di Savoia stone in sophisticated charcoal tones. This ceramic slab captures the natural beauty of mountain stone while providing superior technical performance for demanding applications.",
    features: [
      "5.6mm Thickness",
      "Stone Replica",
      "Alpine Origin",
      "Weather Resistant",
      "Non-Slip",
    ],
    category: "Stone Effect",
    collection: "Pietra di Savoia",
    size: "1620x3240mm",
    thickness: "5.6mm",
    finish: "Natural",
    rating: 4.8,
    reviews: 167,
    applications: ["Facades", "Outdoor Spaces", "Flooring", "Cladding"],
  },
];

export default function LaminamPage() {
  const [products, setProducts] = useState(laminamProducts);
  const [viewMode, setViewMode] = useState("grid");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSort = (sortBy) => {
    const sortedProducts = [...products].sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        default:
          return 0;
      }
    });
    setProducts(sortedProducts);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <LaminamHero />

      {/* Brand Story Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Laminam Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Since 2001, Laminam has been pioneering the large-format ceramic slab industry, 
                  revolutionizing architecture and design with ultra-thin, high-performance surfaces 
                  that combine aesthetic beauty with technical excellence.
                </p>
                <p>
                  Made in Italy with cutting-edge technology, Laminam slabs offer unlimited design 
                  possibilities while maintaining superior durability, making them the preferred 
                  choice for architects and designers worldwide.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">20+</div>
                    <div className="text-sm text-gray-500">Years Innovation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">100+</div>
                    <div className="text-sm text-gray-500">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">500+</div>
                    <div className="text-sm text-gray-500">Surface Options</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/api/placeholder/600/400" 
                alt="Laminam Manufacturing"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm text-gray-600">Made in Italy</div>
                <div className="text-lg font-bold text-gray-900">Premium Quality</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Premium Laminam Collections
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our curated selection of large-format ceramic slabs,
              engineered for beauty, performance, and versatility
            </p>
          </div>

          <FilterSort
            onSort={handleSort}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            productsCount={products.length}
          />

          <div
            className={`grid gap-6 ${
              viewMode === "grid"
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "grid-cols-1"
            }`}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <LaminamProductCard
                  product={product}
                  viewMode={viewMode}
                  onViewDetail={() => openModal(product)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Technical Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🏗️",
                title: "Large Format",
                description: "Up to 1620x3240mm slabs for seamless surfaces",
              },
              {
                icon: "🔥",
                title: "Heat Resistant",
                description: "Withstands extreme temperatures up to 1200°C",
              },
              {
                icon: "💧",
                title: "Non-Porous",
                description: "Zero water absorption for hygiene and durability",
              },
              {
                icon: "⚡",
                title: "Ultra-Thin",
                description: "From 3mm thickness without compromising strength",
              },
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
