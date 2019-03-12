import React from 'react'
import PropTypes from 'prop-types'

import { SixColumnsSpeciesCardContainer } from '../src/index'

const AnimalSpeciesSummary = ({speciesSummary}) =>
  <SixColumnsSpeciesCardContainer {...speciesSummary[0]}/>

AnimalSpeciesSummary.propTypes = {
  speciesSummary: PropTypes.array
}

export default AnimalSpeciesSummary
