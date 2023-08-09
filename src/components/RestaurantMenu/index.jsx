import PropTypes from 'prop-types'
import Cards from './Cards'

export default function RestaurantMenu({ name, items }) {

  return (
    <section className="restaurant__menu__list">
      <h3>{name}</h3>

      <Cards items={items} />
    </section>
  )
}

RestaurantMenu.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}