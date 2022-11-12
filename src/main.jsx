import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { Root } from "./routes/root";
import { ErrorPage } from "./pages/error-page";
import { Home } from "./pages/home";
import { Sounds } from "./pages/sounds";
import { Timers } from "./pages/timers";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "sounds",
        element: <Sounds />,
      },
      {
        path: "timers",
        element: <Timers />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);