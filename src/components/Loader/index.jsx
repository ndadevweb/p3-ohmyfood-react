import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'

export default function Loader({ loading }) {

  const ref = useRef('')

  useEffect(() => {
    document.getAnimations().forEach((animation) => {
      if (loading === false && animation.effect.target.className === 'spinner') {
        ref.current.classList.add('spinner--fade-out')
      }
    })
  }, [loading])

  return (
    <div ref={ref} className="spinner">
      <div className="spinner__circle1">
        <div className="spinner__circle2">
          <div className="spinner__circle3"></div>
        </div>
      </div>
    </div>
  )
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired
}