import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Updatecoffee from "./components/Updatecoffee.jsx";
import ShowCoffee from "./ShowCoffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/showCoffee",
    element: <ShowCoffee></ShowCoffee>,
    loader: () => fetch("http://localhost:5000/coffee"),
  },
  {
    path: "/updatecoffee/:id",
    element: <Updatecoffee></Updatecoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
