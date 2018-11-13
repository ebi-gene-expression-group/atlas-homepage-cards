import PropTypes from 'prop-types'

// See JSON schema in README.md
const cardPropTypes = {
  iconSrc: PropTypes.string.isRequired,
  description: PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string
  }),
  content: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string
  }))
}

export default cardPropTypes