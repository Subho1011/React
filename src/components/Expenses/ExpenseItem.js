import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}> </ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
// The Card tag is a custom component built by me so it doesn't support className directly
/*<button onClick={clickHandler}>Change Title</button>: In here we haven't used clickHandler()
 * because in that case clickHandler() will be called during compilation time and even before clicking
 * we will get output as: "Clicked!!!" 4 times
 */
export default ExpenseItem;
