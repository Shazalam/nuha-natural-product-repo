import Link from 'next/link';
import { TopProduct } from '@/app/admin/types/adminTypes';

interface TopProductsProps {
  products: TopProduct[];
}

export default function TopProducts({ products }: TopProductsProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-neutral-900">Top Products</h2>
        <Link href="/admin/products" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
          View All
        </Link>
      </div>
      <div className="space-y-4">
        {products.map((product, index) => (
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
  );
}