import { DashboardStats } from '@/app/admin/types/adminTypes';

interface StatsGridProps {
  stats: DashboardStats;
}

export default function StatsGrid({ stats }: StatsGridProps) {
  const statCards = [
    { label: 'Total Revenue', value: `$${stats.totalRevenue.toLocaleString()}`, change: '+12.5%', icon: '💰', color: 'green' as const },
    { label: 'Total Orders', value: stats.totalOrders.toString(), change: '+8.2%', icon: '📦', color: 'blue' as const },
    { label: 'Products', value: stats.totalProducts.toString(), change: '+3.1%', icon: '🛍️', color: 'purple' as const },
    { label: 'Customers', value: stats.totalCustomers.toLocaleString(), change: '+15.3%', icon: '👥', color: 'orange' as const }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, index) => (
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
  );
}