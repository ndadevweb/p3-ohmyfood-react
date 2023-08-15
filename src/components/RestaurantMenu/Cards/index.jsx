import PropTypes from 'prop-types'
import Card from './Card'
import CardPlaceholder from './CardPlaceholder'

export default function Cards({ items, loading, dishesChoosen, dishAdd }) {

  const numberSlot = 3

  return (
    <>
      {
        loading === true ? (
          <>{Array(numberSlot).fill().map((_, index) => <CardPlaceholder key={index} />)}</>
        ) : (
          <>{items.map((item, index) => <Card item={item} key={index} dishesChoosen={dishesChoosen} dishAdd={dishAdd} />)}</>
        )
      }
    </>
  )
}

Cards.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  dishesChoosen: PropTypes.func.isRequired,
  dishAdd: PropTypes.func.isRequired
}