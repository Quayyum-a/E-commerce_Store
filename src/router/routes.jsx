import { createBrowserRouter } from "react-router";
import Login from "../auth/Login"
import Signup from "../auth/Signup"
import PageNotFound from "../pages/PageNotFund";
import CartPage from "../pages/CartPage";
import ProductDetails from "../pages/ProductDetails";
import AppLayout from "../pages/layout/AppLayout";
import Home from "../pages/Home"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cartpage", 
        element: <CartPage />,
      },
      {
        path: "productdetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
