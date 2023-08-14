import { Loader, Localization, ExploreRestaurants, Process, Restaurants } from '../../components'
import { useFetchRestaurants, useDocumentTitle } from '../../hooks'

export default function Home() {

  const [restaurants, loading] = useFetchRestaurants()

  useDocumentTitle('')

  return (
    <>
      <Loader loading={loading} />
      <Localization />
      <ExploreRestaurants />
      <Process />
      <Restaurants items={restaurants} loading={loading} />
    </>
  )
}