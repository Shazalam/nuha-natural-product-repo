import Link from 'next/link';

export default function ShippingPolicy() {
  const shippingOptions = [
    {
      name: "Standard Shipping",
      time: "3-5 business days",
      price: "$4.99",
      freeThreshold: "Free on orders over $50",
      icon: "🚛"
    },
    {
      name: "Express Shipping",
      time: "1-2 business days",
      price: "$9.99",
      freeThreshold: "Free on orders over $100",
      icon: "✈️"
    },
    {
      name: "Same Day Delivery",
      time: "Same day (order by 12 PM)",
      price: "$14.99",
      freeThreshold: "Not available for free shipping",
      icon: "🚗",
      note: "Available in select areas"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-20 lg:py-28">
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Shipping Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fast, reliable, and eco-friendly delivery to your doorstep
            </p>
          </div>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shipping Options
            </h2>
            <p className="text-xl text-gray-600">
              Choose the delivery option that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {shippingOptions.map((option, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {option.name}
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p className="font-semibold">{option.time}</p>
                  <p className="text-2xl font-bold text-green-600">{option.price}</p>
                  <p className="text-sm text-green-500">{option.freeThreshold}</p>
                  {option.note && (
                    <p className="text-sm text-yellow-600">{option.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🌱 Eco-Friendly Shipping</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Recyclable and biodegradable packaging
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Carbon-neutral shipping options
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Minimal packaging waste
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Electric vehicle delivery where available
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">📦 Order Tracking</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">📱</span>
                  Real-time tracking updates
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">✉️</span>
                  Email and SMS notifications
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">🕒</span>
                  Estimated delivery windows
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">👤</span>
                  Live customer support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Place Your Order?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience fast and eco-friendly delivery with Nuha
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300 font-semibold text-lg"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}