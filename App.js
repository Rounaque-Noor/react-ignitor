import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const parent = React.createElement(
  "div",
  { id: "parent" },[
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello World from Parcel React"),
    React.createElement("h2", { id: "heading2" }, "Hello"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "Hello"),
    React.createElement("h2", { id: "heading2" }, "Hello"),
  ])
]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
