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
    console.log(Object.values(meals));
    setMeals(Object.values(meals));
  }, []);

  const {sendRequest: fetchMeals, isLoading} = useRequest();

  useEffect(() => {
    fetchMeals(
      {
        url: 'https://react-http-22e9d-default-rtdb.firebaseio.com/meals.json'
      }, getMeals);
  }, [fetchMeals, getMeals]);

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
        {
          !isLoading && meals.length > 0 &&
          <ul>
            {mealsList}
          </ul>
        }
        { isLoading && <p>Loading ...</p>}
      </Card>
    </section>
  )
}

export default AvailableMeals;
