import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <div style={{ backgroundColor: "blue" }}>
        <Link
          to="/"
          style={{
            marginLeft: "50px",
            textDecoration: "none",
            fontWeight: "bold",
            color: "white",
          }}
        >
          HOME
        </Link>
        <Link
          to="/shop"
          style={{
            marginLeft: "50px",
            textDecoration: "none",
            fontWeight: "bold",
            color: "white",
          }}
        >
          SHOP
        </Link>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navbar;
