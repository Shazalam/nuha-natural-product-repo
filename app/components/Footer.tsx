import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🌱</span>
              </div>
              <span className="text-xl font-bold">Nuha</span>
            </Link>
            <p className="text-green-200 leading-relaxed">
             {` Your trusted source for premium organic and natural products. 
              We're committed to quality, sustainability, and your well-being.`}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <span className="sr-only">Pinterest</span>
                📌
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-green-200 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=organic-food" className="text-green-200 hover:text-white transition-colors">
                  Organic Food
                </Link>
              </li>
              <li>
                <Link href="/products?category=beauty" className="text-green-200 hover:text-white transition-colors">
                  Natural Beauty
                </Link>
              </li>
              <li>
                <Link href="/products?category=supplements" className="text-green-200 hover:text-white transition-colors">
                  Supplements
                </Link>
              </li>
              <li>
                <Link href="/products?category=home" className="text-green-200 hover:text-white transition-colors">
                  Home & Living
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-green-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="text-green-200 hover:text-white transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-green-200 hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-green-200 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-green-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Contact Info</h4>
                <p className="text-green-200">📧 Thenuha111@gmail.com</p>
                <p className="text-green-200">📞 7070-38-3434</p>
                <p className="text-green-200">📍 Ground Floor, House Number-E-334, Plot Number-9-a, kh No-9/21, Phase-2, Goyla Dairy New Delhi-110071</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Newsletter</h4>
                <p className="text-green-200 text-sm mb-2">
                  Get updates on new products and special offers
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-3 py-2 bg-green-800 border border-green-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full text-white placeholder-green-300"
                  />
                  <button className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-r-lg transition-colors font-medium">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-green-300 text-sm">
              © 2024 Nuha. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm justify-center">
              <Link href="/privacy-policy" className="text-green-300 hover:text-white transition-colors hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-green-300 hover:text-white transition-colors hover:underline">
                Terms & Conditions
              </Link>
              <Link href="/shipping-policy" className="text-green-300 hover:text-white transition-colors hover:underline">
                Shipping Policy
              </Link>
              <Link href="/about" className="text-green-300 hover:text-white transition-colors hover:underline">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}