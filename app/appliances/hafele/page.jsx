"use client";
import { useState } from "react";
import HafeleHero from "./components/HafeleHero";
import HafeleProductCard from "./components/HafeleProductCard";
import ProductModal from "../elica/components/ProductModal"; // Reusing modal
import FilterSort from "../elica/components/FilterSort"; // Reusing filter

const hafeleProducts = [
  {
    id: 1,
    name: "Häfele Cabinet Handle Stainless Steel Premium",
    price: 2990,
    originalPrice: 3490,
    image:
      "https://www.hafele.com/INTERSHOP/static/WFS/Haefele-HAC-Site/-/Haefele-HAC/en_US/opentext/assets/hac/Handles_and_Knobs_Teaser_880x820.jpg",
    shortDescription:
      "Premium stainless steel cabinet handles with German engineering and modern design.",
    fullDescription:
      "High-quality stainless steel cabinet handles featuring German precision engineering. Designed for durability and aesthetic appeal with brushed finish. Perfect for modern kitchen and wardrobe applications.",
    features: [
      "Stainless Steel",
      "German Engineering",
      "Brushed Finish",
      "Ergonomic Design",
      "Corrosion Resistant",
    ],
    category: "Cabinet Hardware",
    rating: 4.7,
    reviews: 234,
  },
  {
    id: 2,
    name: "Häfele Soft Close Drawer Slides 450mm",
    price: 4990,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2020/12/XH/WG/GF/13312678/hafele-soft-close-ball-bearing-telescopic-channel.jpg",
    shortDescription:
      "Premium soft-close drawer slides with smooth operation and silent closing mechanism.",
    fullDescription:
      "Advanced soft-close drawer slides with German technology for smooth and silent operation. Features full extension, high load capacity, and easy installation. Ideal for kitchen cabinets and furniture.",
    features: [
      "Soft Close",
      "Full Extension",
      "High Load Capacity",
      "Silent Operation",
      "Easy Installation",
    ],
    category: "Drawer Systems",
    rating: 4.8,
    reviews: 189,
  },
  {
    id: 3,
    name: "Häfele Kitchen Basket Wire Chrome Finish",
    price: 7990,
    originalPrice: 9490,
    image:
      "https://www.hafeleindia.com/hap-live/static/WFS/Haefele-HIN-Site/-/Haefele/en_IN/pim/images/default/apic-00779367.jpg",
    shortDescription:
      "Chrome-finished wire kitchen basket for organized storage and easy access.",
    fullDescription:
      "Premium wire kitchen basket with chrome finish for maximum durability and elegance. Features smooth sliding mechanism and optimized storage design. Perfect for kitchen cabinets and pantry organization.",
    features: [
      "Chrome Finish",
      "Wire Construction",
      "Smooth Sliding",
      "Organized Storage",
      "Durable Design",
    ],
    category: "Kitchen Storage",
    rating: 4.5,
    reviews: 156,
  },
  {
    id: 4,
    name: "Häfele Hinges Concealed European Style",
    price: 1990,
    image:
      "https://www.hafele.com.de/prod-live/static/WFS/Haefele-HEX-Site/-/Haefele/en_VA/pim/images/default/ppic-00766511.jpg",
    shortDescription:
      "European-style concealed hinges with precise adjustment and smooth operation.",
    fullDescription:
      "Premium concealed hinges with European design standards. Features 3D adjustment capability, soft-close mechanism, and high durability. Suitable for all cabinet door applications.",
    features: [
      "Concealed Design",
      "3D Adjustment",
      "Soft Close",
      "European Standard",
      "High Durability",
    ],
    category: "Cabinet Hinges",
    rating: 4.6,
    reviews: 298,
  },
  {
    id: 5,
    name: "Häfele Wardrobe Organizer System Complete",
    price: 24990,
    originalPrice: 29990,
    image:
      "https://www.hafeleindia.com/hap-live/static/WFS/Haefele-HIN-Site/-/Haefele/en_IN/pim/images/huge/apic-04572532.jpg",
    shortDescription:
      "Complete wardrobe organization system with German precision and modular design.",
    fullDescription:
      "Comprehensive wardrobe organization system featuring modular components, premium materials, and German engineering. Includes hanging rods, shelves, and accessory holders for optimal space utilization.",
    features: [
      "Modular Design",
      "German Precision",
      "Complete System",
      "Space Optimization",
      "Premium Materials",
    ],
    category: "Wardrobe Systems",
    rating: 4.9,
    reviews: 87,
  },
  {
    id: 6,
    name: "Häfele LED Strip Lighting Under Cabinet",
    price: 3990,
    image:
      "https://www.hafeleindia.com/hap-live/static/WFS/Haefele-HIN-Site/-/Haefele-HIN/en_IN/opentext/assets/hde/Lighting17122022.jpg",
    shortDescription:
      "Energy-efficient LED strip lighting for under-cabinet illumination with touch control.",
    fullDescription:
      "Advanced LED strip lighting system with touch control and dimming capabilities. Energy-efficient design with long lifespan and easy installation. Perfect for kitchen and display cabinet lighting.",
    features: [
      "LED Technology",
      "Touch Control",
      "Dimmable",
      "Energy Efficient",
      "Easy Installation",
    ],
    category: "Cabinet Lighting",
    rating: 4.4,
    reviews: 167,
  },
  {
    id: 7,
    name: "Häfele Kitchen Tall Unit Mechanism",
    price: 18990,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2025/3/497486647/RO/KO/EH/5667013/download-2025-03-22t154338-900-1-500x500.png",
    shortDescription:
      "Advanced tall unit mechanism with smooth operation and maximum storage efficiency.",
    fullDescription:
      "Premium tall unit mechanism designed for maximum storage efficiency in kitchen cabinets. Features smooth operation, adjustable shelves, and German engineering for long-lasting performance.",
    features: [
      "Tall Unit Design",
      "Smooth Operation",
      "Adjustable Shelves",
      "Maximum Storage",
      "German Engineering",
    ],
    category: "Kitchen Mechanisms",
    rating: 4.5,
    reviews: 134,
  },
  {
    id: 8,
    name: "Häfele Door Lock System Digital Smart",
    price: 12990,
    originalPrice: 15490,
    image:
      "https://www.hafeleindia.com/hap-live/static/WFS/Haefele-HIN-Site/-/Haefele/en_IN/pim/images/default/ppic-04667650.jpg",
    shortDescription:
      "Smart digital door lock system with advanced security features and modern design.",
    fullDescription:
      "State-of-the-art digital door lock system with biometric and PIN access. Features anti-theft protection, emergency key override, and smartphone connectivity for modern home security.",
    features: [
      "Digital Access",
      "Biometric Scanner",
      "PIN Protection",
      "Smartphone Connect",
      "Emergency Override",
    ],
    category: "Security Systems",
    rating: 4.3,
    reviews: 145,
  },
];

export default function HafelePage() {
  const [products, setProducts] = useState(hafeleProducts);
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
    <div className="min-h-screen bg-gray-50">
      <HafeleHero />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Häfele Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our featured collection of premium Häfele hardware and
              fittings, engineered in Germany for superior quality and
              functionality
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
            {products.map((product) => (
              <HafeleProductCard
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
