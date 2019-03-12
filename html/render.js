import React from 'react'
import ReactDOM from 'react-dom'

import { SceaHomepageSpeciesContainer, HcaLandingPageContainer } from '../src/index'
import withFetchLoader from 'atlas-react-fetch-loader'

import SpeciesCard from '../src/cards/SpeciesCard'
import ExtendableCard from '../src/cards/ExtendableCard'

const FetchLoadSceaHomepageSpeciesContainer = withFetchLoader(SceaHomepageSpeciesContainer)
const FetchLoadHcaLandingPageContainer = withFetchLoader(HcaLandingPageContainer)

const renderSceaHomepageSpeciesContainer = (options, target) => {
  ReactDOM.render(<FetchLoadSceaHomepageSpeciesContainer {...options} />, document.getElementById(target))
}

const renderHcaLandingPageContainer = (options, target) => {
  ReactDOM.render(<FetchLoadHcaLandingPageContainer {...options} />, document.getElementById(target))
}

const renderSpeciesCard = (options, target) => {
  ReactDOM.render(<SpeciesCard {...options} />, document.getElementById(target))
}

const renderExtendableCard = (options, target) => {
  ReactDOM.render(<ExtendableCard {...options} />, document.getElementById(target))
}

export { renderSceaHomepageSpeciesContainer, renderSpeciesCard, renderExtendableCard, renderHcaLandingPageContainer }
