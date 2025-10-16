import { animations } from '@/app/lib/constants';
import Image from 'next/image';


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  stock: number;
  tags: string[];
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden shadow-lg ${animations.cardHover} group`}
    >
      <div className="relative overflow-hidden">
        <div className="w-full h-48 bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center relative">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            loading={index < 4 ? "eager" : "lazy"}
            priority={index < 4}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        {/* Product badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.isNew && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              NEW
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              BEST SELLER
            </span>
          )}
        </div>
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-primary-600 font-semibold bg-primary-50 px-2 py-1 rounded">
            {product.category}
          </span>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">⭐</span>
            <span className="text-sm text-neutral-600">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-neutral-900 mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-primary-600">
            ${product.price}
          </span>
          <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-all duration-300 font-semibold transform hover:scale-105 active:scale-95">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}