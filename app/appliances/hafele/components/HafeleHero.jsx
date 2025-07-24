export default function HafeleHero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                German Engineering Excellence
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                <span className="text-green-400">HÄFELE</span>
                <br />
                <span className="text-3xl lg:text-4xl font-light">
                  Hardware
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-6">
                Premium Furniture Hardware & Fittings – Available Now
              </p>
              <p className="text-lg text-gray-400 max-w-xl">
                Experience German precision with our comprehensive range of
                cabinet hardware, furniture fittings, and architectural
                solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Explore Collection
              </button>
              <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-gray-900">
                Contact Us
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://5.imimg.com/data5/FN/CA/XZ/ANDROID-36785626/b22f718d19dbd1289730931aa9ddd29d-jpg.jpg"
                alt="Häfele Hardware & Fittings"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />

              {/* Floating Stats */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl">
                <div className="text-2xl font-bold text-gray-900">95+</div>
                <div className="text-sm text-gray-600">Years Heritage</div>
              </div>

              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl">
                <div className="text-2xl font-bold text-gray-900">15000+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-3xl blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
