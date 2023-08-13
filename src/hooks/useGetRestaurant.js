import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import dataFromJSON from '../data/restaurants.json'

export default function useGetRestaurant({slug}) {

  const TIMEOUT = 3000

  const [restaurant, setRestaurant] = useState([])

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState('')

  useEffect(() => {
    let componentMounted = true

    const fetchData = async () => {
      try {
        const restaurantBySlug = await new Promise((resolve, rejected) => {
          setTimeout(() => {
            const dataFromJSONFiltered = dataFromJSON.filter(data => data.slug === slug)?.pop() || {}

            if((Object.keys(dataFromJSONFiltered)?.[0] ?? null) === null) {
              rejected('Not found')
            } else {
              resolve(dataFromJSONFiltered)
            }
          }, TIMEOUT)
        })

        if(componentMounted === true) {
          setRestaurant(() => restaurantBySlug)
        }
      } catch(error) {
        console.error('Unable to get restaurant data', error)

        setError(() => 'Unable to get restaurant data')
      } finally {
        setLoading(() => false)
      }
    }

    fetchData()

    return () => componentMounted = false
  }, [slug])

  return [restaurant, loading, error]
}

useGetRestaurant.propTypes = {
  slug: PropTypes.string.isRequired
}