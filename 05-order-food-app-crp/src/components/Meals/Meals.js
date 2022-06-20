import { useCallback, useEffect, useState } from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import useRequest from '../../hooks/use-request';

const Meals = () => {
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

  return (
    <>
      <MealsSummary />
      { !isLoading && meals.length > 0 && <AvailableMeals meals={meals} />}
      { isLoading && <p>Loading ...</p>}
    </>
  )
}

export default Meals;
