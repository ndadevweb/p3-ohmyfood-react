import PropTypes from 'prop-types'
import Cards from './Cards'

export default function Restaurants({ items, loading }) {

  return (
    <section id="restaurants" className="container restaurants">
      <h2 className="restaurants__heading">Restaurant</h2>

      <div className="restaurants__cards">
        <Cards items={items} loading={loading} />
      </div>
    </section>
  )
}

Restaurants.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}