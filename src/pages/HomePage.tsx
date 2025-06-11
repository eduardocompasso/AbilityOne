import { useState, useEffect } from 'react';
import type { Product, Category } from '../types';
import { api } from '../mocks/api';
import { HeroSection } from '../components/HeroSection';
import { TopSellersSection } from '../components/TopSellersSection';
import { FeaturedProductsSection } from '../components/FeaturedProductsSection';
import { BrandsSection } from '../components/BrandsSection';

export const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [brands, setBrands] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [products, categoriesData, brandsData] = await Promise.all([
          api.getProducts(),
          api.getCategories(),
          api.getBrands(),
        ]);
        setFeaturedProducts(products.slice(0, 4)); // Show only 4 featured products
        setCategories(categoriesData);
        setBrands(brandsData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch data');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSection />
      <TopSellersSection products={featuredProducts} />
      <FeaturedProductsSection categories={categories} />
      <BrandsSection brands={brands} />
    </div>
  );
}; 