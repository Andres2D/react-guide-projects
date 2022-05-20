import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [form, setForm] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleChangeHandler = (ev) => {
    setForm((prevState) => {
      return {...prevState, enteredTitle: ev.target.value};
    });
  }
  
  const amountChangeHandler = (ev) => {
    setForm((prevState) => {
      return {...prevState, enteredAmount: ev.target.value};
    });
  }
  
  const dateChangeHandler = (ev) => {
    setForm((prevState) => {
      return {...prevState, enteredDate: ev.target.value};
    });
  }

  const sumbitHandler = (ev) => {
    ev.preventDefault();
    setForm({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
    });
    props.onSaveExpenseData(form);
  }

  return (
    <form onSubmit={sumbitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text" 
            value={form.enteredTitle}
            onChange={titleChangeHandler} /> 
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input 
            type="number" 
            min="0.01" 
            step="0.01"
            value={form.enteredAmount}
            onChange={amountChangeHandler} /> 
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input 
            type="date" 
            min="2019-01-01" 
            max="2022-12-31"
            value={form.enteredDate}
            onChange={dateChangeHandler} /> 
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>  
      </div>
    </form>
  )
}

export default ExpenseForm;
