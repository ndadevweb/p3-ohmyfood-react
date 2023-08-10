import PropTypes from 'prop-types'

export default function Card({ item }) {

  return (
    <article className={`card-check card--animate delay-${item.delay}`} >
      <div className="card-check__descriptions">
        <h4>{item.name}</h4>
        <p>{item.details}</p>
      </div>

      <span className="card-check__price">{item.price}</span>

      <div className="card-check__checked">
        <i className="fa-solid fa-circle-check"></i>
      </div>
    </article >
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired
}