import PropTypes from 'prop-types'
import { useStoreContext } from '../../../../hooks/useStoreContext'
import { useLoadImage } from '../../../../hooks'
import { Link } from 'react-router-dom'
import { Badges, Like } from '../../../'
import { getImagePath } from '../../../../utils/helpers'

export default function Card({ item }) {

  const imagePath = getImagePath(item.image)

  const { isLiked, handleLike } = useStoreContext()

  const [loadedImages, isLoadedImage] = useLoadImage(imagePath)

  const handleClick = (event) => {
    const isIcon = !!event.target?.closest('svg')?.dataset?.icon ?? false

    if (isIcon === true) {
      event.preventDefault()
    }
  }

  return (
    <Link to={item.slug} className="card card__fade-in" onClick={handleClick}>
      <img src={imagePath} alt={item.imageDescription} className={`card__image ${isLoadedImage(imagePath) && 'card__image__loaded'}`} />

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