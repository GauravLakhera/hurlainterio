"use client";

import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import SliderImageKit from "../public/assets/Kitchen/main3.jpg";
import SliderImageKit1 from "../public/assets/Kitchen/main2.jpg";
import SliderImageward from "../public/assets/Kitchen/main1.jpg";

const HeroSlider = () => {
  const [mounted, setMounted] = useState(false);

  // Refs for navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slides = [
    {
      id: 1,
      image: SliderImageKit.src,
      title: "Modern Culinary Spaces",
      subtitle: "Crafted for Style & Efficiency",
      description:
        "Experience kitchens that combine minimalism with maximum performance — perfect for everyday cooking and elegant hosting.",
    },
    {
      id: 2,
      image: SliderImageward.src,
      title: "Custom Wardrobe Solutions",
      subtitle: "Designed to Fit Your Style",
      description:
        "Maximize your space with tailor-made wardrobes that reflect your personality. Sleek designs, premium finishes, and smart organization all in one.",
    },
    {
      id: 3,
      image: SliderImageKit1.src,
      title: "Elegant Modular Kitchens",
      subtitle: "Where Design Meets Functionality",
      description:
        "Upgrade your lifestyle with our state-of-the-art modular kitchens, blending smart storage with stunning aesthetics for a seamless cooking experience.",
    },
  ];

  if (!mounted) {
    return (
      <div className="relative h-screen bg-gray-900 flex items-center justify-center ">
        <div className="text-white text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 ">
            Luxury Studio
          </h1>
          <p className="text-xl md:text-2xl">Premium Interior Design</p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="relative h-full">
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="absolute bg-black/40 h-[100%] w-[100%] top-0 left-0 z-10"></div>
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="relative z-10 h-full flex items-center justify-center pt-[100px] md:pt-50">
                <div className="text-center text-white max-w-4xl mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h1 className="text-4xl md:text-7xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h1>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <h2 className="text-2xl  mb-6 font-bold text-amber-300">
                      {slide.subtitle}
                    </h2>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <p className="text-lg  mb-8 max-w-2xl mx-auto leading-relaxed">
                      {slide.description}
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="space-x-4"
                  >
                    <Link href="/#">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-amber-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-amber-700 transition-colors duration-300 shadow-lg"
                      >
                        Talk to Us
                      </motion.button>
                    </Link>
                    <Link href="/#">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                      >
                        View Collections
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows */}
        <div className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
          <div
            ref={prevRef}
            className="bg-amber-500 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-600 transition"
          >
            <span className="text-xl font-bold">&larr;</span>
          </div>
        </div>
        <div className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
          <div
            ref={nextRef}
            className="bg-amber-500 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-600 transition"
          >
            <span className="text-xl font-bold">&rarr;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
