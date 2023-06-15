import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const onChangeYear = (selectedYear) => {
    // console.log(selectedYear.target.value);
    setFilteredYear(selectedYear.target.value);
  };
  const filteredExpenses = props.items.filter((expense) => {
    // using filter function on total expense and string a new array in filteredExpenses
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter value={filteredYear} onYearChange={onChangeYear} />
        <ExpensesChart ex={filteredExpenses}></ExpensesChart>
        {filteredExpenses.map((expenses) => (
          <ExpenseItem
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
