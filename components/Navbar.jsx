"use client";
import logo from "../public/images/logo.png";
import { useState, useEffect } from "react";
import Popup from "./Popup";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  Home,
  Palette,
  Briefcase,
  User,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fixed Products array with proper navigation links
  const Products = [
    {
      name: "Appliances",
      href: "/appliances", // Fixed: Added proper appliances route
      children: [
        { name: "Elica", href: "/appliances/elica" },
        { name: "Hindware", href: "/appliances/hindware" },
        { name: "Hafele", href: "/appliances/hafele" },
      ],
    },
    {
      name: "Wood Floor",
      href: "/wood-floor", // Fixed: Added proper wood-floor route
      children: [
        { name: "Green Laminate", href: "/wood-floor/green-laminate" }, // Fixed: Added proper route
        { name: "Laminam", href: "/wood-floor/laminam" }, // Fixed: Corrected spelling and added proper route
      ],
    },
    {
      name: "Decor",
      href: "/decor", // Fixed: Added proper decor route
      children: [], // You can add children later if needed
    },
  ];

  // Fixed navItems array with proper navigation links
  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    {
      name: "Products",
      href: "/products", // Fixed: Added proper products route (or remove href if only dropdown)
      icon: Palette,
      dropdown: Products,
    },
    { name: "Portfolio", href: "/portfolio", icon: Briefcase }, // Fixed: Changed from "/" to "/portfolio"
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  const toggleMobileDropdown = (itemName) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const toggleMobileSubDropdown = (parentName, itemName) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [`${parentName}-${itemName}`]: !prev[`${parentName}-${itemName}`],
    }));
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white backdrop-blur-md shadow-lg"
            : "bg-white/20 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-white"
              >
                <img
                  className=" w-[15rem] h-[10rem] object-cover"
                  src="/images/logo.png"
                  alt="logo"
                />
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setActiveSubDropdown(null);
                  }}
                >
                  {/* Fixed: Made the main nav item clickable when it has a dropdown */}
                  {item.dropdown ? (
                    <div
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer ${
                        isScrolled
                          ? "text-black hover:text-amber-600"
                          : "text-white hover:text-amber-300"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isScrolled
                          ? "text-black hover:text-amber-600"
                          : "text-white hover:text-amber-300"
                      }`}
                    >
                      <span>{item.name}</span>
                    </Link>
                  )}

                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
                      {item.dropdown.map((product) => (
                        <div
                          key={product.name}
                          className="relative"
                          onMouseEnter={() =>
                            setActiveSubDropdown(product.name)
                          }
                          onMouseLeave={() => setActiveSubDropdown(null)}
                        >
                          <Link
                            href={product.href}
                            className="flex justify-between items-center px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
                          >
                            {product.name}
                            {product.children.length > 0 && (
                              <ChevronDown className="w-4 h-4 ml-2" />
                            )}
                          </Link>

                          {product.children.length > 0 &&
                            activeSubDropdown === product.name && (
                              <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-md border border-gray-200 z-30">
                                {product.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden md:block">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-600 text-white px-6 py-2 rounded-md font-medium hover:bg-amber-700 transition-colors duration-200"
                >
                  Talk to Us
                </motion.button>
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-white"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#18191b] shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium ${
                          isScrolled ? "text-white" : "text-white"
                        }`}
                      >
                        <div className="flex items-center">
                          <item.icon className="w-5 h-5 mr-2" />
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            mobileDropdowns[item.name]
                              ? "transform rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                      {mobileDropdowns[item.name] && (
                        <div className="pl-6 space-y-1">
                          {item.dropdown.map((product) => (
                            <div key={product.name} className="relative">
                              {product.children.length > 0 ? (
                                <>
                                  <button
                                    onClick={() =>
                                      toggleMobileSubDropdown(
                                        item.name,
                                        product.name
                                      )
                                    }
                                    className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-amber-400"
                                  >
                                    <span>{product.name}</span>
                                    <ChevronDown
                                      className={`w-5 h-5 transition-transform ${
                                        mobileDropdowns[
                                          `${item.name}-${product.name}`
                                        ]
                                          ? "transform rotate-180"
                                          : ""
                                      }`}
                                    />
                                  </button>
                                  {mobileDropdowns[
                                    `${item.name}-${product.name}`
                                  ] && (
                                    <div className="pl-4 space-y-1">
                                      {product.children.map((child) => (
                                        <Link
                                          key={child.name}
                                          href={child.href}
                                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-amber-400"
                                          onClick={() =>
                                            setIsMobileMenuOpen(false)
                                          }
                                        >
                                          {child.name}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </>
                              ) : (
                                <Link
                                  href={product.href}
                                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-amber-400"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {product.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                        isScrolled ? "text-white" : "text-white"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="w-5 h-5 mr-2" />
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-amber-600 text-white px-6 py-2 rounded-md font-medium hover:bg-amber-700 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Talk to Us
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
