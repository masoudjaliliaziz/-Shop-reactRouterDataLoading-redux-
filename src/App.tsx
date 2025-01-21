import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <h1>home</h1> },
      { path: "/cart", element: <h1>cart</h1> },
      { path: "/order/:orderId", element: <h1>orderId</h1> },
      { path: "/checkout/:orderId", element: <h1>checkout</h1> },
      { path: "/whishlist", element: <h1>whishlist</h1> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
