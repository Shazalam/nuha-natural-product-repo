export interface DashboardStats {
  totalRevenue: number;
  totalOrders: number;
  totalProducts: number;
  totalCustomers: number;
  monthlyGrowth: number;
  conversionRate: number;
  averageOrder: number;
}

export interface RecentOrder {
  id: string;
  customer: string;
  date: string;
  amount: number;
  status: 'delivered' | 'shipped' | 'processing' | 'cancelled';
}

export interface TopProduct {
  name: string;
  sales: number;
  revenue: number;
  stock: number;
}

export interface ActivityLog {
  action: string;
  user: string;
  time: string;
  type: 'order' | 'inventory' | 'customer' | 'shipping' | 'review';
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  status: 'active' | 'out-of-stock' | 'draft';
  sales: number;
  description?: string;
}

export interface Order {
  id: string;
  customer: string;
  email: string;
  date: string;
  amount: number;
  status: 'delivered' | 'shipped' | 'processing' | 'cancelled';
  items: number;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export interface StatCard {
  label: string;
  value: string;
  change: string;
  icon: string;
  color: 'green' | 'blue' | 'purple' | 'orange';
}