import SHOP_DATA from "../../shop-data";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div>
      <p>This is categories component</p>
      {SHOP_DATA.map((category) => {
        return (
          <div key={category.title}>
            <Link to={category.title}>{category.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
