import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

  const [showForm, setShowForm] = useState(false);

  const buttonHandler = () => {
    setShowForm((prevValue) => !prevValue);
  }

  const onSaveExpenseDataHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id:Math.random().toString()
    };
    props.onAddExpense(expenseData);
    buttonHandler();
  };

  return (
    <div className="new-expense">
      {
        showForm 
          ? <ExpenseForm 
              onCancelForm={buttonHandler} 
              onSaveExpenseData={onSaveExpenseDataHandler} />
          : <button onClick={buttonHandler}>Add New Expense</button>
      }
    </div>
  )
};

export default NewExpense;
