import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Updatecoffee from "./components/Updatecoffee.jsx";
import ShowCoffee from "./ShowCoffee.jsx";
import AuthProvider from "./components/Provider/AuthProvider.jsx";
import Signup from "./components/Signin and Signup/Signup.jsx";
import User from "./components/user/User.jsx";
import SignIn from "./components/Signin and Signup/SignIn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/showCoffee",
    element: <ShowCoffee></ShowCoffee>,
    loader: () =>
      fetch(
        "https://coffee-store-server-nr133nwh6-sabithasan2098.vercel.app/coffee"
      ),
  },
  {
    path: "/updatecoffee/:id",
    element: <Updatecoffee></Updatecoffee>,
    loader: ({ params }) =>
      fetch(
        `https://coffee-store-server-nr133nwh6-sabithasan2098.vercel.app/coffee/${params.id}`
      ),
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/users",
    element: <User></User>,
    loader: () =>
      fetch(
        "https://coffee-store-server-nr133nwh6-sabithasan2098.vercel.app/users"
      ),
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
