import { useParams } from "react-router-dom";
import SHOP_DATA from "../../shop-data";
import { useState, useEffect } from "react";
import ProductCard from "../product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  //   console.log(category);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // to get the particular products array like Hats Array or Sneakers Array
    SHOP_DATA.map((product) => {
      //   console.log(title);
      if (product.title === category) {
        setProducts(product.items);
      }
    });
  }, []);

  return (
    <div>
      <p>This is the {category} Component</p>
      {products.map((product) => {
        return <ProductCard product={product} key={product.id}></ProductCard>;
      })}
    </div>
  );
};

export default Category;
