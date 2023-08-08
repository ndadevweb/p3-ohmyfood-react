import PropTypes from 'prop-types'

export default function Badges({ name }) {

  switch (name) {
    case 'new':
      return <span className="badge badge--green badge--top-right">Nouveau</span>

    default:
      return ''
  }
}

Badges.propTypes = {
  name: PropTypes.string.isRequired
}