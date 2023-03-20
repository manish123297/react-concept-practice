import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/navbar/navbar.route";
import Home from "./routes/home/home.route";
import Shop from "./routes/shop/shop.route";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar></Navbar>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
