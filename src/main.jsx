import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages:
import Home from "./pages/Home";
import Product from "./pages/Product";
import CategoryPage from "./pages/CategoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:id_company",
        element: <Home />,
      },
      {
        path: "/ProductPage/:id_product",
        element: <Product />,
      },
      {
        path: "/CategoryPage/:id_category",
        element: <CategoryPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
