import PropTypes from 'prop-types'
import Card from './Card'
import CardPlaceholder from './CardPlaceholder'

export default function Cards({ items, loading }) {

  return (
    <>
      {
        loading === true ? (
          <>{Array(4).fill().map((_, index) => <CardPlaceholder key={index} />)}</>
        ) : (
          <>{items.map((item, index) => <Card item={item} key={index} />)}</>
        )
      }
    </>
  )
}

Cards.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}