import Card from '../UI/Card';
import styles from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = props => {
  const mealsList = props.meals.map(meal => {
    return ( 
      <MealItem 
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price} 
      />
    )
  });

  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  )
}

export default AvailableMeals;
