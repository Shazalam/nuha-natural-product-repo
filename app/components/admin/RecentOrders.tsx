import Link from 'next/link';
import { RecentOrder } from '@/app/admin/types/adminTypes';

interface RecentOrdersProps {
  orders: RecentOrder[];
}

export default function RecentOrders({ orders }: RecentOrdersProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-neutral-900">Recent Orders</h2>
        <Link href="/admin/orders" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
          View All
        </Link>
      </div>
      <div className="space-y-4">
        {orders.map((order) => (
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
  );
}