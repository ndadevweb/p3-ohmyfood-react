import PropTypes from 'prop-types'
import { useStoreContext } from '../../../../hooks/useStoreContext'
import { Link } from 'react-router-dom'
import { Badges, Like } from '../../../'

export default function Card({ item }) {

  const { isLiked, handleLike } = useStoreContext()

  const imagePath = `assets/images/restaurants/${item.image}`

  const handleClick = (event) => {
    const isIcon = !!event.target?.closest('svg')?.dataset?.icon ?? false

    if (isIcon === true) {
      event.preventDefault()
    }
  }

  return (
    <Link to={item.slug} className="card card__fade-in" onClick={handleClick}>
      <img src={imagePath} alt={item.imageDescription} className="card__image" />

      {item.isNew === true && <Badges name="new" />}

      <div className="card__details">
        <div className="card__descriptions">
          <h4 className="card__heading">{item.name}</h4>
          <p className="card__information">{item.localization}</p>
        </div>

        <Like isLike={isLiked(item.id) === true} handleClick={() => handleLike(item.id)} />
      </div>
    </Link>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired
}