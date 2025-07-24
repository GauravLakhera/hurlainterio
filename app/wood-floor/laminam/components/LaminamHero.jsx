'use client';
import { motion } from 'framer-motion';

export default function LaminamHero() {
  return (
    <section className="relative bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800 text-white py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 "></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <div className="mb-8">
              <span className="inline-block bg-amber-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
                Made in Italy Excellence
              </span>
              <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-none">
                <span className="text-amber-400 block">LAMINAM</span>
                <span className="text-4xl lg:text-5xl font-light block mt-2">Ceramic Slabs</span>
              </h1>
              <p className="text-2xl lg:text-3xl text-stone-300 mb-8 leading-relaxed">
                Ultra-Thin • Large Format • Italian Innovation
              </p>
              <p className="text-lg text-stone-400 max-w-xl leading-relaxed">
                Revolutionary ceramic surfaces that redefine architectural possibilities. 
                From 3mm ultra-thin to large format slabs, discover the future of surface design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl"
              >
                Explore Collections
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/40 hover:border-white text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-stone-900 transition-all duration-300"
              >
                Technical Specs
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            {/* Main Product Image */}
            <div className="relative z-10">
              <img 
                src="https://spiekomania.pl/wp-content/uploads/2024/12/Pietra-di-Savoia-Antracite2.jpg"
                alt="Laminam Ceramic Slabs"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Floating Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-xs"
              >
                <div className="text-2xl font-bold text-stone-900 mb-1">3mm</div>
                <div className="text-stone-600 text-sm">Ultra-thin thickness</div>
                <div className="text-stone-600 text-sm">Maximum strength</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-xs"
              >
                <div className="text-2xl font-bold text-stone-900 mb-1">1620×3240</div>
                <div className="text-stone-600 text-sm">Large format size</div>
                <div className="text-stone-600 text-sm">Seamless surfaces</div>
              </motion.div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -inset-8 bg-gradient-to-r from-amber-600/20 to-stone-600/20 rounded-[3rem] blur-3xl"></div>
            <div className="absolute top-1/2 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-stone-500/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="text-xs uppercase tracking-wider mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border border-white/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/40 rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
