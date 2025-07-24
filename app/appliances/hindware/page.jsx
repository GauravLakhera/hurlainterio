'use client';
import { useState } from 'react';
import HindwareHero from './components/HindwareHero';
import HindwareProductCard from './components/HindwareProductCard';
import ProductModal from '../elica/components/ProductModal'; // Reusing modal
import FilterSort from '../elica/components/FilterSort'; // Reusing filter

const hindwareProducts = [
  {
    id: 1,
    name: "Hindware Kitchen Sink Atlantic 304 Grade",
    price: 12990,
    originalPrice: 15990,
    image: "https://m.media-amazon.com/images/I/71-sXVj9ThL.jpg",
    shortDescription: "Premium 304-grade stainless steel kitchen sink with modern design and superior durability.",
    fullDescription: "The Hindware Atlantic kitchen sink features premium 304-grade stainless steel construction with sound-absorbing pads. Includes drain basket, waste coupling, and overflow system. Perfect for modern Indian kitchens with its elegant finish and practical design.",
    features: ["304 Grade Steel", "Sound Dampening", "Drain Basket", "Overflow System", "Scratch Resistant"],
    category: "Kitchen Sink",
    rating: 4.4,
    reviews: 156
  },
  {
    id: 2,
    name: "Hindware Chimney Nadia 60cm Auto Clean",
    price: 24990,
    image: "https://rukminim2.flixcart.com/image/704/844/k19lvgw0/chimney/q/x/g/nadia-60-cm-hindware-original-imafkvp2szqnztym.jpeg?q=90&crop=false",
    shortDescription: "60cm auto-clean kitchen chimney with powerful suction and easy maintenance features.",
    fullDescription: "Advanced auto-clean chimney with thermal auto-clean technology. Features powerful motor with 1200 m³/hr suction capacity, LED lighting, and touch controls. Designed specifically for Indian cooking conditions.",
    features: ["Auto Clean", "1200 m³/hr Suction", "Touch Control", "LED Lighting", "Thermal Technology"],
    category: "Kitchen Chimney",
    rating: 4.3,
    reviews: 203
  },
  {
    id: 3,
    name: "Hindware Gas Hob Armo 4 Burner Glass Top",
    price: 18990,
    originalPrice: 22990,
    image: "https://decure.in/cdn/shop/files/1080_armo_plus_gl_4b_c.jpg?v=1715676099&width=1445",
    shortDescription: "4-burner gas hob with premium glass top and high-efficiency brass burners.",
    fullDescription: "Premium 4-burner gas cooktop with toughened glass top and high-efficiency brass burners. Features auto-ignition, flame failure safety device, and spill-proof design. Perfect for large families and extensive cooking needs.",
    features: ["4 Burner", "Glass Top", "Auto Ignition", "Brass Burners", "Safety Device"],
    category: "Gas Hob",
    rating: 4.5,
    reviews: 189
  },
  {
    id: 4,
    name: "Hindware Water Heater Cistern Electric",
    price: 8990,
    image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/j-R7zLtUTs-hindware-hswhcr25wm2vgl-water-heaters-491581528-i-2-1200wx1200h.jpeg",
    shortDescription: "Energy-efficient electric water heater with advanced heating technology.",
    fullDescription: "Compact electric water heater with advanced heating element and thermal cut-out protection. Features rust-proof outer body, magnesium anode for extended tank life, and pressure relief valve for safety.",
    features: ["Electric Heating", "Thermal Protection", "Rust Proof", "Magnesium Anode", "Pressure Relief"],
    category: "Water Heater",
    rating: 4.2,
    reviews: 134
  },
  {
    id: 5,
    name: "Hindware Kitchen Tap Flora Single Lever",
    price: 3990,
    originalPrice: 4990,
    image: "https://m.media-amazon.com/images/I/71ks0jLEV9L.jpg",
    shortDescription: "Premium single lever kitchen tap with smooth operation and elegant design.",
    fullDescription: "Elegant single lever kitchen tap with ceramic cartridge for smooth operation. Features chrome-plated finish, 360-degree swivel spout, and aerator for water saving. Easy installation and maintenance.",
    features: ["Single Lever", "Ceramic Cartridge", "Chrome Plated", "360° Swivel", "Water Saving"],
    category: "Kitchen Tap",
    rating: 4.6,
    reviews: 267
  },
  {
    id: 6,
    name: "Hindware Bathroom Set Royal Premium",
    price: 15990,
    image: "https://hindware.com/wp-content/uploads/2021/05/Cistern_Home_Page_Menu_315x405-Pixels.jpeg",
    shortDescription: "Complete bathroom accessories set with premium finish and modern design.",
    fullDescription: "Comprehensive bathroom accessories set including towel rod, soap dispenser, tissue holder, and hooks. Made from high-quality materials with rust-resistant coating and contemporary design.",
    features: ["Complete Set", "Rust Resistant", "Premium Finish", "Modern Design", "Easy Installation"],
    category: "Bathroom Accessories",
    rating: 4.4,
    reviews: 98
  },
  {
    id: 7,
    name: "Hindware Built-in Hob Vetro 3 Burner",
    price: 13990,
    image: "https://m.media-amazon.com/images/I/61K0JJUoKnL._UF894,1000_QL80_.jpg",
    shortDescription: "3-burner built-in gas hob with toughened glass top and efficient burners.",
    fullDescription: "Sleek 3-burner built-in gas hob with black toughened glass top. Features high-efficiency burners with different heat outputs, auto-ignition system, and easy-clean surface for modern kitchen aesthetics.",
    features: ["3 Burner", "Built-in Design", "Toughened Glass", "Auto Ignition", "Easy Clean"],
    category: "Built-in Hob",
    rating: 4.3,
    reviews: 145
  },
  {
    id: 8,
    name: "Hindware Exhaust Fan Vento Smart",
    price: 2990,
    originalPrice: 3490,
    image: "https://m.media-amazon.com/images/I/61fzRmdkoDL._UF894,1000_QL80_.jpg",
    shortDescription: "High-performance exhaust fan with smart features and energy-efficient motor.",
    fullDescription: "Advanced exhaust fan with high-speed motor and aerodynamic blade design. Features auto-shut mechanism, LED indicator, and whisper-quiet operation. Perfect for kitchens and bathrooms.",
    features: ["High Speed", "Auto Shut", "LED Indicator", "Quiet Operation", "Energy Efficient"],
    category: "Exhaust Fan",
    rating: 4.1,
    reviews: 176
  }
];

export default function HindwarePage() {
  const [products, setProducts] = useState(hindwareProducts);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSort = (sortBy) => {
    const sortedProducts = [...products].sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
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
    <div className="min-h-screen bg-gray-50">
      <HindwareHero />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Hindware Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our featured collection of premium Hindware products, 
              designed to enhance your kitchen and bathroom experience
            </p>
          </div>

          <FilterSort 
            onSort={handleSort}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            productsCount={products.length}
          />

          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {products.map((product) => (
              <HindwareProductCard
                key={product.id}
                product={product}
                viewMode={viewMode}
                onViewDetail={() => openModal(product)}
              />
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
