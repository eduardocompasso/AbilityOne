import { Link } from 'react-router-dom';
import { TitleBar } from './TitleBar';
import type { Category } from '../types';

interface FeaturedProductsSectionProps {
  categories: Category[];
}

export const FeaturedProductsSection = ({ categories }: FeaturedProductsSectionProps) => (
  <section className="py-16 bg-white" aria-label='Featured Products'>
    <div className="container mx-auto px-4">
      <TitleBar
        title="Featured Products"
        buttonText="View All Featured Products"
        buttonHref="#"
        ariaLabel="View all featured products"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/categories/${category.id}`}
            className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
); 