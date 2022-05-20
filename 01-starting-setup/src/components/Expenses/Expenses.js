import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = ({expenses}) => {

  const [year, setYear] = useState('');

  const updateYear = (year) => {
    setYear(year);
  }

  const items = expenses.map((item) => (
    <ExpenseItem 
      title={item.title}
      amount={item.amount} 
      key={item.id}
      date={item.date}
    />
  ));

  return (
    <div>
      {year}
      <ExpensesFilter onChangeYear={updateYear} />
      <Card className="expenses">{items}</Card>
    </div>
  )
}

export default Expenses;
