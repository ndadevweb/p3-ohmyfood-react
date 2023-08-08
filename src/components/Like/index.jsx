import PropTypes from 'prop-types'
import { Icons } from '../'

export default function Like({ isLike }) {

  return (
    <button type="button" className="btn-like">
      <Icons name="heart" active={isLike === true} />
    </button>
  )
}

Like.propTypes = {
  isLike: PropTypes.bool.isRequired
}