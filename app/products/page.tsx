'use client';
import { useState, useMemo } from 'react';
import Image from 'next/image';

// Extended product data
const allProducts = [
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
  "All Categories",
  "Cooking Oils",
  "Sweeteners",
  "Grains",
  "Seeds",
  "Spreads",
  "Teas",
  "Spices",
  "Superfoods"
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest First" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "popular", label: "Most Popular" }
];

const priceRanges = [
  { label: "All Prices", min: 0, max: 1000 },
  { label: "Under $15", min: 0, max: 15 },
  { label: "$15 - $25", min: 15, max: 25 },
  { label: "$25 - $40", min: 25, max: 40 },
  { label: "Over $40", min: 40, max: 1000 }
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedSort, setSelectedSort] = useState('featured');
  const [priceRange, setPriceRange] = useState(priceRanges[0]);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Category filter
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Price range filter
    filtered = filtered.filter(product =>
      product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Sort products
    switch (selectedSort) {
      case 'newest':
        filtered = [...filtered].sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
        break;
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
        filtered = [...filtered].sort((a, b) => b.reviews - a.reviews);
        break;
      default: // featured
        filtered = [...filtered].sort((a, b) => {
          if (a.isBestSeller && !b.isBestSeller) return -1;
          if (!a.isBestSeller && b.isBestSeller) return 1;
          return b.rating - a.rating;
        });
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedSort, priceRange]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setSelectedSort('featured');
    setPriceRange(priceRanges[0]);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-neutral-900">Our Products</h1>
              <p className="mt-2 text-neutral-600">
                Discover {filteredProducts.length} organic products
              </p>
            </div>

            {/* Search Bar */}
            <div className="mt-4 lg:mt-0 lg:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
                  🔍
                </div>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-neutral-900">
                  Filters
                  </h2>
                <button
                  onClick={resetFilters}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  Reset All
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-neutral-900 mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedCategory === category
                          ? 'bg-primary-100 text-primary-700 font-medium'
                          : 'text-neutral-600 hover:bg-neutral-100'
                        }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-neutral-900 mb-4">Price Range</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setPriceRange(range)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${priceRange.label === range.label
                          ? 'bg-primary-100 text-primary-700 font-medium'
                          : 'text-neutral-600 hover:bg-neutral-100'
                        }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Filters */}
              {(selectedCategory !== 'All Categories' || searchQuery || priceRange.min > 0 || priceRange.max < 1000) && (
                <div className="mb-6">
                  <h3 className="font-semibold text-neutral-900 mb-3">Active Filters</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory !== 'All Categories' && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                        Category: {selectedCategory}
                        <button
                          onClick={() => setSelectedCategory('All Categories')}
                          className="ml-1 hover:text-primary-900"
                        >
                          ✕
                        </button>
                      </span>
                    )}
                    {searchQuery && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Search: {`${searchQuery}`}
                        <button
                          onClick={() => setSearchQuery('')}
                          className="ml-1 hover:text-blue-900"
                        >
                          ✕
                        </button>
                      </span>
                    )}
                    {(priceRange.min > 0 || priceRange.max < 1000) && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Price: {priceRange.label}
                        <button
                          onClick={() => setPriceRange(priceRanges[0])}
                          className="ml-1 hover:text-green-900"
                        >
                          ✕
                        </button>
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center space-x-2 px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50"
                  >
                    <span>🔧</span>
                    <span>Filters</span>
                  </button>

                  <div className="text-sm text-neutral-600">
                    Showing {currentProducts.length} of {filteredProducts.length} products
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <select
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                    className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        Sort by: {option.label}
                      </option>
                    ))}
                  </select>

                  <div className="hidden sm:flex items-center space-x-1 text-sm text-neutral-600">
                    <span>View:</span>
                    <button className="p-2 rounded-lg bg-primary-100 text-primary-600">Grid</button>
                    <button className="p-2 rounded-lg hover:bg-neutral-100">List</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {currentProducts.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">No products found</h3>
                <p className="text-neutral-600 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={resetFilters}
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {currentProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                    >
                      {/* Product Image Section */}
                      <div className="relative overflow-hidden">
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
                              onError={() => console.log("Image failed to load")}
                            />
                          </div>
                        </div>

                        {/* Product Badges */}
                        <div className="absolute top-3 left-3 flex flex-col space-y-2">
                          {product.isNew && (
                            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                              NEW
                            </span>
                          )}
                          {product.isBestSeller && (
                            <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                              BEST SELLER
                            </span>
                          )}
                        </div>

                        {/* Stock Status */}
                        <div className="absolute top-3 right-3">
                          {product.stock < 10 ? (
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                              Low Stock
                            </span>
                          ) : (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                              In Stock
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Product Details */}
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

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {product.tags.slice(0, 2).map((tag, index) => (
                            <span
                              key={index}
                              className="inline-block bg-neutral-100 text-neutral-600 px-2 py-1 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-bold text-primary-600">
                              ${product.price}
                            </span>
                            {product.stock < 10 && (
                              <div className="text-xs text-red-600 font-medium mt-1">
                                Only {product.stock} left!
                              </div>
                            )}
                          </div>
                          <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-all duration-300 font-semibold transform hover:scale-105 active:scale-95">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>

                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center space-x-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 rounded-lg ${currentPage === index + 1
                            ? 'bg-primary-600 text-white'
                            : 'border border-neutral-300 hover:bg-neutral-50'
                          }`}
                      >
                        {index + 1}
                      </button>
                    ))}

                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}