import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

const ExpenseList = (props) => {
  if(props.items.length === 0) {
    return <h1 className="expenses-list__fallback">Found no expenses.</h1>
  }

  return (
    <ul className="expenses-list">
      {
        props.items.map((item) => (
          <ExpenseItem 
            title={item.title}
            amount={item.amount} 
            key={item.id}
            date={item.date}
          />
        ))
      }
    </ul>
  )
}

export default ExpenseList;
