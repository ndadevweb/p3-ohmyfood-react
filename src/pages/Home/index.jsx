import { Loader, Localization, ExploreRestaurants, Process, Restaurants } from '../../components'
import useFetchRestaurants from '../../hooks/useFetchRestaurants'

export default function Home() {

  const [restaurants, loading] = useFetchRestaurants()

  return (
    <>
      <Loader loading={loading} />
      <Localization />
      <ExploreRestaurants />
      <Process />
      <Restaurants items={restaurants} />
    </>
  )
}