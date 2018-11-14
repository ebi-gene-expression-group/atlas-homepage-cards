import React from 'react'
import ReactDOM from 'react-dom'

import SceaHomepageSpeciesContainer from '../src/containers/SceaHomepageSpeciesContainer'
import HcaLandingPageContainer from '../src/containers/HcaLandingPageContainer'

import SpeciesCard from '../src/cards/SpeciesCard'
import ExtendableCard from '../src/cards/ExtendableCard'

const renderSceaHomepageSpeciesContainer = (options, target) => {
  ReactDOM.render(<SceaHomepageSpeciesContainer {...options} />, document.getElementById(target))
}

const renderHcaLandingPageContainer = (options, target) => {
  ReactDOM.render(<HcaLandingPageContainer {...options} />, document.getElementById(target))
}

const renderSpeciesCard = (options, target) => {
  ReactDOM.render(<SpeciesCard {...options} />, document.getElementById(target))
}

const renderExtendableCard = (options, target) => {
  ReactDOM.render(<ExtendableCard {...options} />, document.getElementById(target))
}

export { renderSceaHomepageSpeciesContainer, renderSpeciesCard, renderExtendableCard, renderHcaLandingPageContainer }
