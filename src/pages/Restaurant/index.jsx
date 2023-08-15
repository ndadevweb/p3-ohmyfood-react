import { useStoreContext } from '../../hooks/useStoreContext'
import { useParams } from 'react-router'
import { useState } from 'react'
import { useGetRestaurant, useDocumentTitle } from '../../hooks/'
import { Like, Loader, RestaurantMenu } from '../../components'
import { getImagePath } from '../../utils/helpers'

export default function Restaurant() {

  const { isLiked, handleLike } = useStoreContext()

  let { slug } = useParams()

  const [restaurant, loading] = useGetRestaurant({ slug })

  const [dishesChoosen, setDishChoosen] = useState([])

  useDocumentTitle(`Restaurant ${restaurant.name}`)

  const menuTitle = {
    starter: 'ENTRÉES',
    meal: 'PLATS',
    sweet: 'DÉSSERTS'
  }

  const menuCategories = Object.keys(menuTitle)

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
      newMenu[category] = restaurant.menu[category]
      newMenu[category].map((_, index) => {
        newMenu[category][index].delay = itemCount
        itemCount++
      })
    })

    return newMenu
  }

  const toggleDish = (dishName) => {
    console.log('page', dishName)
    if (dishesChoosen.includes(dishName) === true) {
      setDishChoosen((oldDishesChoosen) => oldDishesChoosen.filter(oldDish => oldDish !== dishName))
    } else {
      setDishChoosen((dishes) => [...dishes, dishName])
    }
  }

  return (
    <div className="restaurant">
      <Loader loading={loading} />
      {
        loading === true ? (
          <div className="restaurant__image"></div>
        ) : (
          <img src={getImagePath(restaurant.image)} alt="" className="restaurant__image" />
        )
      }

      <form className="container restaurant__menu" onSubmit={(event) => event.preventDefault()}>
        <h2 className="restaurant__menu__main__title">
          {loading === true ? (
            <span className="restaurant__menu__main__title__placeholder"></span>
          ) : (
            <>
              {restaurant.name}
              <Like isLike={isLiked(restaurant.id) === true} handleClick={() => handleLike(restaurant.id)} />
            </>
          )}
        </h2>

        <RestaurantMenu
          name={menuTitle['starter']} items={loading === false ? menuWithItemMarked()['starter'] : []}
          loading={loading}
          dishesChoosen={dishesChoosen}
          dishAdd={(dish) => toggleDish(dish)}
        />
        <RestaurantMenu
          name={menuTitle['meal']}
          items={loading === false ? menuWithItemMarked()['meal'] : []}
          loading={loading}
          dishesChoosen={dishesChoosen}
          dishAdd={(dish) => toggleDish(dish)}
        />
        <RestaurantMenu
          name={menuTitle['sweet']}
          items={loading === false ? menuWithItemMarked()['sweet'] : []}
          loading={loading}
          dishesChoosen={dishesChoosen}
          dishAdd={(dish) => toggleDish(dish)}
        />

        <button type="submit" className="btn btn--classic btn--p50 btn--center">Commander</button>
      </form>
    </div >
  )
}