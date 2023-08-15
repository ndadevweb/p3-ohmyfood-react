import PropTypes from 'prop-types'

export default function Card({ item, dishesChoosen, dishAdd }) {

  return (
    <article className={`card-check card--animate delay-${item.delay}`} onClick={() => dishAdd(item.name)}>
      <div className="card-check__descriptions">
        <h4>{item.name}</h4>
        <p>{item.details}</p>
      </div>

      <span className="card-check__price">{item.price}</span>

      <div
        className={`${dishesChoosen.includes(item.name) ? 'card-check__checked card-check__checked--active' : 'card-check__checked'}`}
      >
        <i className="fa-solid fa-circle-check"></i>
      </div>
    </article>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
  dishesChoosen: PropTypes.func.isRequired,
  dishAdd: PropTypes.func.isRequired
}