import { useCallback, useEffect, useState } from 'react';
import useRequest from '../../hooks/use-request';
import Card from '../UI/Card';
import styles from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = props => {

  const [meals, setMeals] = useState([]);

  const getMeals = useCallback((meals) => {
    if(!meals) {
      return;
    }
    setMeals(Object.values(meals));
  }, []);

  const {sendRequest: fetchMeals, isLoading, error} = useRequest();
  useEffect(() => {
    fetchMeals(
      {
        url: 'https://react-http-22e9d-default-rtdb.firebaseio.com/meals.json'
      }, getMeals);
  }, [fetchMeals, getMeals]);

  if(isLoading) {
    return (
      <section className={styles.mealsLoading}>
        Loading...
      </section>
    )
  }

  if(error) {
    return (
      <section className={styles.mealsError}>
        <p>{error}</p>
      </section>
    )
  }

  const mealsList = meals.map(meal => {
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
        {meals.length > 0 && !error &&
          <ul>
            {mealsList}
          </ul>
        }
      </Card>
    </section>
  )
}

export default AvailableMeals;
