"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    quicklinks: [
       { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "Portfolio", href: "/portfolio" },
      
    ],
    services: [
      { name: "Modular Kitchen Design", href: "/#" },
      { name: "Luxury Wardrobe Solutions", href: "/#" },
      { name: "Sliding & Walk-in Wardrobes", href: "/#" },
      { name: "Island Kitchens", href: "/#" },
    ],

    legal: [
      { name: "Privacy Policy", href: "/#" },
      { name: "Terms of Service", href: "/#" },
      { name: "Warrenty", href: "/#" },
      { name: "Refund Policy", href: "/#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#181818] text-white">
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-4 right-4 bg-amber-600 p-2 rounded-full z-[10000] hover:bg-amber-600 transition-colors duration-200"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center mb-6">
              <div className="text-2xl font-bold inline-block transition-transform duration-300 hover:scale-110 cursor-pointer">
                <span className="text-amber-400">HURLA</span> INTERIO
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Luxury kitchen & wardrobe design creating customized, elegant
              interiors with craftsmanship and care.
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quicklinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <h1 className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    {link.name}
                  </h1>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span className="text-gray-300">
                188, Dharampur Chowk, Old Nehru Colony, Dharampur, Dehradun -
                248001
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span className="text-gray-300">info@hurlainterio.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t bg-[#000] border-gray-200 mt-0 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center">
          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex space-x-6 mb-4 md:mb-0"
          >
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </Link>
            ))}
          </motion.div>

          {/* Copyright Text */}
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} HURLA INTERIO. All rights reserved.
            Crafted with excellence.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
