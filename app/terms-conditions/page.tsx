import Link from 'next/link';

export default function TermsConditions() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using Nuha's website and services, you accept and agree to be bound by these Terms and Conditions.",
      icon: "✅"
    },
    {
      title: "Account Registration",
      content: "You must be at least 18 years old to create an account. You are responsible for maintaining the confidentiality of your account credentials.",
      icon: "👤"
    },
    {
      title: "Product Information",
      content: "We strive to provide accurate product descriptions and images. However, actual colors and appearance may vary slightly.",
      icon: "📦"
    },
    {
      title: "Pricing and Payments",
      content: "All prices are in USD. We reserve the right to change prices and correct pricing errors. Payment must be completed before order processing.",
      icon: "💰"
    },
    {
      title: "Shipping and Delivery",
      content: "Delivery times are estimates and not guaranteed. Risk of loss passes to you upon delivery. Some areas may have shipping restrictions.",
      icon: "🚚"
    },
    {
      title: "Returns and Refunds",
      content: "We accept returns within 30 days of delivery for most items. Products must be unopened and in original condition. See our Return Policy for details.",
      icon: "🔄"
    },
    {
      title: "Intellectual Property",
      content: "All content on our website, including text, images, and logos, is our property and protected by copyright laws.",
      icon: "©️"
    },
    {
      title: "User Conduct",
      content: "You agree not to use our services for any unlawful purpose or to submit false information. We may suspend accounts for violations.",
      icon: "⚖️"
    },
    {
      title: "Limitation of Liability",
      content: "We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.",
      icon: "🛡️"
    },
    {
      title: "Governing Law",
      content: "These terms are governed by the laws of the State of California. Any disputes shall be resolved in the courts of San Francisco County.",
      icon: "🌍"
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
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services.
            </p>
            <div className="mt-8 text-sm text-gray-500">
              Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Important Notice */}
          <div className="bg-blue-50 rounded-2xl p-8 mb-12 border border-blue-200">
            <div className="flex items-start space-x-4">
              <div className="text-2xl text-blue-600">📝</div>
              <div>
                <h2 className="text-xl font-bold text-blue-900 mb-2">
                  Important Legal Notice
                </h2>
                <p className="text-blue-800">
                  These Terms and Conditions constitute a legal agreement between you and Nuha. 
                  By using our website and services, you agree to be bound by these terms.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="grid gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                      {section.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                      {section.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Policies */}
          <div className="mt-16 bg-green-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Additional Policies
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/privacy"
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-2xl text-green-600 group-hover:scale-110 transition-transform duration-300">
                    🔒
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      Privacy Policy
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      How we protect and use your data
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="/shipping"
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-2xl text-green-600 group-hover:scale-110 transition-transform duration-300">
                    📦
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      Shipping Policy
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Delivery times and shipping information
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Updates Section */}
          <div className="mt-12 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
            <div className="flex items-start space-x-4">
              <div className="text-2xl text-yellow-600">⚠️</div>
              <div>
                <h3 className="font-bold text-yellow-800 mb-2">Changes to Terms</h3>
                <p className="text-yellow-700 text-sm">
                  We may update these Terms & Conditions from time to time. Continued use of our 
                  services after changes constitutes acceptance of the new terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need Help Understanding Our Terms?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our customer service team is here to answer any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Support
            </Link>
            <Link
              href="/products"
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300 font-semibold text-lg"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}