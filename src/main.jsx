import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

// pages
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
//import Signup from "./pages/Signup.jsx";
import AuthLayout from "./components/Auth/AuthLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element:(
          <AuthLayout authentication={true}>
             {" "}
            <Home/>
          </AuthLayout>
          
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Login/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);