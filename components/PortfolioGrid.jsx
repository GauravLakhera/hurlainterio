"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Eye } from "lucide-react";
import PortfolioImage1 from "../public/assets/Kitchen/collection-img-2.jpg";
import PortfolioImage2 from "../public/assets/Wardrobe/collection-img-3.png";
import PortfolioImage3 from "../public/assets/Kitchen/Portfolio-img-3.png";
import PortfolioImage4 from "../public/assets/Wardrobe/hero-slider-2.jpg";
import PortfolioImage5 from "../public/assets/Kitchen/portfolio-img-4.jpg";
import PortfolioImage6 from "../public/assets/Wardrobe/walking-worddrobe.jpg";

const PortfolioGrid = () => {
  const projects = [
    {
      id: 1,
      title: "Modular Kitchen Masterpieces",
      category: "Kitchen",
      image: PortfolioImage1.src,
      description:
        "Smart layouts, seamless finishes, and modern innovation — our kitchens are built for style and efficiency.",
    },
    {
      id: 2,
      title: "Premium Wardrobe Solutions",
      category: "Wardrobe",
      image: PortfolioImage2.src,
      description:
        "Sleek, spacious, and personalized — our wardrobes combine elegance with everyday practicality.",
    },
    {
      id: 3,
      title: "Luxury Island Kitchens",
      category: "Kitchen",
      image: PortfolioImage3.src,
      description:
        "Create a stunning centrepiece with island kitchens that bring luxury and convenience together beautifully.",
    },
    {
      id: 4,
      title: "Sliding Wardrobe Designs",
      category: "Wardrobe",
      image: PortfolioImage4.src,
      description:
        "Smooth, space-saving, and stunning — discover sliding wardrobes crafted for urban elegance.",
    },
    {
      id: 5,
      title: "Customized Kitchen Interiors",
      category: "Kitchen",
      image: PortfolioImage5.src,
      description:
        "From minimal to majestic — every detail of your kitchen, designed exactly the way you envision it.",
    },
    {
      id: 6,
      title: "Walk-in Wardrobe Spaces",
      category: "Wardrobe",
      image: PortfolioImage6.src,
      description:
        "Step into a private sanctuary of organization and luxury with our bespoke walk-in wardrobes.",
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
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Modern kitchens. Stylish wardrobes. See how we redefine interiors
            with purpose and elegance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="portfolio-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image with Zoom + Buttons on Hover */}
              <div className="relative h-64 overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Buttons only on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-4">
                    <Link href={`/portfolio`}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/30 backdrop-blur-sm p-3 rounded-full hover:bg-white/40 transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.button>
                    </Link>
                    {/* <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/30 backdrop-blur-sm p-3 rounded-full hover:bg-white/40 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.button> */}
                  </div>
                </div>
              </div>

              {/* Title + Category + Description */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-amber-700 transition-colors duration-300"
            >
              View Full Portfolio
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
