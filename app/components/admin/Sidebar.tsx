interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { id: 'overview', label: '📊 Overview', icon: '📊' },
  { id: 'products', label: '🛍️ Products', icon: '🛍️' },
  { id: 'orders', label: '📦 Orders', icon: '📦' },
  { id: 'customers', label: '👥 Customers', icon: '👥' },
  { id: 'analytics', label: '📈 Analytics', icon: '📈' },
  { id: 'inventory', label: '📋 Inventory', icon: '📋' },
  { id: 'reviews', label: '⭐ Reviews', icon: '⭐' },
  { id: 'settings', label: '⚙️ Settings', icon: '⚙️' }
];

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
      <nav className="space-y-2">
        {navItems.map((item) => (
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
  );
}