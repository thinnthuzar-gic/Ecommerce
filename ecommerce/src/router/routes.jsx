import MainLayout from "../components/MainLayout";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product-detail/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
