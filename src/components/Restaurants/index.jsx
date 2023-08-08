import PropTypes from 'prop-types'
import Cards from './Cards'

export default function Restaurants({ items }) {

  return (
    <section id="restaurants" className="container restaurants">
      <h2 className="restaurants__heading">Restaurant</h2>

      <div className="restaurants__cards">
        <Cards items={items} />
      </div>
    </section>
  )
}

Restaurants.propTypes = {
  items: PropTypes.array.isRequired
}