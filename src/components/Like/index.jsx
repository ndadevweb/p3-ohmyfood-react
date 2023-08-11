import PropTypes from 'prop-types'
import { Icons } from '../'

export default function Like({ isLike, handleClick }) {

  return (
    <button type="button" className="btn-like" onClick={() => handleClick()}>
      <Icons name="heart" active={isLike === true} />
    </button>
  )
}

Like.propTypes = {
  isLike: PropTypes.bool.isRequired,
  handleClick: PropTypes.func
}