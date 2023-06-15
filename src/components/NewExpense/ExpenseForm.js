import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(""); // Initial value of the input element will always be a string event input type is amount or something
  const [enteredDate, setEnteredDate] = useState(""); // That's why empty string is used for initialization in useState("")

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });
  const [isClicked, setIsClicked] = useState(false);
  
  const titleChangeHandler = (event) => {
    // Here event is a default object created when onChange is called. Browser gives us this.
    setEnteredTitle(event.target.value); // Out of many propertis of event value is a property
    console.log(event.target.value);
    //Alternative way 1
    // setUserInput({
    //   ...userInput,//...userInput this takes out all the elements in the array
    //   enteredTitle : event.target.value,// After that only enteredTitle is modified and added back
    // });

    //Alternative way 2: prevState approach
    // setUserInput((prevState) =>{ // in prevSate approach we are sure that we get the latest state updates.
    //   return {...prevState, enteredTitle : event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value); // The value of the input element will always be a string event input type is amount or something
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      //expenseData is an object with 3 properties
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);// Here we are executing a function residing in NewExpense(parent component) through props and passing
    setEnteredTitle('');// the  object expenseData which will be taken as a parameter in saveExpenseDataHandler residing in NewExpense
    setEnteredAmount('');
    setEnteredDate('');// These will clear the form when Add Expense button is pressed

    setIsClicked(false);
  };

  const addNewExpensesHandler = (event) => {
    setIsClicked(true);
  };
  const cancelHandler = (event) => {
    setIsClicked(false);
  };
  return (
    <div>
        {isClicked === true && <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} // What is this value doing? Ans: This value will be displayed in Title field once we enter a new Title
            onChange={titleChangeHandler}//onChange is a property of input tag which will listen to user input
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value = {enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value = {enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button onClick = {cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>}
    { isClicked === false && <button onClick = {addNewExpensesHandler}>Add New Expenses</button>}
    
    </div>
  );
};
// <input type = "text"/>: This is a self closing tag
export default ExpenseForm;
