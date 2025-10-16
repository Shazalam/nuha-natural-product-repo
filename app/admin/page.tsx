'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Mock data for the dashboard
const dashboardStats = {
  totalRevenue: 12426.50,
  totalOrders: 156,
  totalProducts: 42,
  totalCustomers: 892,
  monthlyGrowth: 12.5,
  conversionRate: 3.2,
  averageOrder: 79.65
};

const recentOrders = [
  { id: 'ORD-7832', customer: 'Sarah Johnson', date: '2024-01-15', amount: 89.97, status: 'delivered' },
  { id: 'ORD-7815', customer: 'Mike Chen', date: '2024-01-15', amount: 124.50, status: 'shipped' },
  { id: 'ORD-7798', customer: 'Emma Davis', date: '2024-01-14', amount: 67.95, status: 'processing' },
  { id: 'ORD-7781', customer: 'Alex Rodriguez', date: '2024-01-14', amount: 45.99, status: 'delivered' },
  { id: 'ORD-7764', customer: 'Jessica Brown', date: '2024-01-13', amount: 156.75, status: 'shipped' }
];

const topProducts = [
  { name: 'Organic Avocado Oil', sales: 124, revenue: 3099.76, stock: 15 },
  { name: 'Cold-Pressed Olive Oil', sales: 89, revenue: 2669.11, stock: 8 },
  { name: 'Raw Organic Honey', sales: 156, revenue: 2962.44, stock: 25 },
  { name: 'Quinoa Superfood', sales: 203, revenue: 2636.97, stock: 30 },
  { name: 'Matcha Green Tea', sales: 87, revenue: 2348.13, stock: 22 }
];

const activityLog = [
  { action: 'New order received', user: 'System', time: '2 minutes ago', type: 'order' },
  { action: 'Product stock updated', user: 'Admin', time: '1 hour ago', type: 'inventory' },
  { action: 'New customer registered', user: 'System', time: '2 hours ago', type: 'customer' },
  { action: 'Order shipped', user: 'Admin', time: '3 hours ago', type: 'shipping' },
  { action: 'Product review added', user: 'Customer', time: '5 hours ago', type: 'review' }
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading Admin Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
             
              <div className="text-sm text-neutral-500">Admin Dashboard</div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-neutral-600">Welcome, Admin</div>
              <Link
                href="/"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
              >
                View Store
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <nav className="space-y-2">
                {[
                  { id: 'overview', label: '📊 Overview', icon: '📊' },
                  { id: 'products', label: '🛍️ Products', icon: '🛍️' },
                  { id: 'orders', label: '📦 Orders', icon: '📦' },
                  { id: 'customers', label: '👥 Customers', icon: '👥' },
                  { id: 'analytics', label: '📈 Analytics', icon: '📈' },
                  { id: 'inventory', label: '📋 Inventory', icon: '📋' },
                  { id: 'reviews', label: '⭐ Reviews', icon: '⭐' },
                  { id: 'settings', label: '⚙️ Settings', icon: '⚙️' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                      activeTab === item.id
                        ? 'bg-primary-100 text-primary-700 font-semibold shadow-sm'
                        : 'text-neutral-600 hover:bg-neutral-100'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Quick Actions */}
              <div className="border-t border-neutral-200 pt-6 mt-6">
                <h3 className="font-semibold text-neutral-900 mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-4 py-2 text-sm text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                    + Add New Product
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    📊 Generate Report
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                    🎨 Update Store
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: 'Total Revenue', value: `$${dashboardStats.totalRevenue.toLocaleString()}`, change: '+12.5%', icon: '💰', color: 'green' },
                    { label: 'Total Orders', value: dashboardStats.totalOrders.toString(), change: '+8.2%', icon: '📦', color: 'blue' },
                    { label: 'Products', value: dashboardStats.totalProducts.toString(), change: '+3.1%', icon: '🛍️', color: 'purple' },
                    { label: 'Customers', value: dashboardStats.totalCustomers.toLocaleString(), change: '+15.3%', icon: '👥', color: 'orange' }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-neutral-600">{stat.label}</p>
                          <p className="text-2xl font-bold text-neutral-900 mt-1">{stat.value}</p>
                          <p className={`text-sm font-medium ${
                            stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {stat.change} from last month
                          </p>
                        </div>
                        <div className={`text-3xl ${
                          stat.color === 'green' ? 'text-green-500' :
                          stat.color === 'blue' ? 'text-blue-500' :
                          stat.color === 'purple' ? 'text-purple-500' : 'text-orange-500'
                        }`}>
                          {stat.icon}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Recent Orders */}
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold text-neutral-900">Recent Orders</h2>
                      <Link href="/admin/orders" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        View All
                      </Link>
                    </div>
                    <div className="space-y-4">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 border border-neutral-200 rounded-xl hover:border-primary-300 transition-colors">
                          <div>
                            <p className="font-semibold text-neutral-900">{order.id}</p>
                            <p className="text-sm text-neutral-600">{order.customer}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-primary-600">${order.amount}</p>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                              order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Top Products */}
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold text-neutral-900">Top Products</h2>
                      <Link href="/admin/products" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        View All
                      </Link>
                    </div>
                    <div className="space-y-4">
                      {topProducts.map((product, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-neutral-200 rounded-xl">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-200 to-primary-400 rounded-lg flex items-center justify-center">
                              <span className="text-sm">🌿</span>
                            </div>
                            <div>
                              <p className="font-semibold text-neutral-900">{product.name}</p>
                              <p className="text-sm text-neutral-600">{product.sales} sales</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-primary-600">${product.revenue.toLocaleString()}</p>
                            <p className={`text-xs ${
                              product.stock < 10 ? 'text-red-600' : 'text-green-600'
                            }`}>
                              Stock: {product.stock}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Activity Log */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-neutral-900 mb-6">Recent Activity</h2>
                  <div className="space-y-4">
                    {activityLog.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 hover:bg-neutral-50 rounded-lg transition-colors">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          activity.type === 'order' ? 'bg-blue-100 text-blue-600' :
                          activity.type === 'inventory' ? 'bg-green-100 text-green-600' :
                          activity.type === 'customer' ? 'bg-purple-100 text-purple-600' :
                          activity.type === 'shipping' ? 'bg-orange-100 text-orange-600' :
                          'bg-yellow-100 text-yellow-600'
                        }`}>
                          {activity.type === 'order' ? '📦' :
                           activity.type === 'inventory' ? '📋' :
                           activity.type === 'customer' ? '👤' :
                           activity.type === 'shipping' ? '🚚' : '⭐'}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-neutral-900">{activity.action}</p>
                          <p className="text-sm text-neutral-600">by {activity.user} • {activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Products Management Tab */}
            {activeTab === 'products' && <ProductsManagement />}
            
            {/* Orders Management Tab */}
            {activeTab === 'orders' && <OrdersManagement />}
            
            {/* Other tabs would be implemented similarly */}
            {(activeTab === 'customers' || activeTab === 'analytics' || activeTab === 'inventory' || activeTab === 'reviews' || activeTab === 'settings') && (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚧</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Under Development</h3>
                <p className="text-neutral-600">
                  The {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} section is currently being developed.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Products Management Component
function ProductsManagement() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Organic Avocado Oil', price: 24.99, category: 'Cooking Oils', stock: 15, status: 'active', sales: 124 },
    { id: 2, name: 'Cold-Pressed Olive Oil', price: 29.99, category: 'Cooking Oils', stock: 8, status: 'active', sales: 89 },
    { id: 3, name: 'Raw Organic Honey', price: 18.99, category: 'Sweeteners', stock: 25, status: 'active', sales: 156 },
    { id: 4, name: 'Quinoa Superfood', price: 12.99, category: 'Grains', stock: 0, status: 'out-of-stock', sales: 203 },
    { id: 5, name: 'Organic Coconut Oil', price: 19.99, category: 'Cooking Oils', stock: 12, status: 'active', sales: 178 }
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleStatusChange = (id: number, status: string) => {
    setProducts(products.map(p => p.id === id ? { ...p, status } : p));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-neutral-900">Products Management</h2>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
        >
          + Add New Product
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Sales</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-neutral-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-200 to-primary-400 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-sm">🌿</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-neutral-900">{product.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{product.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-primary-600">${product.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{product.stock}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={product.status}
                      onChange={(e) => handleStatusChange(product.id, e.target.value)}
                      className={`text-sm px-2 py-1 rounded-full ${
                        product.status === 'active' ? 'bg-green-100 text-green-800' :
                        product.status === 'out-of-stock' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <option value="active">Active</option>
                      <option value="out-of-stock">Out of Stock</option>
                      <option value="draft">Draft</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{product.sales}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => setEditingProduct(product)}
                      className="text-primary-600 hover:text-primary-900 mr-3"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Product Modal */}
      {(isAddModalOpen || editingProduct) && (
        <ProductModal
          product={editingProduct}
          onClose={() => {
            setIsAddModalOpen(false);
            setEditingProduct(null);
          }}
          onSave={(productData) => {
            if (editingProduct) {
              setProducts(products.map(p => p.id === editingProduct.id ? { ...p, ...productData } : p));
            } else {
              setProducts([...products, { ...productData, id: Date.now(), sales: 0 }]);
            }
            setIsAddModalOpen(false);
            setEditingProduct(null);
          }}
        />
      )}
    </div>
  );
}

// Orders Management Component
function OrdersManagement() {
  const [orders, setOrders] = useState([
    { id: 'ORD-7832', customer: 'Sarah Johnson', email: 'sarah@example.com', date: '2024-01-15', amount: 89.97, status: 'delivered', items: 3 },
    { id: 'ORD-7815', customer: 'Mike Chen', email: 'mike@example.com', date: '2024-01-15', amount: 124.50, status: 'shipped', items: 5 },
    { id: 'ORD-7798', customer: 'Emma Davis', email: 'emma@example.com', date: '2024-01-14', amount: 67.95, status: 'processing', items: 2 },
    { id: 'ORD-7781', customer: 'Alex Rodriguez', email: 'alex@example.com', date: '2024-01-14', amount: 45.99, status: 'delivered', items: 1 },
    { id: 'ORD-7764', customer: 'Jessica Brown', email: 'jessica@example.com', date: '2024-01-13', amount: 156.75, status: 'shipped', items: 4 }
  ]);

  const handleStatusChange = (orderId: string, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-neutral-900">Orders Management</h2>
        <div className="flex space-x-2">
          <button className="border border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg hover:bg-neutral-50 transition-colors font-medium">
            Export CSV
          </button>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium">
            Print Report
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Items</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-neutral-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-primary-600">{order.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-neutral-900">{order.customer}</div>
                      <div className="text-sm text-neutral-500">{order.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{order.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-primary-600">${order.amount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{order.items} items</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      className={`text-sm px-2 py-1 rounded-full ${
                        order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <option value="processing">Processing</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 mr-3">
                      View
                    </button>
                    <button className="text-green-600 hover:text-green-900">
                      Invoice
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Orders', value: '156', change: '+12%', icon: '📦' },
          { label: 'Pending', value: '23', change: '-5%', icon: '⏳' },
          { label: 'Shipped', value: '45', change: '+8%', icon: '🚚' },
          { label: 'Delivered', value: '88', change: '+15%', icon: '✅' }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">{stat.label}</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">{stat.value}</p>
                <p className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change} from last week
                </p>
              </div>
              <div className="text-3xl text-primary-500">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Product Modal Component
function ProductModal({ product, onClose, onSave }: { product: any, onClose: () => void, onSave: (data: any) => void }) {
  const [formData, setFormData] = useState(product || {
    name: '',
    price: '',
    category: '',
    stock: '',
    description: '',
    status: 'active'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-neutral-900">
              {product ? 'Edit Product' : 'Add New Product'}
            </h3>
            <button onClick={onClose} className="text-neutral-400 hover:text-neutral-600">
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Product Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter product name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Price ($)
              </label>
              <input
                type="number"
                required
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="0.00"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select category</option>
                <option value="Cooking Oils">Cooking Oils</option>
                <option value="Sweeteners">Sweeteners</option>
                <option value="Grains">Grains</option>
                <option value="Seeds">Seeds</option>
                <option value="Superfoods">Superfoods</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Stock Quantity
              </label>
              <input
                type="number"
                required
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter product description"
              />
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                {product ? 'Update' : 'Create'} Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}