import React from 'react'
import ReactDOM from 'react-dom'

import CardContainer from '../src/index'
import SpeciesCard from '../src/cards/SpeciesCard'
import ExtendableSpeciesCard from '../src/cards/ExtendableSpeciesCard'
import ExtendableImageCard from '../src/cards/ExtendableImageCard'

const render = (options, target) => {
  ReactDOM.render(<CardContainer {...options} />, document.getElementById(target))
}

const renderSpeciesCard = (options, target) => {
  ReactDOM.render(<SpeciesCard {...options} />, document.getElementById(target))
}

const renderExtendableSpeciesCard = (options, target) => {
  ReactDOM.render(<ExtendableSpeciesCard {...options} />, document.getElementById(target))
}

const renderExtendableImageCard = (options, target) => {
  ReactDOM.render(<ExtendableImageCard {...options} />, document.getElementById(target))
}

export { render, renderSpeciesCard, renderExtendableSpeciesCard, renderExtendableImageCard }
