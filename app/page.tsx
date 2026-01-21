import Image from 'next/image';
import Link from 'next/link';

// Static data for the homepage
const featuredProducts = [
  {
    id: 1,
    name: "Organic Avocado Oil",
    price: 24.99,
    image: "https://images.pexels.com/photos/31275834/pexels-photo-31275834.jpeg",
    category: "Cooking Oils",
    subcategory: "Oils",
    rating: 4.8,
    reviews: 124,
    isNew: true,
    isBestSeller: true,
    stock: 15,
    tags: ["cold-pressed", "unrefined", "virgin"]
  },
  {
    id: 2,
    name: "Cold-Pressed Olive Oil",
    price: 29.99,
    image: "https://images.pexels.com/photos/9814620/pexels-photo-9814620.jpeg",
    category: "Cooking Oils",
    subcategory: "Oils",
    rating: 4.9,
    reviews: 89,
    isBestSeller: true,
    stock: 8,
    tags: ["extra-virgin", "first-press"]
  },
  {
    id: 3,
    name: "Raw Organic Honey",
    price: 18.99,
    image: "https://images.pexels.com/photos/5634210/pexels-photo-5634210.jpeg",
    category: "Sweeteners",
    subcategory: "Natural Sweeteners",
    rating: 4.7,
    reviews: 156,
    isNew: true,
    stock: 25,
    tags: ["raw", "unfiltered", "local"]
  },
  {
    id: 4,
    name: "Quinoa Superfood",
    price: 12.99,
    image: "https://images.pexels.com/photos/1640767/pexels-photo-1640767.jpeg",
    category: "Grains",
    subcategory: "Ancient Grains",
    rating: 4.6,
    reviews: 203,
    stock: 30,
    tags: ["gluten-free", "protein-rich"]
  },
  {
    id: 5,
    name: "Organic Coconut Oil",
    price: 19.99,
    image: "https://images.pexels.com/photos/11809347/pexels-photo-11809347.jpeg",
    category: "Cooking Oils",
    subcategory: "Oils",
    rating: 4.8,
    reviews: 178,
    stock: 12,
    tags: ["virgin", "unrefined"]
  },
  {
    id: 6,
    name: "Chia Seeds",
    price: 14.99,
    image: "https://images.pexels.com/photos/3682193/pexels-photo-3682193.jpeg",
    category: "Seeds",
    subcategory: "Super Seeds",
    rating: 4.7,
    reviews: 92,
    stock: 45,
    tags: ["omega-3", "fiber-rich"]
  },
  {
    id: 7,
    name: "Almond Butter",
    price: 22.99,
    image: "https://images.pexels.com/photos/33657317/pexels-photo-33657317.jpeg",
    category: "Spreads",
    subcategory: "Nut Butters",
    rating: 4.9,
    reviews: 145,
    isBestSeller: true,
    stock: 18,
    tags: ["creamy", "unsalted"]
  },
  {
    id: 8,
    name: "Matcha Green Tea",
    price: 26.99,
    image: "https://images.pexels.com/photos/32108584/pexels-photo-32108584.jpeg",
    category: "Teas",
    subcategory: "Green Teas",
    rating: 4.8,
    reviews: 87,
    stock: 22,
    tags: ["ceremonial-grade", "antioxidants"]
  },
  {
    id: 9,
    name: "Organic Turmeric Powder",
    price: 16.99,
    image: "https://images.pexels.com/photos/6220708/pexels-photo-6220708.jpeg",
    category: "Spices",
    subcategory: "Root Spices",
    rating: 4.5,
    reviews: 134,
    stock: 28,
    tags: ["anti-inflammatory", "organic"]
  },
  {
    id: 10,
    name: "Goji Berries",
    price: 21.99,
    image: "https://images.pexels.com/photos/1334129/pexels-photo-1334129.jpeg",
    category: "Superfoods",
    subcategory: "Berries",
    rating: 4.4,
    reviews: 76,
    isNew: true,
    stock: 35,
    tags: ["antioxidants", "vitamin-c"]
  },
  {
    id: 11,
    name: "Hemp Seeds",
    price: 17.99,
    image: "https://images.pexels.com/photos/4110191/pexels-photo-4110191.jpeg",
    category: "Seeds",
    subcategory: "Super Seeds",
    rating: 4.6,
    reviews: 98,
    stock: 40,
    tags: ["protein", "omega-3-6-9"]
  },
  {
    id: 12,
    name: "Organic Cacao Powder",
    price: 23.99,
    image: "https://images.pexels.com/photos/1212845/pexels-photo-1212845.jpeg",
    category: "Superfoods",
    subcategory: "Cacao",
    rating: 4.7,
    reviews: 112,
    stock: 20,
    tags: ["raw", "antioxidants"]
  }
];

const categories = [
  {
    name: "Organic Food",
    icon: "🍎",
    description: "Fresh organic fruits, vegetables & more",
    count: "125+ Products",
    gradient: "from-green-200 to-emerald-400"
  },
  {
    name: "Natural Beauty",
    icon: "✨",
    description: "Chemical-free skincare & beauty products",
    count: "80+ Products",
    gradient: "from-purple-200 to-pink-400"
  },
  {
    name: "Herbal Supplements",
    icon: "🌿",
    description: "Natural health supplements & vitamins",
    count: "65+ Products",
    gradient: "from-blue-200 to-cyan-400"
  },
  {
    name: "Eco-Friendly Home",
    icon: "🏠",
    description: "Sustainable home & living products",
    count: "45+ Products",
    gradient: "from-orange-200 to-red-400"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Health Enthusiast",
    content: "The quality of organic products here is exceptional. My family has never been healthier!",
    rating: 5,
    avatar: "👩",
    location: "California"
  },
  {
    name: "Michael Chen",
    role: "Nutritionist",
    content: "As a nutritionist, I trust Nuha for all my clients' supplement needs. Pure and effective!",
    rating: 5,
    avatar: "👨",
    location: "New York"
  },
  {
    name: "Emma Davis",
    role: "Yoga Instructor",
    content: "The natural beauty products have transformed my skincare routine. Completely chemical-free!",
    rating: 5,
    avatar: "🧘‍♀️",
    location: "Colorado"
  }
];

const trustBadges = [
  { icon: "🌱", text: "100% Organic Certified", description: "All products certified organic" },
  { icon: "🚚", text: "Free Shipping", description: "Free delivery on orders over $50" },
  { icon: "💚", text: "Eco-Friendly", description: "Sustainable packaging" },
  { icon: "⭐", text: "4.9/5 Rating", description: "Rated by 2000+ customers" },
  { icon: "🔒", text: "Secure Payment", description: "100% secure checkout" },
  { icon: "↩️", text: "Easy Returns", description: "30-day return policy" }
];

const benefits = [
  {
    icon: "🚀",
    title: "Fast Delivery",
    description: "Get your orders delivered within 2-3 business days"
  },
  {
    icon: "💎",
    title: "Premium Quality",
    description: "Handpicked products from trusted organic farms"
  },
  {
    icon: "🌍",
    title: "Sustainable Sourcing",
    description: "Ethically sourced from environmentally conscious suppliers"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-green-50 to-emerald-100 py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary-300 rounded-full"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-primary-200 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary-100 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-primary-700">Trusted by 10,000+ Health Enthusiasts</span>
              </div>



              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 leading-tight">
                Pure Nature,
                <span className="text-primary-600 block mt-2">Pure Goodness</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed">
                Discover our curated selection of premium organic and natural products for a healthier, more sustainable lifestyle. Fresh from farm to your doorstep.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/products"
                  className="group bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <span>🛍️</span>
                  <span>Shop Now</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                  href="/about"
                  className="group border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl hover:bg-primary-600 hover:text-white transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2"
                >
                  <span>📖</span>
                  <span>Our Story</span>
                </Link>
              </div>

              {/* Trust Metrics */}
              <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
                {[
                  { number: "10K+", label: "Happy Customers" },
                  { number: "500+", label: "Organic Products" },
                  { number: "99%", label: "Satisfaction Rate" }
                ].map((metric, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="text-2xl font-bold text-primary-600 group-hover:scale-110 transition-transform duration-300">
                      {metric.number}
                    </div>
                    <div className="text-neutral-600 text-sm mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Hero Image */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-primary-200 to-primary-400 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden">
                  {/* <span className="text-8xl z-10">🌿</span> */}
                  <div className="w-full h-48 bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center">
                    <div className="w-full h-48 bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center">
                      <Image
                        src={"/heroImage.jpg"}
                        alt={"Hero image"}
                        width={300}
                        height={300}
                        loading={"lazy"} // eager for first 4 products, lazy for rest
                      // className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  {/* Animated background elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-8 right-8 w-6 h-6 bg-white/30 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-primary-100 animate-float">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <div className="font-semibold text-neutral-900">4.9/5</div>
                    <div className="text-xs text-neutral-600">Rating</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-primary-500 text-white p-4 rounded-2xl shadow-lg border border-primary-400 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🚚</span>
                  <div>
                    <div className="font-semibold text-neutral-900">Free Delivery</div>
                    <div className="text-xs opacity-90 text-neutral-600">Over $50</div>
                  </div>
                </div>
              </div>

              {/* Third floating element */}
              <div className="absolute top-1/2 -left-8 bg-white p-3 rounded-xl shadow-lg border border-green-200 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-2">
                  <span className="text-xl">💚</span>
                  <div className="text-xs font-medium text-neutral-700">Eco-Friendly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Trust Badges */}
      <section className="py-16 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex flex-col items-center text-center group hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {badge.icon}
                </div>
                <div className="font-semibold text-neutral-900 text-sm mb-1">
                  {badge.text}
                </div>
                <div className="text-xs text-neutral-500">
                  {badge.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Why Choose Nuha?
            </h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              {`We're committed to bringing you the best organic experience`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Shop by Category
            </h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore our carefully curated categories of organic and natural products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/products?category=${category.name.toLowerCase().replace(' ', '-')}`}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {category.name}
                  </h3>
                  <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <div className="text-primary-600 font-semibold text-lg">
                    {category.count}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Featured Products
            </h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              Discover our best-selling organic products loved by thousands
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.slice(0, 8).map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center relative">
                    <div className="w-full h-48 bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center">
                      <div className="w-full h-48 bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={300}
                          height={300}
                          loading={index < 4 ? "eager" : "lazy"} // eager for first 4 products, lazy for rest
                          priority={index < 4} // optional: preload top images
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"

                        />
                      </div>
                    </div>
                    {/* Product badges */}
                    <div className="absolute top-3 left-3 flex flex-col space-y-2">
                      {product.isNew && (
                        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          NEW
                        </span>
                      )}
                      {product.isBestSeller && (
                        <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          BEST SELLER
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary-600 font-semibold bg-primary-50 px-2 py-1 rounded">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm text-neutral-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-primary-600">
                      ${product.price}
                    </span>
                    <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-all duration-300 font-semibold transform hover:scale-105 active:scale-95">
 Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center space-x-3 bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>View All Products</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Loved by Our Community
            </h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us for their organic needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 group"
              >
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>

                <p className="text-neutral-600 italic mb-8 text-lg leading-relaxed relative">
                  <span className="text-4xl text-primary-200 absolute -top-4 -left-2">&quot;</span>
                  {`${testimonial.content}`}
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center text-2xl shadow-inner">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900 text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-neutral-600 text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-primary-600 text-xs font-medium mt-1">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Start Your <span className="text-green-200">Organic Journey</span>?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of health-conscious individuals who trust us for premium organic products delivered right to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="group bg-white text-primary-600 px-10 py-5 rounded-2xl hover:bg-neutral-100 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center justify-center space-x-3"
            >
              <span>🛍️</span>
              <span>Start Shopping Now</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
            <Link
              href="/about"
              className="group border-2 border-white text-white px-10 py-5 rounded-2xl hover:bg-white hover:text-primary-600 transition-all duration-300 font-bold text-lg flex items-center justify-center space-x-3"
            >
              <span>📖</span>
              <span>Learn Our Story</span>
            </Link>
          </div>

          {/* Additional trust element */}
          <div className="mt-12 flex items-center justify-center space-x-6 text-primary-200 text-sm">
            <div className="flex items-center space-x-2">
              <span>🔒</span>
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🚚</span>
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>↩️</span>
              <span>Easy Returns</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}