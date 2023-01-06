import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import CountryPage from "./routes/CountryPage";
import MainPage, { loader as countriesLoader } from "./routes/MainPage";
import ScrollToTop from "./helpers/ScrollToTop";
import ErrorPage from "./routes/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: countriesLoader,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/country/:name",
        element: <CountryPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ScrollToTop />
    </RouterProvider>
  </React.StrictMode>
);
