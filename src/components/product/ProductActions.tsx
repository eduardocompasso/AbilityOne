import type { Product } from '../../types';

interface ProductActionsProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductActions = ({ product, onAddToCart }: ProductActionsProps) => {
  return (
    <div className="p-4 pt-0 flex justify-end">
      <button
        onClick={() => onAddToCart(product)}
        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-light transition-colors"
        aria-label={`Add ${product.name} to cart`}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductActions; 