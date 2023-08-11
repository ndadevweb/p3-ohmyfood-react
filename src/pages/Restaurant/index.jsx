import { useStoreContext } from '../../hooks/useStoreContext'
import { useParams } from 'react-router'
import { Like, RestaurantMenu } from '../../components'

// dev
import dataFromJSON from '../../data/restaurants.json'

export default function Restaurant() {

  const { isLiked, handleLike } = useStoreContext()

  let { slug } = useParams()

  const item = dataFromJSON.filter(data => data.slug === slug)?.pop()

  const imagePath = `assets/images/restaurants/${item.image}`
  const menuTitle = {
    starter: 'ENTRÉES',
    meal: 'PLATS',
    sweet: 'DÉSSERTS'
  }

  const menuCategories = Object.keys(item.menu)

  /**
   * Add an increment for each item
   * This increment will be used to display
   * animation
   *
   * @returns {Object}
   */
  const menuWithItemMarked = () => {
    let itemCount = 1
    const newMenu = {}

    menuCategories.map(category => {
      newMenu[category] = item.menu[category]
      newMenu[category].map((_, index) => {
        newMenu[category][index].delay = itemCount
        itemCount++
      })
    })

    return newMenu
  }

  return (
    <div className="restaurant">
      <img src={imagePath} alt="" className="restaurant__image" />
      <form className="container restaurant__menu" onSubmit={(event) => event.preventDefault()}>
        <h2>
          {item.name}
          <Like isLike={isLiked(item.id) === true} handleClick={() => handleLike(item.id)} />
        </h2>

        {
          menuCategories.map((category, index) => {
            return (<RestaurantMenu name={menuTitle[category]} items={menuWithItemMarked()[category]} key={index} />)
          })
        }

        <button type="submit" className="btn btn--classic btn--p50 btn--center">Commander</button>
      </form>
    </div>
  )
}