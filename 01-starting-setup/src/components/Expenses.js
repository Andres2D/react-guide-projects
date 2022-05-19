import Card from "./Card";
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
    <Card className="expenses">{items}</Card>
  )
}

export default Expenses;
