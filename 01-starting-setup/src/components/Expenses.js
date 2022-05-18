import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses({expenses}) {
  const items = expenses.map((item) => (
    <ExpenseItem 
      title={item.title}
      amount={item.amount} 
      key={item.id}
      date={item.date}
    />
  ));

  return (
    <div className="expenses">{items}</div>
  )
}

export default Expenses;
