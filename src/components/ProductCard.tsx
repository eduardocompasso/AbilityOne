import { Link } from 'react-router-dom';
import type { Product } from '../types';
import ProductImage from './product/ProductImage';
import ProductInfo from './product/ProductInfo';
import ProductActions from './product/ProductActions';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`} className="block">
        <ProductImage 
          image={product.image} 
          name={product.name} 
          isNew={product.isNew} 
        />
        <ProductInfo 
          name={product.name}
          price={product.price}
          description={product.description}
        />
      </Link>
      <ProductActions 
        product={product}
        onAddToCart={onAddToCart}
      />
    </div>
  );
}; 