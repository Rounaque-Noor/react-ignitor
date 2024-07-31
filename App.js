import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// const parent = React.createElement(
//   "div",
//   { id: "parent" },[
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "heading" }, "Hello World from Parcel React"),
//     React.createElement("h2", { id: "heading2" }, "Hello"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", { id: "heading" }, "Hello"),
//     React.createElement("h2", { id: "heading2" }, "Hello"),
//   ])
// ]
// );

//React Element
const jsxHeading = <h1 id="head" className="heading">Hello React JSX</h1>;

//Also we can use component inside element and vice versa

//React Component
const Heading2 = () => <h3>Hello Nested "Component Composition" .</h3>;

//Component Composition (nested)
const HeadingComponent = () => (
  <div>
    <Heading2 />
    {/* we can use react element inside as it is a JS variable  */}
    {jsxHeading} 
    <h1>Hello React from React Component</h1>
    {/* we can call this way also because it's just a fn in JS */}
    {Heading2()}
  </div>
);

// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
