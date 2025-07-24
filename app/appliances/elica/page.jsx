"use client";
import { useState } from "react";
import ElicaHero from "./components/ElicaHero";
import ElicaProductCard from "./components/ElicaProductCard";
import ProductModal from "./components/ProductModal";
import FilterSort from "./components/FilterSort";

const elicaProducts = [
  {
    id: 1,
    name: "Elica Kitchen Hood FILTERLESS 60 BF LTW",
    price: 28990,
    originalPrice: 34990,
    image:
      "https://m.media-amazon.com/images/I/516q1b6KMLL._UF1000,1000_QL80_.jpg",
    shortDescription:
      "Advanced filterless technology with powerful suction and LED lighting. Perfect for modern Indian kitchens.",
    fullDescription:
      "The Elica FILTERLESS 60 BF LTW features revolutionary filterless technology that eliminates the need for traditional mesh filters. With a powerful motor delivering excellent suction capacity, it efficiently removes smoke, grease, and odors. The sleek design includes touch controls, LED lighting, and auto-clean function.",
    features: [
      "Filterless Technology",
      "Touch Control",
      "LED Lighting",
      "Auto Clean",
      "1200 m³/hr Suction",
    ],
    category: "Kitchen Hood",
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    name: "Elica Induction Hob EIS 623 CT",
    price: 45990,
    image:
      "https://www.elica.com/storage/thumbs/ProductFamily/352_352_resize__58c00861344e9dd53a1cf44ba459476d.webp",
    shortDescription:
      "3-burner induction hob with crystal glass top and touch controls for precise cooking.",
    fullDescription:
      "Premium 3-burner induction cooktop featuring crystal glass surface with touch controls. Each burner offers 9 power levels with timer function and child safety lock. Energy efficient with rapid heating technology.",
    features: [
      "Crystal Glass Top",
      "Touch Control",
      "9 Power Levels",
      "Timer Function",
      "Child Lock",
    ],
    category: "Induction Hob",
    rating: 4.7,
    reviews: 89,
  },
  {
    id: 3,
    name: "Elica Kitchen Hood SPOT PLUS LTW 60",
    price: 18990,
    originalPrice: 22990,
    image:
      "https://m.media-amazon.com/images/I/51Nrg5foN-L._UF1000,1000_QL80_.jpg",
    shortDescription:
      "Stylish pyramid design chimney with powerful motor and attractive LED lighting.",
    fullDescription:
      "Classic pyramid design kitchen chimney with efficient baffle filters and powerful motor. Features push button controls, bright LED lamps, and comes with warranty coverage across India.",
    features: [
      "Pyramid Design",
      "Baffle Filter",
      "LED Lighting",
      "Push Button Control",
      "900 m³/hr Suction",
    ],
    category: "Kitchen Hood",
    rating: 4.3,
    reviews: 203,
  },
  {
    id: 4,
    name: "Elica Built-in Oven EPBI 860 VETRO",
    price: 67990,
    image:
      "https://www.elicaindia.com/img/UploadedImages/Built-In%20Appliances/Built-In%20Combo%20Oven/Built%20In%20Combo%20Oven/50%20Ltrs/EPBI%20COMBO%20OVEN%2050L/EPBI%20COMBO%20OVEN%2050%20L.png",
    shortDescription:
      "Multi-function built-in oven with convection technology and elegant glass finish.",
    fullDescription:
      "Sophisticated built-in oven with multiple cooking functions including convection, grill, and baking modes. Features digital display, timer controls, and safety glass door with cool-touch technology.",
    features: [
      "Multi-function",
      "Convection Technology",
      "Digital Display",
      "Safety Glass Door",
      "60L Capacity",
    ],
    category: "Built-in Oven",
    rating: 4.6,
    reviews: 45,
  },
  {
    id: 5,
    name: "Elica Kitchen Hood SLIM PLUS LTW 90",
    price: 22990,
    image:
      "https://www.elicaindia.com/img/UploadedImages/Kitchen%20Chimneys/Chimneys/Ismart/Baffle%20Filter/ISMART%20SPOT%20H6%20BF%20ISLAND%20LTW%2090%20NERO/ISMART%20SPOT%20H6%20BF%20ISLAND%2090%20LTW%20NERO.jpg",
    shortDescription:
      "Ultra-slim design chimney ideal for contemporary kitchen aesthetics.",
    fullDescription:
      "Modern slim profile kitchen chimney designed for contemporary kitchens. Features efficient baffle filters, touch controls, and bright LED lighting. Available in premium finishes.",
    features: [
      "Slim Design",
      "Touch Control",
      "Baffle Filter",
      "LED Lighting",
      "1000 m³/hr Suction",
    ],
    category: "Kitchen Hood",
    rating: 4.4,
    reviews: 156,
  },
  {
    id: 6,
    name: "Elica Dishwasher WQP12-7635V",
    price: 89990,
    image:
      "https://assets.nikshanonline.com/wp-content/uploads/2023/12/Elica-Built-In-Dishwasher-WQP-12-7713M-Without-Door-with-14-Place-Settings-1.png",
    shortDescription:
      "Premium 12 place setting dishwasher with multiple wash programs and energy efficiency.",
    fullDescription:
      "High-capacity dishwasher with 12 place setting capacity. Features multiple wash programs, energy-efficient operation, and stainless steel interior. Includes cutlery basket and adjustable racks.",
    features: [
      "12 Place Setting",
      "Multiple Programs",
      "Energy Efficient",
      "Stainless Steel Interior",
      "Adjustable Racks",
    ],
    category: "Dishwasher",
    rating: 4.5,
    reviews: 67,
  },
  {
    id: 7,
    name: "Elica Hob Top EGT 274 DX",
    price: 15990,
    image: "https://m.media-amazon.com/images/I/61-3mYKybXL.jpg",
    shortDescription:
      "2-burner gas hob top with premium finish and efficient flame distribution.",
    fullDescription:
      "Compact 2-burner gas hob top perfect for small kitchens. Features brass burners with excellent flame distribution, spill-proof design, and premium glass top finish.",
    features: [
      "2 Burner Gas",
      "Brass Burners",
      "Glass Top",
      "Spill Proof",
      "Auto Ignition",
    ],
    category: "Hob Top",
    rating: 4.2,
    reviews: 92,
  },
  {
    id: 8,
    name: "Elica Microwave EPMO 20 L",
    price: 12990,
    originalPrice: 15990,
    image:
      "https://m.media-amazon.com/images/I/31nYBOZ-LCL._UF1000,1000_QL80_.jpg",
    shortDescription:
      "20L solo microwave with multiple power levels and preset cooking modes.",
    fullDescription:
      "Compact 20-liter solo microwave oven with digital controls and multiple power levels. Features preset cooking modes, defrost function, and child safety lock for family use.",
    features: [
      "20L Capacity",
      "Digital Controls",
      "Multiple Power Levels",
      "Preset Modes",
      "Child Lock",
    ],
    category: "Microwave",
    rating: 4.1,
    reviews: 134,
  },
];

export default function ElicaPage() {
  const [products, setProducts] = useState(elicaProducts);
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
      <ElicaHero />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Elica Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our featured collection of premium Elica appliances,
              designed to transform your kitchen experience
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
              <ElicaProductCard
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
