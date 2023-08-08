import PropTypes from 'prop-types'
import Card from './Card'

export default function Cards({ items }) {

  return (
    <>
      {items.map((item, index) => <Card item={item} key={index} />)}
    </>
  )
}

Cards.propTypes = {
  items: PropTypes.array.isRequired
}