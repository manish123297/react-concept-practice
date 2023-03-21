import SHOP_DATA from "../../shop-data";
import { Routes, Route } from "react-router-dom";
import Categories from "../../components/categories/categories.component";
import Category from "../../components/category/category.component";
const Shop = () => {
  // console.log(SHOP_DATA);
  // format of shop Data is [{title:"hats",items:Array(9)},{title:"Sneakers",items:Array(9)},....]
  return (
    <div style={{ backgroundColor: "goldenrod", height: "700px" }}>
      <h3>This is the Shop page</h3>
      <Routes>
        <Route index element={<Categories></Categories>}></Route>
        <Route path=":category" element={<Category></Category>}></Route>
      </Routes>
    </div>
  );
};

export default Shop;
