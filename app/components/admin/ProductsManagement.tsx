import { useState } from 'react';
import { Product } from '@/app/admin/types/adminTypes';
import ProductModal from './ProductModal';

const initialProducts: Product[] = [
  { id: 1, name: 'Organic Avocado Oil', price: 24.99, category: 'Cooking Oils', stock: 15, status: 'active', sales: 124 },
  { id: 2, name: 'Cold-Pressed Olive Oil', price: 29.99, category: 'Cooking Oils', stock: 8, status: 'active', sales: 89 },
  { id: 3, name: 'Raw Organic Honey', price: 18.99, category: 'Sweeteners', stock: 25, status: 'active', sales: 156 },
  { id: 4, name: 'Quinoa Superfood', price: 12.99, category: 'Grains', stock: 0, status: 'out-of-stock', sales: 203 },
  { id: 5, name: 'Organic Coconut Oil', price: 19.99, category: 'Cooking Oils', stock: 12, status: 'active', sales: 178 }
];

export default function ProductsManagement() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleStatusChange = (id: number, status: Product['status']) => {
    setProducts(products.map(p => p.id === id ? { ...p, status } : p));
  };

  const handleSaveProduct = (productData: Omit<Product, 'id' | 'sales'>) => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? { ...p, ...productData } : p));
    } else {
      setProducts([...products, { ...productData, id: Date.now(), sales: 0 }]);
    }
    setIsAddModalOpen(false);
    setEditingProduct(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-neutral-900">Products Management</h2>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
        >
          + Add New Product
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Sales</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-neutral-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-200 to-primary-400 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-sm">🌿</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-neutral-900">{product.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{product.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-primary-600">${product.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{product.stock}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={product.status}
                      onChange={(e) => handleStatusChange(product.id, e.target.value as Product['status'])}
                      className={`text-sm px-2 py-1 rounded-full ${
                        product.status === 'active' ? 'bg-green-100 text-green-800' :
                        product.status === 'out-of-stock' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <option value="active">Active</option>
                      <option value="out-of-stock">Out of Stock</option>
                      <option value="draft">Draft</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{product.sales}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => setEditingProduct(product)}
                      className="text-primary-600 hover:text-primary-900 mr-3"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Product Modal */}
      {(isAddModalOpen || editingProduct) && (
        <ProductModal
          product={editingProduct}
          onClose={() => {
            setIsAddModalOpen(false);
            setEditingProduct(null);
          }}
          onSave={handleSaveProduct}
        />
      )}
    </div>
  );
}