"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import StyleImage1 from "../public/assets/Wardrobe/style-img-1.png";
import StyleImage2 from "../public/assets/Wardrobe/style-img-2.png";
import StyleImage3 from "../public/assets/Kitchen/style-img-3.png";
import StyleImage4 from "../public/assets/Kitchen/style-img-4.png";
import StyleImage5 from "../public/assets/Kitchen/style-img-5.png";

const StyleCarousel = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const styles = [
    {
      id: "luxe-kitchen",
      name: "Minimal Luxe Kitchen",
      description:
        "Streamlined elegance with clean lines and integrated modern appliances.",
      image: StyleImage3.src,
      features: [
        "Soft-Close Drawers",
        "Handleless Cabinets",
        "Neutral Palette",
        "marble countertop",
      ],
    },
    {
      id: "contemporary-kitchen",
      name: "Contemporary Matte Kitchen",
      description:
        "Bold colors meet matte textures in modern design perfection.",
      image: StyleImage4.src,
      features: [
        "Fingerprint-free Finish",
        "Open Shelving",
        "Smart Appliance Zones",
      ],
    },
    {
      id: "wooden-kitchen",
      name: " Classic Wooden Kitchen",
      description:
        "Warm wooden textures with vintage charm and natural finishes.",
      image: StyleImage5.src,
      features: ["Solid Wood Shutters", "Brass Handles", "Rustic Tiles"],
    },
    {
      id: "mirror-wardrobe",
      name: "Mirror Glide Wardrobe",
      description:
        "Sliding mirrored wardrobe for modern, space-enhancing storage solution.",
      image: StyleImage1.src,
      features: ["Sliding Doors", "Full-Length Mirrors", "Drawer Organizers"],
    },
    {
      id: "walk-in-closet",
      name: "Walk-in Modern Closet",
      description: "Spacious, stylish walk-in with open zones and lighting.",
      image: StyleImage2.src,
      features: ["LED Lighting", "Island Storage", "Open Hanging Racks"],
    },
  ];

  if (!mounted) return <div className="h-96 bg-gray-100" />;

  return (
    <section className="py-20 bg-neutral-600 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Design Styles
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Explore our diverse range of design styles, each carefully crafted
            to reflect different aesthetics and lifestyles.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3.5 },
            }}
            className="pb-8"
          >
            {styles.map((style) => (
              <SwiperSlide key={style.id}>
                <div className="group">
                  <Link href={'/contact'}>
                    <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={style.image}
                          alt={style.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-xl font-bold mb-1">
                            {style.name}
                          </h3>
                          <div className="flex flex-wrap gap-1">
                            {style.features.map((feature, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-white/20 backdrop-blur-sm text-xs rounded-full"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 leading-relaxed min-h-[5rem]">
                          {style.description}
                        </p>
                        <div className="mt-4 text-amber-600 font-medium group-hover:text-amber-700 transition-colors duration-300">
                          Explore Style →
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom arrows */}
          <div className="custom-swiper-button-prev absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-amber-700 transition duration-300 shadow-lg cursor-pointer">
            <span className="text-lg font-bold">&larr;</span>
          </div>
          <div className="custom-swiper-button-next absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-amber-700 transition duration-300 shadow-lg cursor-pointer">
            <span className="text-lg font-bold">&rarr;</span>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/contact">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-amber-700 transition-colors duration-300">
              Contact Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StyleCarousel;
