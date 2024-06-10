import App from "./App";
import Shop from "./routes/shop";
import NewElectronics from "./routes/electronics";
import NewJewelery from "./routes/jewelery";
import NewMensClothing from "./routes/mensclothing";
import ErrorPage from "./error-page";
import NewWomensClothing from "./routes/womensclothing";
import ProductDetail from "./routes/products";
import Cart from "./routes/cart";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/electronics",
    element: <NewElectronics />,
  },
  {
    path: "/jewelery",
    element: <NewJewelery />,
  },
  {
    path: "/menclothing",
    element: <NewMensClothing />,
  },
  {
    path: "/womenclothing",
    element: <NewWomensClothing />,
  },
  {
    path: "/products/:id",
    element: <ProductDetail />,
  },
  {
    path: "/cart",
    element: <Cart />,
  }
];

export default routes;
