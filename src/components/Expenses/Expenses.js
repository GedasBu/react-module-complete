import React, { useState } from "react";
import ExpnseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [FilteredYear, setFilteredYear] = useState("2020");

  const filteredYearHandler = (data) => {
    setFilteredYear(data);
  };
  return (
    <div>
      
      <Card className="expenses">
        <ExpensesFilter selected ={FilteredYear} onfilteredYear={filteredYearHandler} />
        <ExpnseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpnseItem>
        <ExpnseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpnseItem>
        <ExpnseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpnseItem>
      </Card>
    </div>
  );
};

export default Expenses;
