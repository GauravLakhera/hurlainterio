"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import Image from "next/image";

// Partner logos
import PartnerLogo1 from "../public/assets/Partnerslogo/logo1.png";
import PartnerLogo2 from "../public/assets/Partnerslogo/logo2.png";
import PartnerLogo3 from "../public/assets/Partnerslogo/logo3.jpeg";
import PartnerLogo4 from "../public/assets/Partnerslogo/logo4.jpeg";
import PartnerLogo5 from "../public/assets/Partnerslogo/logo5.jpeg";
import PartnerLogo6 from "../public/assets/Partnerslogo/logo6.png";

const partners = [
  { id: 1, image: PartnerLogo1 },
  { id: 2, image: PartnerLogo2 },
  { id: 3, image: PartnerLogo3 },
  { id: 4, image: PartnerLogo4 },
  { id: 5, image: PartnerLogo5 },
  { id: 6, image: PartnerLogo6 },
];

const OurPartner = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Our Partners
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Trusted by industry leaders and design innovators to deliver quality
          interior solutions.
        </motion.p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="mx-auto rounded-full transition-transform mt-3 mb-3 duration-300 hover:scale-110 hover:shadow-md hover:shadow-amber-300 w-24 h-24">
                <div className="relative w-full h-full rounded-full border-4 border-amber-400 overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={`Partner ${partner.id}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurPartner;
