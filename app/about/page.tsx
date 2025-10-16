import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "👩‍💼",
      description: "Passionate about organic living with 10+ years in sustainable agriculture",
      social: ["🌱", "📘", "🐦"]
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "👨‍💼",
      description: "Supply chain expert dedicated to ethical sourcing and fair trade",
      social: ["🚚", "📊", "💼"]
    },
    {
      name: "Emma Davis",
      role: "Product Curator",
      image: "👩‍🌾",
      description: "Nutritionist and organic certification specialist",
      social: ["🍎", "📖", "✨"]
    },
    {
      name: "Alex Rodriguez",
      role: "Customer Experience",
      image: "👨‍💻",
      description: "Ensuring every customer feels valued and supported",
      social: ["💬", "⭐", "❤️"]
    }
  ];

  const values = [
    {
      icon: "🌱",
      title: "100% Organic",
      description: "Every product is certified organic and free from harmful chemicals"
    },
    {
      icon: "💚",
      title: "Sustainable Sourcing",
      description: "We partner with local farmers who practice regenerative agriculture"
    },
    {
      icon: "🚚",
      title: "Eco-Friendly Delivery",
      description: "Carbon-neutral shipping with minimal packaging waste"
    },
    {
      icon: "🤝",
      title: "Fair Trade",
      description: "Ensuring fair wages and working conditions for all our partners"
    },
    {
      icon: "🔍",
      title: "Transparency",
      description: "Complete traceability from farm to your doorstep"
    },
    {
      icon: "🌍",
      title: "Community Impact",
      description: "Supporting local communities and environmental initiatives"
    }
  ];

  const milestones = [
    { year: "2018", event: "Founded with a vision for organic living", icon: "🚀" },
    { year: "2019", event: "First 1000 happy customers", icon: "🎉" },
    { year: "2020", event: "Expanded to 50+ organic farms", icon: "🌾" },
    { year: "2021", event: "Launched carbon-neutral shipping", icon: "📦" },
    { year: "2022", event: "10,000+ products delivered", icon: "🏆" },
    { year: "2023", event: "Community outreach program launched", icon: "🤝" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-20 lg:py-28">
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Story of
              <span className="text-green-600 block">Pure Goodness</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to becoming your trusted source for organic products, 
              we're committed to bringing nature's finest to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Nuha, we believe that everyone deserves access to pure, 
                organic products that nourish both body and soul. Our mission is to 
                create a healthier world by connecting conscious consumers with 
                ethically sourced, certified organic goods.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're more than just a store—we're a movement towards sustainable 
                living, supporting local farmers, and preserving our planet for 
                future generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  Shop Our Products
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300 font-semibold text-lg text-center"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-green-100 rounded-2xl p-8 shadow-2xl">
                <div className="bg-gradient-to-br from-green-200 to-emerald-300 rounded-xl h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌿</div>
                    <p className="text-green-800 font-semibold text-lg">
                      Pure Nature, Pure Goodness
                    </p>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-green-200">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl text-green-600">✅</span>
                  <div>
                    <div className="font-bold text-gray-900">100% Organic</div>
                    <div className="text-sm text-gray-600">Certified</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-600 text-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <div className="font-bold">Eco-Friendly</div>
                    <div className="text-sm opacity-90">Since 2018</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones in our commitment to organic excellence
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-200 h-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-2xl">{milestone.icon}</span>
                        <h3 className="text-xl font-bold text-green-600">
                          {milestone.year}
                        </h3>
                      </div>
                      <p className="text-gray-700 font-medium">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Spacer for the other side */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Nuha
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-200 to-green-400 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>
                <div className="flex justify-center space-x-3">
                  {member.social.map((social, socialIndex) => (
                    <span
                      key={socialIndex}
                      className="text-gray-400 hover:text-green-600 transition-colors cursor-pointer"
                    >
                      {social}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Happy Customers", icon: "😊" },
              { number: "500+", label: "Organic Products", icon: "🌿" },
              { number: "50+", label: "Local Farms", icon: "🚜" },
              { number: "99%", label: "Satisfaction Rate", icon: "⭐" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-green-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Our Organic Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the difference that pure, organic products can make in your life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Shopping
            </Link>
            <Link
              href="/contact"
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300 font-semibold text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}