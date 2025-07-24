import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Premium Collections - Luxury Studio | Handcrafted Furniture',
  description: 'Explore our exclusive furniture collections featuring Diamante, Rubino, Smeraldo, and Topazio lines. Each collection showcases unique craftsmanship and luxury design.',
};

export default function Collections() {
  const collections = [
    {
      id: 'diamante',
      name: 'Diamante Collection',
      description: 'Luxurious furniture pieces that sparkle with sophistication and timeless elegance. Each piece is meticulously crafted with premium materials and attention to detail.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      features: ['Premium Materials', 'Handcrafted Details', 'Custom Finishes', 'Crystal Accents'],
      price: 'From $5,000',
    },
    {
      id: 'rubino',
      name: 'Rubino Collection',
      description: 'Rich, warm tones and opulent designs that create spaces of unparalleled luxury. Features deep mahogany woods and luxurious upholstery.',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      features: ['Rich Textures', 'Bold Designs', 'Statement Pieces', 'Mahogany Wood'],
      price: 'From $7,500',
    },
    {
      id: 'smeraldo',
      name: 'Smeraldo Collection',
      description: 'Fresh, contemporary designs with natural elements and sustainable materials. Perfect for modern living spaces that value environmental consciousness.',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      features: ['Eco-Friendly', 'Modern Aesthetics', 'Natural Elements', 'Sustainable Wood'],
      price: 'From $4,500',
    },
    {
      id: 'topazio',
      name: 'Topazio Collection',
      description: 'Golden accents and refined details for the most discerning taste. Luxury furniture that makes a statement in any sophisticated interior.',
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      features: ['Gold Accents', 'Refined Details', 'Exclusive Designs', 'Precious Metals'],
      price: 'From $8,500',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Premium Collections
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated collections, each designed to bring luxury 
              and sophistication to your living spaces with unmatched craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {collections.map((collection, index) => (
              <div
                key={collection.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {collection.price}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                    {collection.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {collection.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {collection.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link href={`/collections/${collection.id}`}>
                    <button className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">
                      <span>Explore Collection</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Our design consultants are here to help you find the perfect collection 
            for your space and lifestyle.
          </p>
          <Link href="/contact">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-amber-700 transition-colors duration-300">
              Schedule Consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}