'use client';
import { useState } from 'react';
import Link from 'next/link';

// Mock user data
const userData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  joinDate: 'January 2023',
  avatar: '👤',
  preferences: {
    newsletter: true,
    productUpdates: true,
    specialOffers: false
  }
};

const addresses = [
  {
    id: 1,
    type: 'home',
    name: 'John Doe',
    street: '123 Green Street',
    city: 'Portland',
    state: 'OR',
    zipCode: '97205',
    country: 'USA',
    isDefault: true
  },
  {
    id: 2,
    type: 'work',
    name: 'John Doe',
    street: '456 Organic Avenue',
    city: 'Portland',
    state: 'OR',
    zipCode: '97209',
    country: 'USA',
    isDefault: false
  }
];

const stats = [
  { label: 'Total Orders', value: '12', icon: '📦' },
  { label: 'Loyalty Points', value: '1,240', icon: '⭐' },
  { label: 'Reviews Written', value: '8', icon: '✍️' },
  { label: 'Wishlist Items', value: '5', icon: '❤️' }
];

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userData);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsEditing(false);
      // In real app, you would update the user data here
    }, 1500);
  };

  const handlePreferenceChange = (preference: string, value: boolean) => {
    setFormData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [preference]: value
      }
    }));
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900">My Account</h1>
          <p className="text-neutral-600 mt-2">
            Manage your profile, preferences, and account settings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              {/* User Profile Summary */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{userData.avatar}</span>
                </div>
                <h2 className="text-xl font-bold text-neutral-900">{userData.name}</h2>
                <p className="text-neutral-600 text-sm">{userData.email}</p>
                <p className="text-neutral-500 text-xs mt-1">
                  Member since {userData.joinDate}
                </p>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {[
                  { id: 'profile', label: '👤 Profile Information', icon: '👤' },
                  { id: 'orders', label: '📦 Order History', icon: '📦' },
                  { id: 'addresses', label: '🏠 Saved Addresses', icon: '🏠' },
                  { id: 'security', label: '🔒 Security', icon: '🔒' },
                  { id: 'preferences', label: '⚙️ Preferences', icon: '⚙️' },
                  { id: 'payment', label: '💳 Payment Methods', icon: '💳' }
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

              {/* Quick Stats */}
              <div className="border-t border-neutral-200 pt-6 mt-6">
                <h3 className="font-semibold text-neutral-900 mb-4">Account Summary</h3>
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center bg-neutral-50 rounded-lg p-3">
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className="text-lg font-bold text-neutral-900">{stat.value}</div>
                      <div className="text-xs text-neutral-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Information Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-neutral-900">Profile Information</h2>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                  >
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                  </button>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:bg-neutral-100 disabled:cursor-not-allowed transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:bg-neutral-100 disabled:cursor-not-allowed transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:bg-neutral-100 disabled:cursor-not-allowed transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Member Since
                      </label>
                      <input
                        type="text"
                        value={formData.joinDate}
                        disabled
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl bg-neutral-100 cursor-not-allowed"
                      />
                    </div>
                  </div>

                  {isEditing && (
                    <div className="flex justify-end space-x-4 pt-6 border-t border-neutral-200">
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="px-6 py-3 border border-neutral-300 text-neutral-700 rounded-xl hover:bg-neutral-50 transition-colors font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleSave}
                        disabled={isLoading}
                        className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Saving...</span>
                          </div>
                        ) : (
                          'Save Changes'
                        )}
                      </button>
                    </div>
                  )}
                </form>
              </div>
            )}

            {/* Order History Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-neutral-900">Order History</h2>
                  <Link
                    href="/account/orders"
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                  >
                    View All Orders
                  </Link>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3].map((order) => (
                    <div key={order} className="flex items-center justify-between p-4 border border-neutral-200 rounded-xl hover:border-primary-300 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-200 to-primary-400 rounded-lg flex items-center justify-center">
                          <span className="text-lg">📦</span>
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-900">Order #ORD-{7832 - order}</p>
                          <p className="text-sm text-neutral-600">Placed on Jan {15 - order}, 2024</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary-600">$67.95</p>
                        <p className="text-sm text-green-600 font-medium">Delivered</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Link
                    href="/account/orders"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    View complete order history →
                  </Link>
                </div>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-neutral-900">Saved Addresses</h2>
                  <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                    Add New Address
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {addresses.map((address) => (
                    <div key={address.id} className={`border-2 rounded-xl p-6 relative ${
                      address.isDefault ? 'border-primary-500 bg-primary-50' : 'border-neutral-200'
                    }`}>
                      {address.isDefault && (
                        <span className="absolute -top-2 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          Default
                        </span>
                      )}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 mb-2">
                            {address.type === 'home' ? '🏠 Home' : '💼 Work'}
                          </span>
                          <h3 className="font-semibold text-neutral-900">{address.name}</h3>
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                            Edit
                          </button>
                          {!address.isDefault && (
                            <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                              Remove
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="space-y-1 text-sm text-neutral-600">
                        <p>{address.street}</p>
                        <p>{address.city}, {address.state} {address.zipCode}</p>
                        <p>{address.country}</p>
                      </div>
                      {!address.isDefault && (
                        <button className="w-full mt-4 border border-primary-600 text-primary-600 py-2 rounded-lg hover:bg-primary-600 hover:text-white transition-colors font-medium">
                          Set as Default
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Preferences Tab */}
            {activeTab === 'preferences' && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Preferences</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-4">Email Preferences</h3>
                    <div className="space-y-4">
                      {[
                        { key: 'newsletter', label: 'Weekly Newsletter', description: 'Get the latest organic living tips and recipes' },
                        { key: 'productUpdates', label: 'New Product Updates', description: 'Be the first to know about new organic products' },
                        { key: 'specialOffers', label: 'Special Offers & Discounts', description: 'Receive exclusive deals and promotions' }
                      ].map((preference) => (
                        <div key={preference.key} className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            checked={formData.preferences[preference.key as keyof typeof formData.preferences] as boolean}
                            onChange={(e) => handlePreferenceChange(preference.key, e.target.checked)}
                            className="mt-1 text-primary-600 focus:ring-primary-500"
                          />
                          <div>
                            <label className="font-medium text-neutral-900">
                              {preference.label}
                            </label>
                            <p className="text-sm text-neutral-600 mt-1">
                              {preference.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-neutral-200 pt-6">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-4">Shopping Preferences</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Preferred Shipping Method
                        </label>
                        <select className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500">
                          <option>Standard Shipping (3-5 days)</option>
                          <option>Express Shipping (1-2 days)</option>
                          <option>Free Shipping (5-7 days)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-6 border-t border-neutral-200">
                    <button className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors font-medium">
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Security Settings</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-4">Change Password</h3>
                    <div className="grid grid-cols-1 gap-4 max-w-md">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Current Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <button className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors font-medium mt-2">
                        Update Password
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-neutral-200 pt-6">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-4">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-neutral-900">Two-Factor Authentication</p>
                        <p className="text-sm text-neutral-600 mt-1">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                        Enable
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-neutral-200 pt-6">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-4">Login Activity</h3>
                    <div className="space-y-3">
                      {[
                        { device: 'Chrome on Windows', location: 'Portland, OR', time: '2 hours ago', current: true },
                        { device: 'Safari on iPhone', location: 'Portland, OR', time: '1 day ago', current: false },
                        { device: 'Firefox on Mac', location: 'Portland, OR', time: '1 week ago', current: false }
                      ].map((session, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
                          <div>
                            <p className="font-medium text-neutral-900">{session.device}</p>
                            <p className="text-sm text-neutral-600">{session.location} • {session.time}</p>
                          </div>
                          {session.current ? (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                              Current
                            </span>
                          ) : (
                            <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                              Revoke
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}