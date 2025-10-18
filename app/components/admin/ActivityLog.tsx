import { ActivityLog as ActivityLogType } from '@/app/admin/types/adminTypes';

interface ActivityLogProps {
  activities: ActivityLogType[];
}

export default function ActivityLog({ activities }: ActivityLogProps) {
  const getActivityIcon = (type: ActivityLogType['type']) => {
    switch (type) {
      case 'order': return '📦';
      case 'inventory': return '📋';
      case 'customer': return '👤';
      case 'shipping': return '🚚';
      case 'review': return '⭐';
      default: return '📝';
    }
  };

  const getActivityColor = (type: ActivityLogType['type']) => {
    switch (type) {
      case 'order': return 'bg-blue-100 text-blue-600';
      case 'inventory': return 'bg-green-100 text-green-600';
      case 'customer': return 'bg-purple-100 text-purple-600';
      case 'shipping': return 'bg-orange-100 text-orange-600';
      case 'review': return 'bg-yellow-100 text-yellow-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-neutral-900 mb-6">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center space-x-4 p-3 hover:bg-neutral-50 rounded-lg transition-colors">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getActivityColor(activity.type)}`}>
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1">
              <p className="font-medium text-neutral-900">{activity.action}</p>
              <p className="text-sm text-neutral-600">by {activity.user} • {activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}