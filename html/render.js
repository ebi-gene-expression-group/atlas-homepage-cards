import React from 'react'
import ReactDOM from 'react-dom'

import AnimalSpeciesSummary from './AnimalSpeciesSummary'
import { FlexibleGridExtendableCardContainer } from '../src/index'
import withFetchLoader from 'atlas-react-fetch-loader'

import SpeciesCard from '../src/cards/SpeciesCard'
import ExtendableCard from '../src/cards/ExtendableCard'

const FetchLoadAnimalSpeciesSummary = withFetchLoader(AnimalSpeciesSummary)
const FetchLoadFlexibleGridExtendableCardContainer = withFetchLoader(FlexibleGridExtendableCardContainer)

const renderSixColumnsSpeciesCardContainer = (options, target) => {
  ReactDOM.render(<FetchLoadAnimalSpeciesSummary {...options} />, document.getElementById(target))
}

const renderFlexibleGridExtendableCardContainer = (options, target) => {
  ReactDOM.render(<FetchLoadFlexibleGridExtendableCardContainer {...options} />, document.getElementById(target))
}

const renderSpeciesCard = (options, target) => {
  ReactDOM.render(<SpeciesCard {...options} />, document.getElementById(target))
}

const renderExtendableCard = (options, target) => {
  ReactDOM.render(<ExtendableCard {...options} />, document.getElementById(target))
}

export {
  renderSpeciesCard, renderExtendableCard,
  renderSixColumnsSpeciesCardContainer, renderFlexibleGridExtendableCardContainer
}
