import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = ({title, date, amount}) => {

  let newTitle = title;

  const clickHandler = () => {
    console.log('Clicked!?!?!?');
    newTitle = 'Test';
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{newTitle}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  )
}

export default ExpenseItem;
