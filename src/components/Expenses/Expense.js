import React, { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

function Expense(props) {

  const [selectedYear, setSelectedYear] = useState("2021");
  
  const filteredList = props.expense.filter((item) => item.date.getFullYear().toString() === selectedYear)

  const onYearSelect = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={selectedYear}
          onYearSelect={onYearSelect}
        />
        <ExpenseChart expense = {filteredList} />
        <ExpensesList expense = {filteredList}/>
      </Card>
    </div>
  );
}

export default Expense;
