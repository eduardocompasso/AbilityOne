import React from 'react';
import { useCart } from '../hooks/useCart';
import { ProductCard } from './ProductCard';
import { TitleBar } from './TitleBar';
import type { Product } from '../types';

interface TopSellersSectionProps {
  products: Product[];
}

export const TopSellersSection = ({ products }: TopSellersSectionProps) => {
  const { addToCart } = useCart();

  return (
    <section className="py-12" aria-label="Top Sellers">
      <div className="container mx-auto px-4">
        <TitleBar
          title="Top Sellers"
          buttonText="View All Top Sellers"
          buttonHref="#"
          ariaLabel="View all top sellers"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              onAddToCart={() => addToCart(product.id, 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 