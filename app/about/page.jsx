'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

// export const metadata = {
//   title: 'About Us - Hurla Interior | Premium Interior Design & Furniture',
//   description: 'Learn about our journey, craftsmanship philosophy, and commitment to creating exceptional luxury furniture and interior design solutions.',
// };

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
            alt="Luxury Interior Design"
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
              Since 2008 • Premium Interior Design
            </span>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block">Crafting</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Transforming spaces into extraordinary experiences through exceptional design, 
              premium craftsmanship, and unwavering attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-xl"
              >
                Our Story
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/40 hover:border-white text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Portfolio
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

      {/* Company Stats */}
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
              { number: '15+', label: 'Years Experience' },
              { number: '500+', label: 'Projects Completed' },
              { number: '50+', label: 'Premium Brands' },
              { number: '1000+', label: 'Happy Clients' }
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

      {/* Story Section - Enhanced */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to becoming India's premier interior design studio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Our Beginning
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Craftsmanship Excellence
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2008 by visionary designer Rajesh Hurla, Hurla Interior began as a 
                passionate endeavor to bring world-class interior design to Indian homes. What 
                started as a small studio has grown into a premier design house.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey started with a simple belief: every space has the potential to be 
                extraordinary. We've built our reputation on transforming ordinary rooms into 
                stunning environments that reflect our clients' personalities and lifestyles.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-600 font-bold">2008</span>
                </div>
                <div className="text-gray-600">
                  <div className="font-semibold">Founded</div>
                  <div className="text-sm">The beginning of excellence</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Master craftsman at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold text-amber-600">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative lg:order-1"
            >
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Luxury interior design showroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-sm opacity-90">Award Winning</div>
                <div className="text-xl font-bold">Design Studio</div>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:order-2"
            >
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Our Philosophy
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Design Philosophy
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that great design is more than aesthetics—it's about creating 
                spaces that enhance your daily life, inspire creativity, and provide comfort 
                for years to come.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our approach combines global design trends with local craftsmanship, using 
                premium materials and innovative techniques to create timeless interiors 
                that stand the test of time.
              </p>
              
              <div className="space-y-4">
                {[
                  'Sustainable & Eco-friendly Materials',
                  'Innovative Design Solutions',
                  'Premium Quality Craftsmanship'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Enhanced */}
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
              Our Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do and every space we create.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Quality',
                description: 'We never compromise on quality, using only premium materials and proven techniques.',
                icon: '🏆'
              },
              {
                title: 'Innovation',
                description: 'We blend traditional methods with modern technology to create timeless designs.',
                icon: '💡'
              },
              {
                title: 'Sustainability',
                description: 'We are committed to eco-friendly practices and responsible sourcing.',
                icon: '🌱'
              },
              {
                title: 'Craftsmanship',
                description: 'Every project is executed by skilled artisans who take pride in their work.',
                icon: '🎨'
              },
              {
                title: 'Service',
                description: 'Our dedicated team provides exceptional service from concept to completion.',
                icon: '🤝'
              },
              {
                title: 'Heritage',
                description: 'We honor traditional craftsmanship while embracing contemporary design.',
                icon: '🏛️'
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section - Enhanced */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The talented individuals who bring your dream spaces to life.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {[
              {
                name: 'Rajesh Hurla',
                role: 'Founder & Principal Designer',
                image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300',
                description: '15+ years of creating exceptional interiors'
              },
              {
                name: 'Priya Sharma',
                role: 'Head of Design',
                image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300',
                description: 'Expert in luxury residential design'
              },
              {
                name: 'Amit Kumar',
                role: 'Project Manager',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300',
                description: 'Ensuring flawless project execution'
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group text-center"
              >
                <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-lg text-amber-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
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
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Let's discuss your vision and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-amber-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
