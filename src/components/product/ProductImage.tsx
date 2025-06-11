interface ProductImageProps {
  image: string;
  name: string;
  isNew?: boolean;
}

const ProductImage = ({ image, name, isNew }: ProductImageProps) => {
  return (
    <div className="relative aspect-w-1 aspect-h-1 w-full">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      {isNew && (
        <span className="absolute top-2 right-2 bg-primary text-white px-2 py-1 text-xs font-semibold rounded">
          New
        </span>
      )}
    </div>
  );
};

export default ProductImage; 