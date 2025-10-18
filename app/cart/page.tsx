'use client';
import { useState } from 'react';
import Link from 'next/link';

// Mock cart data
const initialCartItems = [
  {
    id: 1,
    name: "Organic Avocado Oil",
    price: 24.99,
    image: "/api/placeholder/300/300",
    category: "Cooking Oils",
    quantity: 2,
    stock: 15,
    weight: "500ml",
    description: "Cold-pressed, unrefined organic avocado oil perfect for cooking and salads"
  },
  {
    id: 2,
    name: "Raw Organic Honey",
    price: 18.99,
    image: "/api/placeholder/300/300",
    category: "Sweeteners",
    quantity: 1,
    stock: 25,
    weight: "350g",
    description: "Pure, unfiltered raw honey from local organic beekeepers"
  },
  {
    id: 3,
    name: "Quinoa Superfood",
    price: 12.99,
    image: "/api/placeholder/300/300",
    category: "Grains",
    quantity: 3,
    stock: 30,
    weight: "1kg",
    description: "Premium organic quinoa packed with protein and essential nutrients"
  }
];

const shippingOptions = [
  { id: 'standard', name: 'Standard Shipping', price: 4.99, time: '3-5 business days' },
  { id: 'express', name: 'Express Shipping', price: 9.99, time: '1-2 business days' },
  { id: 'free', name: 'Free Shipping', price: 0, time: '5-7 business days', minOrder: 50 }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState('');
  const [selectedShipping, setSelectedShipping] = useState('free');
  const [isLoading, setIsLoading] = useState(false);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = shippingOptions.find(option => option.id === selectedShipping)?.price || 0;
  const tax = subtotal * 0.08; // 8% tax
  const discount = promoCode === 'ORGANIC10' ? subtotal * 0.1 : 0; // 10% discount
  const total = subtotal + shippingCost + tax - discount;

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode === 'ORGANIC10') {
      // Success - discount applied
      return true;
    }
    return false;
  };

  const handleCheckout = () => {
    setIsLoading(true);
    // Simulate checkout process
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to checkout page
      window.location.href = '/checkout';
    }, 1500);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-neutral-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Empty Cart State */}
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🛒</span>
            </div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-4">Your Cart is Empty</h1>
            <p className="text-neutral-600 mb-8 max-w-md mx-auto">
             {` Looks like you haven't added any organic goodies to your cart yet. Start shopping to discover our premium selection!`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🛍️ Start Shopping
              </Link>
              <Link
                href="/"
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl hover:bg-primary-600 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                ← Back to Home
              </Link>
            </div>

            {/* Featured Products Suggestion */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">You Might Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {initialCartItems.slice(0, 3).map(product => (
                  <div key={product.id} className="bg-neutral-50 rounded-2xl p-4 text-center group hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-200 to-primary-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🌿</span>
                    </div>
                    <h4 className="font-semibold text-neutral-900 text-sm mb-1">{product.name}</h4>
                    <p className="text-primary-600 font-bold text-lg">${product.price}</p>
                    <Link
                      href={`/products/${product.id}`}
                      className="inline-block mt-2 text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      View Details →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900">Shopping Cart</h1>
          <p className="text-neutral-600 mt-2">
            {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Cart Header */}
              <div className="border-b border-neutral-200 bg-neutral-50 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-neutral-900">Cart Items</h2>
                  <span className="text-sm text-neutral-600">
                    Total: ${subtotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Cart Items List */}
              <div className="divide-y divide-neutral-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary-200 to-primary-400 rounded-xl flex items-center justify-center">
                          <span className="text-2xl">🌿</span>
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                              {item.name}
                            </h3>
                            <p className="text-sm text-neutral-600 mb-2 line-clamp-2">
                              {item.description}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-neutral-500">
                              <span>Weight: {item.weight}</span>
                              <span>•</span>
                              <span className="text-green-600 font-medium">In Stock</span>
                            </div>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <div className="text-xl font-bold text-primary-600 mb-2">
                              ${item.price.toFixed(2)}
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
                            >
                              Remove
                            </button>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-sm text-neutral-600">Quantity:</span>
                            <div className="flex items-center border border-neutral-300 rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                className="px-3 py-1 text-neutral-600 hover:text-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                              >
                                −
                              </button>
                              <span className="px-4 py-1 text-neutral-900 font-medium min-w-12 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                disabled={item.quantity >= item.stock}
                                className="px-3 py-1 text-neutral-600 hover:text-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          {/* Item Total */}
                          <div className="text-right">
                            <div className="text-lg font-bold text-neutral-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                            {item.quantity > 1 && (
                              <div className="text-sm text-neutral-500">
                                ${item.price.toFixed(2)} each
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Footer */}
              <div className="border-t border-neutral-200 bg-neutral-50 px-6 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <Link
                    href="/products"
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    <span>←</span>
                    <span>Continue Shopping</span>
                  </Link>
                  
                  <button
                    onClick={() => setCartItems([])}
                    className="text-red-600 hover:text-red-700 font-medium transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: '🔒', text: 'Secure Checkout' },
                { icon: '🌱', text: '100% Organic' },
                { icon: '🚚', text: 'Free Shipping' },
                { icon: '↩️', text: 'Easy Returns' }
              ].map((badge, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className="text-2xl mb-2">{badge.icon}</div>
                  <div className="text-sm font-medium text-neutral-700">{badge.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg sticky top-8">
              {/* Summary Header */}
              <div className="border-b border-neutral-200 px-6 py-4">
                <h2 className="text-lg font-semibold text-neutral-900">Order Summary</h2>
              </div>

              {/* Summary Content */}
              <div className="p-6 space-y-6">
                {/* Promo Code */}
                <div>
                  <label htmlFor="promo-code" className="block text-sm font-medium text-neutral-700 mb-2">
                    Promo Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      id="promo-code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                      placeholder="Enter code"
                      className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                    >
                      Apply
                    </button>
                  </div>
                  {promoCode === 'ORGANIC10' && (
                    <p className="text-green-600 text-sm mt-2 font-medium">
                      🎉 10% discount applied!
                    </p>
                  )}
                  <p className="text-xs text-neutral-500 mt-2">
                    Try code: <strong>ORGANIC10</strong> for 10% off
                  </p>
                </div>

                {/* Shipping Options */}
                <div>
                  <h3 className="text-sm font-medium text-neutral-700 mb-3">Shipping Method</h3>
                  <div className="space-y-2">
                    {shippingOptions.map((option) => (
                      <label
                        key={option.id}
                        className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                          selectedShipping === option.id
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-neutral-300 hover:border-neutral-400'
                        }`}
                      >
                        <input
                          type="radio"
                          name="shipping"
                          value={option.id}
                          checked={selectedShipping === option.id}
                          onChange={(e) => setSelectedShipping(e.target.value)}
                          className="text-primary-600 focus:ring-primary-500"
                        />
                        <div className="ml-3 flex-1">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-neutral-900">
                              {option.name}
                            </span>
                            <span className="text-sm font-semibold text-neutral-900">
                              {option.price === 0 ? 'Free' : `$${option.price.toFixed(2)}`}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-500 mt-1">{option.time}</p>
                          {option.minOrder && subtotal < option.minOrder && (
                            <p className="text-xs text-orange-600 mt-1">
                              Add ${(option.minOrder - subtotal).toFixed(2)} more for free shipping
                            </p>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Order Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">Shipping</span>
                    <span className="font-medium">
                      {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-green-600">Discount</span>
                      <span className="font-medium text-green-600">-${discount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="border-t border-neutral-200 pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-neutral-500 mt-1">
                      Including all taxes and shipping
                    </p>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className="w-full bg-primary-600 text-white py-4 rounded-xl hover:bg-primary-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span>🛒</span>
                      <span>Proceed to Checkout</span>
                      <span>→</span>
                    </div>
                  )}
                </button>

                {/* Security Assurance */}
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 text-sm text-neutral-500">
                    <span>🔒</span>
                    <span>Secure SSL Encryption</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recently Viewed */}
            <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-semibold text-neutral-900 mb-4">Recently Viewed</h3>
              <div className="space-y-3">
                {initialCartItems.slice(0, 2).map(product => (
                  <div key={product.id} className="flex items-center space-x-3 group hover:bg-neutral-50 p-2 rounded-lg transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-200 to-primary-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🌿</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-neutral-900 truncate">{product.name}</h4>
                      <p className="text-primary-600 font-bold text-sm">${product.price}</p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 bg-primary-600 text-white p-1 rounded-lg transition-all">
                      +
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Bought Together */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
              Frequently Bought Together
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Organic Coconut Oil",
                  price: 19.99,
                  description: "Perfect companion for your avocado oil",
                  customers: "82% of customers buy this together"
                },
                {
                  name: "Chia Seeds",
                  price: 14.99,
                  description: "Great with quinoa for healthy meals",
                  customers: "76% of customers buy this together"
                },
                {
                  name: "Matcha Green Tea",
                  price: 26.99,
                  description: "Complete your healthy pantry",
                  customers: "68% of customers buy this together"
                }
              ].map((product, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-200 to-primary-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{product.name}</h3>
                  <p className="text-primary-600 font-bold text-lg mb-2">${product.price}</p>
                  <p className="text-sm text-neutral-600 mb-3">{product.description}</p>
                  <p className="text-xs text-neutral-500 mb-4">{product.customers}</p>
                  <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}