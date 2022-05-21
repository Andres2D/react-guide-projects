import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import './Expenses.css';

const Expenses = ({expenses}) => {
  const [year, setYear] = useState('2020');

  const updateYear = (year) => {
    setYear(year);
  }

  const filteredExpenses = expenses.filter(ex => ex.date.getFullYear() === +year);

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter year={year} onChangeYear={updateYear} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </li>
  )
}

export default Expenses;
