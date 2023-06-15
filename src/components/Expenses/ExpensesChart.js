import React from "react";

import Chart from "../Chart/Chart";
const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.ex) {
    const expenseMonth = expense.date.getMonth(); //This get mounth will return 0 for January and so
    // on upto 11 for December
    //console.log(expenseMonth);
    chartDataPoints[expenseMonth].value += expense.amount; // Here for January expenseMonth = 0
    // so chartDataPoints[0] will come which indiacates
    // 1st entry of chartDataPoints Array ie Jan wala entity
    //console.log(expenseMonth ,":", chartDataPoints[expenseMonth].value);
  }
  return <Chart dataPoints={chartDataPoints}></Chart>;
};

export default ExpensesChart;
