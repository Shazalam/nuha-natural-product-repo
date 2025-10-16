'use client';
import { useState, useEffect } from 'react';

interface NotificationProps {
  isVisible: boolean;
  product: {
    name: string;
    price: number;
    image: string;
  };
  onClose: () => void;
}

export default function AddToCartNotification({ isVisible, product, onClose }: NotificationProps) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        onClose();
      }, 4000);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!shouldRender) return null;

  return (
    <div className={`
      fixed top-4 right-4 z-50 max-w-sm w-full bg-white rounded-2xl shadow-2xl border border-neutral-200
      transform transition-all duration-300 ease-in-out
      ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
    `}>
      <div className="p-4">
        <div className="flex items-start space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-200 to-primary-400 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-lg">🌿</span>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-neutral-900 text-sm mb-1">
                  Added to Cart!
                </h4>
                <p className="text-neutral-600 text-sm truncate">
                  {product.name}
                </p>
                <p className="text-primary-600 font-bold text-sm">
                  ${product.price.toFixed(2)}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-neutral-600 transition-colors ml-2"
              >
                ✕
              </button>
            </div>
            
            <div className="flex items-center space-x-2 mt-3">
              <a
                href="/cart"
                className="flex-1 bg-primary-600 text-white text-center py-2 px-3 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
              >
                View Cart
              </a>
              <a
                href="/checkout"
                className="flex-1 border border-primary-600 text-primary-600 text-center py-2 px-3 rounded-lg text-sm font-medium hover:bg-primary-600 hover:text-white transition-colors"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full h-1 bg-neutral-200 rounded-b-2xl overflow-hidden">
        <div 
          className="h-full bg-primary-600 transition-all duration-4000 ease-linear"
          style={{ 
            width: isVisible ? '0%' : '100%',
            transition: isVisible ? 'width 4s linear' : 'none'
          }}
        />
      </div>
    </div>
  );
}