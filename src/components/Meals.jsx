import { useState, useEffect } from 'react'
import MealItem from './MealItem'
export default function Meals() {
  const [LoadedMeals, setLoadedMeals] = useState([])

  useEffect(() => {
    async function fetchMeals() {
      const res = await fetch('http://localhost:3000/meals')
      if (!res.ok) {
        // do something
      }
      const meals = await res.json()
      setLoadedMeals(meals)
    }
    fetchMeals()
  }, [])

  return (
    <ul id="meals">
      {LoadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  )
}
// create a meals card which contains an image, title, description, and price and lastly, details button.
// that details button will lead to the meal details page.
// which contains the meal image, title, description, price, button to add to cart and a back button to go back to the meals page.
