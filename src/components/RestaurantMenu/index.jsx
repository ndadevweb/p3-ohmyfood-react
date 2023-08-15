import PropTypes from 'prop-types'
import Cards from './Cards'

export default function RestaurantMenu({ name, items, loading, dishesChoosen, dishAdd }) {

  return (
    <section className="restaurant__menu__list">
      <h3>{name}</h3>

      <Cards items={items} loading={loading} dishesChoosen={dishesChoosen} dishAdd={dishAdd} />
    </section>
  )
}

RestaurantMenu.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  dishesChoosen: PropTypes.func.isRequired,
  dishAdd: PropTypes.func.isRequired
}