import { useState } from 'react';
import { Product } from '@/app/admin/types/adminTypes';

interface ProductModalProps {
  product?: Product | null;
  onClose: () => void;
  onSave: (productData: Omit<Product, 'id' | 'sales'>) => void;
}

export default function ProductModal({ product, onClose, onSave }: ProductModalProps) {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    price: product?.price || '',
    category: product?.category || '',
    stock: product?.stock || '',
    description: product?.description || '',
    status: product?.status || 'active'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      name: formData.name,
      price: Number(formData.price),
      category: formData.category,
      stock: Number(formData.stock),
      description: formData.description,
      status: formData.status as 'active' | 'out-of-stock' | 'draft'
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-neutral-900">
              {product ? 'Edit Product' : 'Add New Product'}
            </h3>
            <button onClick={onClose} className="text-neutral-400 hover:text-neutral-600">
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Product Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter product name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Price ($)
              </label>
              <input
                type="number"
                required
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="0.00"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select category</option>
                <option value="Cooking Oils">Cooking Oils</option>
                <option value="Sweeteners">Sweeteners</option>
                <option value="Grains">Grains</option>
                <option value="Seeds">Seeds</option>
                <option value="Superfoods">Superfoods</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Stock Quantity
              </label>
              <input
                type="number"
                required
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter product description"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as 'active' | 'out-of-stock' | 'draft' })}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="active">Active</option>
                <option value="out-of-stock">Out of Stock</option>
                <option value="draft">Draft</option>
              </select>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                {product ? 'Update' : 'Create'} Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}