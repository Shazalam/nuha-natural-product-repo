import Link from 'next/link';

interface HeaderProps {
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

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  return (
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
  );
}