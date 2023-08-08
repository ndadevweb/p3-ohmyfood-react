import { Loader, Localization, ExploreRestaurants, Process, Restaurants } from '../../components'

// dev
import dataFromJSON from '../../data/restaurants.json'

export default function Home() {

  const restaurants = dataFromJSON.map(restaurant => {
    return {
      name: restaurant.name,
      localization: restaurant.localization,
      slug: restaurant.slug,
      isNew: restaurant.isNew,
      image: restaurant.image,
      imageDescription: restaurant.imageDescription
    }
  })

  return (
    <>
      <Loader />
      <Localization />
      <ExploreRestaurants />
      <Process />
      <Restaurants items={restaurants} />
    </>
  )
}