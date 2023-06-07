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
const parent = React.createElement(
  "div",
  {id: "parent"},
  React.createElement(
    "div",
    {id: "child"},
    [React.createElement("h1" , {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]
  ));
const header = React.createElement(
  "h1",
  { id: "heading"},
  'Hello world from React!');

  console.log(parent, typeof(header));

const root = ReactDOM.createRoot(document.getElementById('root'))
// The render method is taking the object header and converts it into <h1> tag
root.render(parent)