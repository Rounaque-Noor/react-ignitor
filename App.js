import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./src/components/AppLayout";


const App = () => (
  <div>
    <AppLayout />
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
