"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import PortfolioImage1 from "../../public/assets/Kitchen/collection-img-2.jpg";
import PortfolioImage2 from "../../public/assets/Wardrobe/collection-img-3.png";
import PortfolioImage3 from "../../public/assets/Kitchen/Portfolio-img-3.png";
import PortfolioImage4 from "../../public/assets/Wardrobe/hero-slider-2.jpg";
import PortfolioImage5 from "../../public/assets/Kitchen/portfolio-img-4.jpg";
import PortfolioImage6 from "../../public/assets/Wardrobe/walking-worddrobe.jpg";

// export const metadata = {
//   title: 'Portfolio - Hurla Interior | Premium Interior Design Projects',
//   description: 'Explore our stunning portfolio of luxury kitchens, wardrobes, and interior design projects. See how we transform spaces into extraordinary experiences.',
// };

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Modular Kitchen Masterpieces",
      category: "Kitchen",
      image: PortfolioImage1.src,
      description:
        "Smart layouts, seamless finishes, and modern innovation — our kitchens are built for style and efficiency.",
      fullDescription:
        "This contemporary modular kitchen showcases our expertise in creating functional yet beautiful spaces. Featuring premium materials, smart storage solutions, and cutting-edge appliances, this project represents the perfect marriage of form and function.",
      features: [
        "Premium Materials",
        "Smart Storage",
        "Modern Appliances",
        "Custom Design",
      ],
      location: "Mumbai, Maharashtra",
      year: "2024",
      area: "200 sq ft",
    },
    {
      id: 2,
      title: "Premium Wardrobe Solutions",
      category: "Wardrobe",
      image: PortfolioImage2.src,
      description:
        "Sleek, spacious, and personalized — our wardrobes combine elegance with everyday practicality.",
      fullDescription:
        "A sophisticated wardrobe design that maximizes storage while maintaining aesthetic appeal. This project features custom compartments, premium finishes, and intelligent lighting solutions.",
      features: [
        "Custom Compartments",
        "Premium Finishes",
        "LED Lighting",
        "Space Optimization",
      ],
      location: "Delhi, NCR",
      year: "2024",
      area: "150 sq ft",
    },
    {
      id: 3,
      title: "Luxury Island Kitchens",
      category: "Kitchen",
      image: PortfolioImage3.src,
      description:
        "Create a stunning centrepiece with island kitchens that bring luxury and convenience together beautifully.",
      fullDescription:
        "An expansive luxury kitchen featuring a central island that serves as both workspace and entertainment hub. This design showcases premium materials and sophisticated styling.",
      features: [
        "Central Island",
        "Premium Countertops",
        "Luxury Appliances",
        "Entertainment Hub",
      ],
      location: "Bangalore, Karnataka",
      year: "2023",
      area: "350 sq ft",
    },
    {
      id: 4,
      title: "Sliding Wardrobe Designs",
      category: "Wardrobe",
      image: PortfolioImage4.src,
      description:
        "Smooth, space-saving, and stunning — discover sliding wardrobes crafted for urban elegance.",
      fullDescription:
        "Modern sliding wardrobe solutions designed for contemporary urban living. Features smooth-operating mechanisms and elegant finishes that complement modern interiors.",
      features: [
        "Sliding Mechanism",
        "Space Saving",
        "Modern Design",
        "Urban Elegance",
      ],
      location: "Pune, Maharashtra",
      year: "2023",
      area: "120 sq ft",
    },
    {
      id: 5,
      title: "Customized Kitchen Interiors",
      category: "Kitchen",
      image: PortfolioImage5.src,
      description:
        "From minimal to majestic — every detail of your kitchen, designed exactly the way you envision it.",
      fullDescription:
        "A fully customized kitchen interior that reflects the client's personal style and cooking habits. Every element is carefully selected and positioned for optimal functionality.",
      features: [
        "Fully Customized",
        "Personal Style",
        "Optimal Functionality",
        "Bespoke Elements",
      ],
      location: "Chennai, Tamil Nadu",
      year: "2024",
      area: "180 sq ft",
    },
    {
      id: 6,
      title: "Walk-in Wardrobe Spaces",
      category: "Wardrobe",
      image: PortfolioImage6.src,
      description:
        "Step into a private sanctuary of organization and luxury with our bespoke walk-in wardrobes.",
      fullDescription:
        "An opulent walk-in wardrobe that transforms the dressing experience into a luxury ritual. Features custom organization systems and ambient lighting.",
      features: [
        "Walk-in Design",
        "Custom Organization",
        "Luxury Experience",
        "Ambient Lighting",
      ],
      location: "Gurgaon, Haryana",
      year: "2023",
      area: "250 sq ft",
    },
  ];

  const categories = ["All", "Kitchen", "Wardrobe"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
            alt="Portfolio Hero"
            fill
            className="object-cover"
            priority
          />
          {/* Multiple overlay gradients for depth */}
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
              500+ Projects Completed • Award Winning Designs
            </span>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block">Our</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Discover our stunning collection of luxury kitchens, elegant
              wardrobes, and complete interior transformations that define
              sophisticated living.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-xl"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/40 hover:border-white text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Start Your Project
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
            <span className="text-sm mb-2 opacity-80">Scroll to explore</span>
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

      {/* Portfolio Stats */}
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
              { number: "500+", label: "Projects Completed" },
              { number: "1000+", label: "Happy Clients" },
              { number: "25+", label: "Design Awards" },
              { number: "15+", label: "Years Experience" },
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

      {/* Portfolio Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each project tells a unique story of transformation, showcasing
              our commitment to excellence and attention to detail.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex justify-center mb-16"
          >
            <div className="flex flex-wrap justify-center gap-4 bg-gray-100 p-2 rounded-2xl">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-amber-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-amber-600 hover:bg-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  {/* Full Background Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90"></div>

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="bg-amber-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {/* Accent Line */}
                      <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mb-4"></div>

                      <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-white/90 mb-4 leading-relaxed text-sm">
                        {project.description}
                      </p>

                      {/* View Details Button */}
                      <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2">
                        <span>View Details</span>
                        <svg
                          className="w-4 h-4"
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
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From concept to completion, we follow a proven process to ensure
              exceptional results for every project.
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
                step: "01",
                title: "Consultation",
                description:
                  "Understanding your vision, requirements, and lifestyle needs.",
                icon: "💭",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Creating detailed designs and 3D visualizations for your approval.",
                icon: "🎨",
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "Bringing your design to life with precision and quality craftsmanship.",
                icon: "🔨",
              },
              {
                step: "04",
                title: "Handover",
                description:
                  "Final touches and project handover with ongoing support.",
                icon: "🎉",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{process.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
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
              Ready to Start Your Dream Project?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Let's bring your vision to life with our award-winning design
              expertise and premium craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-amber-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl"
              >
                Get Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300"
              >
                View All Projects
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
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
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="absolute bottom-6 left-6">
                <span className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {selectedProject.fullDescription}
              </p>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="text-2xl font-bold text-amber-600 mb-1">
                    {selectedProject.area}
                  </div>
                  <div className="text-gray-600 text-sm">Total Area</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="text-2xl font-bold text-amber-600 mb-1">
                    {selectedProject.year}
                  </div>
                  <div className="text-gray-600 text-sm">Completed</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="text-lg font-bold text-amber-600 mb-1">
                    {selectedProject.location}
                  </div>
                  <div className="text-gray-600 text-sm">Location</div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-xl font-semibold transition-colors duration-300">
                  Start Similar Project
                </button>
                <button className="flex-1 border-2 border-gray-300 hover:border-amber-600 text-gray-700 hover:text-amber-600 py-3 px-6 rounded-xl font-semibold transition-colors duration-300">
                  Get Quote
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
