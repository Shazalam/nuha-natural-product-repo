import { animations } from '@/app/lib/constants';
import Link from 'next/link';

interface Category {
  name: string;
  icon: string;
  description: string;
  count: string;
  gradient: string;
}

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/products?category=${category.name.toLowerCase().replace(' ', '-')}`}
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

      <div className="relative z-10">
        <div className={`text-5xl mb-6 ${animations.hoverScale}`}>
          {category.icon}
        </div>
        <h3 className="text-xl font-bold text-neutral-900 mb-3">
          {category.name}
        </h3>
        <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
          {category.description}
        </p>
        <div className="text-primary-600 font-semibold text-lg">
          {category.count}
        </div>
      </div>
    </Link>
  );
}