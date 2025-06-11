interface ProductInfoProps {
  name: string;
  price: number;
  description: string;
}

const ProductInfo = ({ name, price, description }: ProductInfoProps) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-medium text-gray-900 hover:text-primary transition-colors">
        {name}
      </h3>
      <p className="mt-1 text-sm text-gray-500 line-clamp-2">
        {description}
      </p>
      <div className="mt-2">
        <span className="text-lg font-semibold text-primary">
          ${price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ProductInfo; 