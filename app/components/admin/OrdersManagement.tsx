import { Order } from '@/app/admin/types/adminTypes';
import { useState } from 'react';
// import { Order } from '../../admin/types';

const initialOrders: Order[] = [
  { id: 'ORD-7832', customer: 'Sarah Johnson', email: 'sarah@example.com', date: '2024-01-15', amount: 89.97, status: 'delivered', items: 3 },
  { id: 'ORD-7815', customer: 'Mike Chen', email: 'mike@example.com', date: '2024-01-15', amount: 124.50, status: 'shipped', items: 5 },
  { id: 'ORD-7798', customer: 'Emma Davis', email: 'emma@example.com', date: '2024-01-14', amount: 67.95, status: 'processing', items: 2 },
  { id: 'ORD-7781', customer: 'Alex Rodriguez', email: 'alex@example.com', date: '2024-01-14', amount: 45.99, status: 'delivered', items: 1 },
  { id: 'ORD-7764', customer: 'Jessica Brown', email: 'jessica@example.com', date: '2024-01-13', amount: 156.75, status: 'shipped', items: 4 }
];

export default function OrdersManagement() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const handleStatusChange = (orderId: string, newStatus: Order['status']) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const orderStats = [
    { label: 'Total Orders', value: '156', change: '+12%', icon: '📦' },
    { label: 'Pending', value: '23', change: '-5%', icon: '⏳' },
    { label: 'Shipped', value: '45', change: '+8%', icon: '🚚' },
    { label: 'Delivered', value: '88', change: '+15%', icon: '✅' }
  ];

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
                      onChange={(e) => handleStatusChange(order.id, e.target.value as Order['status'])}
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
        {orderStats.map((stat, index) => (
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