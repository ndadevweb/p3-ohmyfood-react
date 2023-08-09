import { useParams } from 'react-router'
import { Like, RestaurantMenu } from '../../components'

// dev
import dataFromJSON from '../../data/restaurants.json'

export default function Restaurant() {

  // dev
  const isLike = false
  let { slug } = useParams()

  const item = dataFromJSON.filter(data => data.slug === slug)?.pop()
  const imagePath = `assets/images/restaurants/${item.image}`

  const menuTitle = {
    starter: 'ENTRÉES',
    dish: 'PLATS',
    sweet: 'DÉSSERTS'
  }

  return (
    <div className="restaurant">
      <img src={imagePath} alt="" className="restaurant__image" />
      <div className="container restaurant__menu">
        <h2>
          À la française
          <Like isLike={isLike} />
        </h2>

        <RestaurantMenu name={menuTitle.starter} items={item.menu.starter} />
        <RestaurantMenu name={menuTitle.dish} items={item.menu.meal} />
        <RestaurantMenu name={menuTitle.sweet} items={item.menu.sweet} />

        <button type="submit" className="btn btn--classic btn--p50 btn--center">Commander</button>
      </div>
    </div>
  )
}