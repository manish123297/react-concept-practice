const ProductCard = ({ product }) => {
  return (
    <div key={product.id}>
      <h1>{product.name}</h1>
      <span>{product.price}</span>
    </div>
  );
};

export default ProductCard;
