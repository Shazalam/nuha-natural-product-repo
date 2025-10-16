'use client';
import { useState } from 'react';
import Link from 'next/link';

// Mock order data
const orders = [
  {
    id: 'ORD-7832',
    date: '2024-01-15',
    status: 'delivered',
    total: 89.97,
    items: [
      { name: 'Organic Avocado Oil', quantity: 2, price: 24.99, image: '🌿' },
      { name: 'Raw Organic Honey', quantity: 1, price: 18.99, image: '🍯' },
      { name: 'Quinoa Superfood', quantity: 1, price: 12.99, image: '🌾' }
    ],
    shippingAddress: {
      name: 'John Doe',
      street: '123 Green Street',
      city: 'Portland',
      state: 'OR',
      zipCode: '97205',
      country: 'USA'
    },
    trackingNumber: 'TRK783456129',
    estimatedDelivery: '2024-01-18',
    deliveredDate: '2024-01-17'
  },
  {
    id: 'ORD-6541',
    date: '2024-01-08',
    status: 'delivered',
    total: 42.97,
    items: [
      { name: 'Cold-Pressed Olive Oil', quantity: 1, price: 29.99, image: '🫒' },
      { name: 'Chia Seeds', quantity: 1, price: 12.98, image: '🌱' }
    ],
    shippingAddress: {
      name: 'John Doe',
      street: '123 Green Street',
      city: 'Portland',
      state: 'OR',
      zipCode: '97205',
      country: 'USA'
    },
    trackingNumber: 'TRK654782913',
    estimatedDelivery: '2024-01-11',
    deliveredDate: '2024-01-10'
  },
  {
    id: 'ORD-5298',
    date: '2024-01-03',
    status: 'shipped',
    total: 67.95,
    items: [
      { name: 'Matcha Green Tea', quantity: 2, price: 26.99, image: '🍵' },
      { name: 'Almond Butter', quantity: 1, price: 22.99, image: '🥜' }
    ],
    shippingAddress: {
      name: 'John Doe',
      street: '123 Green Street',
      city: 'Portland',
      state: 'OR',
      zipCode: '97205',
      country: 'USA'
    },
    trackingNumber: 'TRK529874163',
    estimatedDelivery: '2024-01-08',
    deliveredDate: null
  },
  {
    id: 'ORD-4176',
    date: '2023-12-20',
    status: 'delivered',
    total: 34.97,
    items: [
      { name: 'Organic Coconut Oil', quantity: 1, price: 19.99, image: '🥥' },
      { name: 'Goji Berries', quantity: 1, price: 21.99, image: '🍒' }
    ],
    shippingAddress: {
      name: 'John Doe',
      street: '123 Green Street',
      city: 'Portland',
      state: 'OR',
      zipCode: '97205',
      country: 'USA'
    },
    trackingNumber: 'TRK417632598',
    estimatedDelivery: '2023-12-24',
    deliveredDate: '2023-12-23'
  },
  {
    id: 'ORD-3921',
    date: '2023-12-10',
    status: 'cancelled',
    total: 55.96,
    items: [
      { name: 'Hemp Seeds', quantity: 2, price: 17.99, image: '💚' },
      { name: 'Organic Cacao Powder', quantity: 1, price: 23.99, image: '🍫' }
    ],
    shippingAddress: {
      name: 'John Doe',
      street: '123 Green Street',
      city: 'Portland',
      state: 'OR',
      zipCode: '97205',
      country: 'USA'
    },
    trackingNumber: null,
    estimatedDelivery: '2023-12-14',
    deliveredDate: null
  }
];

const statusColors = {
  delivered: 'bg-green-100 text-green-800',
  shipped: 'bg-blue-100 text-blue-800',
  processing: 'bg-yellow-100 text-yellow-800',
  cancelled: 'bg-red-100 text-red-800'
};

const statusIcons = {
  delivered: '✅',
  shipped: '🚚',
  processing: '⏳',
  cancelled: '❌'
};

export default function OrderHistoryPage() {
  const [filter, setFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const filteredOrders = filter === 'all' 
    ? orders 
    : orders.filter(order => order.status === filter);

  const getStatusDisplay = (status: string) => {
    const statusMap: { [key: string]: string } = {
      delivered: 'Delivered',
      shipped: 'Shipped',
      processing: 'Processing',
      cancelled: 'Cancelled'
    };
    return statusMap[status] || status;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-neutral-900">Order History</h1>
              <p className="text-neutral-600 mt-2">
                View and manage your past orders
              </p>
            </div>
            <Link
              href="/products"
              className="mt-4 sm:mt-0 bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-neutral-900 mb-4">Filters</h2>
              
              {/* Status Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-neutral-700 mb-3">Order Status</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Orders', count: orders.length },
                    { value: 'delivered', label: 'Delivered', count: orders.filter(o => o.status === 'delivered').length },
                    { value: 'shipped', label: 'Shipped', count: orders.filter(o => o.status === 'shipped').length },
                    { value: 'cancelled', label: 'Cancelled', count: orders.filter(o => o.status === 'cancelled').length }
                  ].map((filterOption) => (
                    <button
                      key={filterOption.value}
                      onClick={() => setFilter(filterOption.value)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        filter === filterOption.value
                          ? 'bg-primary-100 text-primary-700 font-medium'
                          : 'text-neutral-600 hover:bg-neutral-100'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{filterOption.label}</span>
                        <span className="text-sm bg-neutral-200 px-2 py-1 rounded-full">
                          {filterOption.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="border-t border-neutral-200 pt-6">
                <h3 className="font-medium text-neutral-700 mb-3">Order Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Total Orders</span>
                    <span className="font-semibold">{orders.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Total Spent</span>
                    <span className="font-semibold">
                      ${orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Avg. Order</span>
                    <span className="font-semibold">
                      ${(orders.reduce((sum, order) => sum + order.total, 0) / orders.length).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Help Section */}
              <div className="border-t border-neutral-200 pt-6">
                <h3 className="font-medium text-neutral-700 mb-3">Need Help?</h3>
                <div className="space-y-2 text-sm">
                  <Link href="/contact" className="block text-primary-600 hover:text-primary-700">
                    Contact Support
                  </Link>
                  <Link href="/returns" className="block text-primary-600 hover:text-primary-700">
                    Return Policy
                  </Link>
                  <Link href="/shipping" className="block text-primary-600 hover:text-primary-700">
                    Shipping Info
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Orders List */}
          <div className="lg:col-span-3">
            {filteredOrders.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📦</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">No orders found</h3>
                <p className="text-neutral-600 mb-6">
                  {filter === 'all' 
                    ? "You haven't placed any orders yet."
                    : `No orders with status "${filter}" found.`
                  }
                </p>
                <Link
                  href="/products"
                  className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors font-semibold"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredOrders.map((order) => (
                  <div key={order.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Order Header */}
                    <div className="border-b border-neutral-200 bg-neutral-50 px-6 py-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="flex items-center space-x-4">
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="text-lg font-semibold text-neutral-900">
                                Order #{order.id}
                              </span>
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[order.status as keyof typeof statusColors]}`}>
                                {statusIcons[order.status as keyof typeof statusIcons]} 
                                {getStatusDisplay(order.status)}
                              </span>
                            </div>
                            <p className="text-sm text-neutral-600 mt-1">
                              Placed on {formatDate(order.date)}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary-600">
                            ${order.total.toFixed(2)}
                          </div>
                          <button
                            onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                            className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
                          >
                            {selectedOrder === order.id ? 'Hide Details' : 'View Details'}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="p-6">
                      <div className="flex space-x-4 overflow-x-auto pb-4">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex-shrink-0 w-20 text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-200 to-primary-400 rounded-xl flex items-center justify-center mx-auto mb-2">
                              <span className="text-xl">{item.image}</span>
                            </div>
                            <p className="text-xs font-medium text-neutral-900 truncate">
                              {item.name}
                            </p>
                            <p className="text-xs text-neutral-600">
                              Qty: {item.quantity}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Expanded Details */}
                      {selectedOrder === order.id && (
                        <div className="mt-6 pt-6 border-t border-neutral-200 space-y-6">
                          {/* Items Details */}
                          <div>
                            <h4 className="font-semibold text-neutral-900 mb-3">Items</h4>
                            <div className="space-y-3">
                              {order.items.map((item, index) => (
                                <div key={index} className="flex justify-between items-center py-2">
                                  <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-primary-200 to-primary-400 rounded-lg flex items-center justify-center">
                                      <span className="text-sm">{item.image}</span>
                                    </div>
                                    <div>
                                      <p className="font-medium text-neutral-900">{item.name}</p>
                                      <p className="text-sm text-neutral-600">Quantity: {item.quantity}</p>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <p className="font-semibold text-neutral-900">
                                      ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                    <p className="text-sm text-neutral-600">${item.price.toFixed(2)} each</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Shipping Information */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-neutral-900 mb-3">Shipping Address</h4>
                              <div className="bg-neutral-50 rounded-lg p-4">
                                <p className="font-medium">{order.shippingAddress.name}</p>
                                <p className="text-neutral-600">{order.shippingAddress.street}</p>
                                <p className="text-neutral-600">
                                  {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                                </p>
                                <p className="text-neutral-600">{order.shippingAddress.country}</p>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold text-neutral-900 mb-3">Delivery Information</h4>
                              <div className="space-y-2">
                                {order.trackingNumber && (
                                  <div className="flex justify-between">
                                    <span className="text-neutral-600">Tracking Number:</span>
                                    <span className="font-medium">{order.trackingNumber}</span>
                                  </div>
                                )}
                                <div className="flex justify-between">
                                  <span className="text-neutral-600">Estimated Delivery:</span>
                                  <span className="font-medium">{formatDate(order.estimatedDelivery)}</span>
                                </div>
                                {order.deliveredDate && (
                                  <div className="flex justify-between">
                                    <span className="text-neutral-600">Delivered On:</span>
                                    <span className="font-medium text-green-600">
                                      {formatDate(order.deliveredDate)}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-wrap gap-3 pt-4">
                            {order.status === 'delivered' && (
                              <>
                                <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                                  Buy Again
                                </button>
                                <button className="border border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg hover:bg-neutral-50 transition-colors font-medium">
                                  Return Items
                                </button>
                                <button className="border border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg hover:bg-neutral-50 transition-colors font-medium">
                                  Write Review
                                </button>
                              </>
                            )}
                            {order.status === 'shipped' && (
                              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                                Track Package
                              </button>
                            )}
                            <button className="border border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg hover:bg-neutral-50 transition-colors font-medium">
                              Download Invoice
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Load More */}
            {filteredOrders.length > 0 && (
              <div className="mt-8 text-center">
                <button className="border border-neutral-300 text-neutral-700 px-6 py-3 rounded-xl hover:bg-neutral-50 transition-colors font-medium">
                  Load More Orders
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}