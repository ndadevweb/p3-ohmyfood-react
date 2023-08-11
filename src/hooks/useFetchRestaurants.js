import { useEffect, useState } from 'react'
import dataFromJSON from '../data/restaurants.json'

export default function useFetchRestaurants() {

  const TIMEOUT = 3000

  const [restaurants, setRestaurants] = useState([])

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState('')

  useEffect(() => {
    let componentMounted = true

    const fetchData = async () => {
      try {
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(dataFromJSON)
          }, TIMEOUT)
        })

        if(componentMounted === true) {
          setRestaurants(() => data.map(restaurant => {
            const { name, localization, slug, isNew, image, imageDescription, ...rest} = restaurant

            return { name, localization, slug, isNew, image, imageDescription }
          }))
        }
      } catch(error) {
        console.error('Unable to fetch restaurants data', error)

        setError(() => 'Unable to fetch restaurants data')
      } finally {
        setLoading(() => false)
      }
    }

    fetchData()

    return () => componentMounted = false
  }, [])

  return [restaurants, loading, error]
}