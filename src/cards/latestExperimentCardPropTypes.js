import PropTypes from 'prop-types'

// See JSON schema in README.md
const latestExperimentCardPropTypes = {
  numberOfAssays: PropTypes.number,
  experimentAccession: PropTypes.string,
  lastUpdate: PropTypes.string,
  experimentDescription: PropTypes.string,
  species: PropTypes.string
}

export default latestExperimentCardPropTypes
