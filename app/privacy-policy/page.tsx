import Link from 'next/link';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information that you provide directly to us, including name, email address, shipping address, and payment information when you make a purchase.",
      subsections: [
        "Personal information provided during account creation",
        "Order details and purchase history",
        "Communication records with our support team"
      ]
    },
    {
      title: "How We Use Your Information",
      content: "Your information helps us provide, maintain, and improve our services, process transactions, and communicate with you about products and promotions.",
      subsections: [
        "Process and fulfill your orders",
        "Send order confirmations and updates",
        "Provide customer support",
        "Send marketing communications (with your consent)",
        "Improve our products and services"
      ]
    },
    {
      title: "Information Sharing",
      content: "We do not sell your personal information. We may share information with trusted third parties only as necessary to provide our services.",
      subsections: [
        "Shipping carriers for delivery",
        "Payment processors for transaction handling",
        "Service providers who assist our operations",
        "When required by law or to protect our rights"
      ]
    },
    {
      title: "Data Security",
      content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or destruction.",
      subsections: [
        "SSL encryption for data transmission",
        "Secure payment processing",
        "Regular security assessments",
        "Limited employee access to personal data"
      ]
    },
    {
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal information. You can also opt-out of marketing communications at any time.",
      subsections: [
        "Access and download your data",
        "Correct inaccurate information",
        "Request deletion of your account",
        "Opt-out of marketing emails"
      ]
    },
    {
      title: "Cookies & Tracking",
      content: "We use cookies and similar technologies to enhance your shopping experience, analyze site traffic, and personalize content.",
      subsections: [
        "Essential cookies for site functionality",
        "Analytics cookies to improve our services",
        "Marketing cookies for personalized ads",
        "You can control cookies through browser settings"
      ]
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we protect and handle your personal information.
            </p>
            <div className="mt-8 text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="bg-green-50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Commitment to Your Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At Nuha, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This policy explains how we collect, use, and safeguard 
                your data when you use our services.
              </p>
            </div>

            {/* Policy Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="border-l-4 border-green-500 pl-6 hover:border-green-600 transition-colors duration-300"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {section.content}
                  </p>
                  {section.subsections && (
                    <ul className="space-y-2">
                      {section.subsections.map((subsection, subIndex) => (
                        <li key={subIndex} className="flex items-start">
                          <span className="text-green-500 mr-3 mt-1">•</span>
                          <span className="text-gray-600">{subsection}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-2xl p-8 mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p>📧 privacy@Nuha.com</p>
                <p>📞 1-800-ORGANIC</p>
                <p>📍 123 Green Street, Eco City, EC 12345</p>
              </div>
            </div>

            {/* Updates */}
            <div className="mt-12 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
              <h3 className="font-bold text-yellow-800 mb-2">Policy Updates</h3>
              <p className="text-yellow-700 text-sm">
                {`We may update this policy from time to time. We will notify you of any changes by 
                posting the new policy on this page and updating the "Last Updated" date.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Questions About Your Data?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {`We're here to help you understand how your information is used and protected.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Our Team
            </Link>
            <Link
              href="/terms"
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300 font-semibold text-lg"
            >
              View Terms & Conditions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}