import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./src/components/AppLayout";
import About from "./src/components/About";
import Error from "./src/components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const App = () => (
  <div>
    <AppLayout />
  </div>
);

const appRoute = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path:"/about",
    element: <About />
  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
