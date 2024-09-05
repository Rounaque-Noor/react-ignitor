import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import About from "./src/components/About";
import Body from "./src/components/Body";
import Error from "./src/components/Error";
import Header from "./src/components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";

const Grocery = lazy(() => import("./src/components/Grocery"));

const App = () => (
  <div>
    <div className="main-div">
            <div className="header">
                <Header />
            </div>
            <div className="body">
                <Outlet />
            </div>
        </div>
  </div>
);

const appRoute = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Body />
      },
      {
        path:"/about",
        element: <About />
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
      },
      {
        path:"/restaurant/:id",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
