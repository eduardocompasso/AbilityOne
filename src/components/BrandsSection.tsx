import { TitleBar } from './TitleBar';
import type { Category } from '../types';

interface BrandsSectionProps {
  brands: Category[];
}

export const BrandsSection = ({ brands }: BrandsSectionProps) => (
  <section className="py-12 bg-white" aria-label='Shop by Brand'>
    <div className="container mx-auto px-4">
      <TitleBar
        title="Shop By Brand"
        buttonText="View All Brands"
        buttonHref="#"
        ariaLabel="View all brands"
      />
      <hr className="my-4 border-gray-200" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 place-items-center">
        {brands.map((brand) => (
          <a
            key={brand.id}
            href={`/brands/${brand.id}`}
            aria-label={`View products from ${brand.name}`}
            className="block"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="max-h-20 max-w-32 object-contain mx-auto transition-transform duration-200 hover:scale-105"
            />
          </a>
        ))}
      </div>
    </div>
  </section>
); 