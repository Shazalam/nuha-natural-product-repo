'use client';
import { useState, useEffect } from 'react';


import {
  DashboardStats,
  RecentOrder,
  TopProduct,
  ActivityLog as ActivityLogType
} from './types/adminTypes';
import Loading from '../components/ui/Loading';
import StatsGrid from '../components/admin/StatsGrid';
import RecentOrders from '../components/admin/RecentOrders';
import TopProducts from '../components/admin/TopProducts';
import ActivityLog from '../components/admin/ActivityLog';
import ProductsManagement from '../components/admin/ProductsManagement';
import OrdersManagement from '../components/admin/OrdersManagement';
import UnderDevelopment from '../components/admin/UnderDevelopment';
import Header from '../components/admin/Header';
import Sidebar from '../components/admin/Sidebar';

// Mock data
const dashboardStats: DashboardStats = {
  totalRevenue: 12426.50,
  totalOrders: 156,
  totalProducts: 42,
  totalCustomers: 892,
  monthlyGrowth: 12.5,
  conversionRate: 3.2,
  averageOrder: 79.65
};

const recentOrders: RecentOrder[] = [
  { id: 'ORD-7832', customer: 'Sarah Johnson', date: '2024-01-15', amount: 89.97, status: 'delivered' },
  { id: 'ORD-7815', customer: 'Mike Chen', date: '2024-01-15', amount: 124.50, status: 'shipped' },
  { id: 'ORD-7798', customer: 'Emma Davis', date: '2024-01-14', amount: 67.95, status: 'processing' },
  { id: 'ORD-7781', customer: 'Alex Rodriguez', date: '2024-01-14', amount: 45.99, status: 'delivered' },
  { id: 'ORD-7764', customer: 'Jessica Brown', date: '2024-01-13', amount: 156.75, status: 'shipped' }
];

const topProducts: TopProduct[] = [
  { name: 'Organic Avocado Oil', sales: 124, revenue: 3099.76, stock: 15 },
  { name: 'Cold-Pressed Olive Oil', sales: 89, revenue: 2669.11, stock: 8 },
  { name: 'Raw Organic Honey', sales: 156, revenue: 2962.44, stock: 25 },
  { name: 'Quinoa Superfood', sales: 203, revenue: 2636.97, stock: 30 },
  { name: 'Matcha Green Tea', sales: 87, revenue: 2348.13, stock: 22 }
];

const activityLog: ActivityLogType[] = [
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
    return <Loading />;
  }

  const renderMainContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <StatsGrid stats={dashboardStats} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <RecentOrders orders={recentOrders} />
              <TopProducts products={topProducts} />
            </div>
            <ActivityLog activities={activityLog} />
          </div>
        );
      case 'products':
        return <ProductsManagement />;
      case 'orders':
        return <OrdersManagement />;
      case 'customers':
      case 'analytics':
      case 'inventory':
      case 'reviews':
      case 'settings':
        return <UnderDevelopment tabName={activeTab} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderMainContent()}
          </div>
        </div>
      </div>
    </div>
  );
}