# react-dynamic-routing

To learn different concepts of react individually(Here React static and dynamic routing)
shop-data.js->has all the data that we have used

# static-route branch

This branch is used here to add the static route

# dynamic-route branch-main branch

1.This branch is using dynamic-routing
2.implementation:

- step 1(changes made here so that shop can have more routes like /shop/Hats or /shop/Sneakers)
  <Route path="/shop/\*" element={<Shop></Shop>}></Route> ->App.js

- step 2(These are the routes that we want to add after /shop/)
  <Routes>
  <Route index element={<Categories></Categories>}></Route>
  <Route path=":category" element={<Category></Category>}></Route>
  </Routes> -shop.route.jsx

- step 3(Here we have displayed the title of the product as well as the Link to go on particular product
  page like Hats or Sneakers page)->categories.component.jsx

  {SHOP_DATA.map((category) => {
  return (
  <div key={category.title}>
  <Link to={category.title}>{category.title}</Link>
  </div>
  );
  })}

- step 4 (category.component.jsx->In this component we found the items array from SHOP_DATA for the particular route (say for Hats or Sneakers)) then passed that array to the productCard.component.jsx
  to display individual product

-> const { category } = useParams();->used to get path from browser url as we can see in step 2 path=":category"

- step 5(productCard component is displaying the particular product from the product array)
