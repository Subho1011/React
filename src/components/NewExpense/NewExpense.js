import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm"
const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) =>{// This function is taking expenseData object from
    const expenseData = {                                // ExpenseForm component and adding a property 'id' 
      ...enteredExpenseData,  
      id : Math.random().toString(),
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
    // The name onSaveExpenseData could have been anything
    // The value of onSaveExpenseData will be a function which will be triggered inside of ExpenseForm component
  );
};

export default NewExpense;
