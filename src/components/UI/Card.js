//This is a wrapper component
import "./Card.css";
function Card(props) {
  const classes = "card " + props.className; // A white space is required in "card<white_space>"
  return <div className={classes}>{props.children}</div>; 
}
// here Card tag is a custom component built by me so it doesn't support className directly so we did: const classes = "card" + props.className;
//props.children helps to create wrapper component
export default Card;
