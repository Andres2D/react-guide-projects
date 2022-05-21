import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = ({expenses}) => {
  const [year, setYear] = useState('2020');

  const updateYear = (year) => {
    setYear(year);
  }

  const filteredExpenses = expenses.filter(ex => ex.date.getFullYear() === +year); 

  const items = filteredExpenses.map((item) => (
    <ExpenseItem 
      title={item.title}
      amount={item.amount} 
      key={item.id}
      date={item.date}
    />
  ));

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter year={year} onChangeYear={updateYear} />
        {
          filteredExpenses.length === 0 
            ? <p>Not expenses found.</p>
            : items    
        }
      </Card>
    </div>
  )
}

export default Expenses;
