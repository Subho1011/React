import React from 'react';
import ReactDOM from 'react-dom/client';

// Heading is just an object and not an <h1> Tag
// Props of an object are attributes + children


/**
 * 
 * 
 * <div id = "parent">
 *    <div id = "child">
 *      <h1>I am h1 tag</h1>
 *      <h2>I am h2 tag</h2>
 *    </div>
 * </div>
 * 
 * 
 * 
 * 
 * 
 */
// 
// React Element
const headingElement = React.createElement("h1",{ className :"heading"}, "Hello World using creatElement!");
// JSX Element
const heading = <h1>Hello World using JSX</h1>;

// Functional Component
//1. Using return
const HeadingComponent1 = () => {
  return <h1 className = "heading"> Hello World using functional component using return</h1>
};
//2. without using return
const HeadingComponent2 = () => (
  <h1 className = "heading"> Hello World using functional component using return</h1>
);

//Compoenet Composition
const HeadingComponent3 = () => {
  return (<div id = "container">
    <HeadingComponent1/>
    <HeadingComponent2/>
    <h1 className = "heading">This is componenet composition. Putting compoenets inside compoenet</h1>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(<HeadingComponent3/>);