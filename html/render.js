import React from 'react'
import ReactDOM from 'react-dom'

import CardContainer from '../src/index'
import SpeciesCard from '../src/cards/SpeciesCard'
import ExtendableCard from '../src/cards/ExtendableCard'

const render = (options, target) => {
  ReactDOM.render(<CardContainer {...options} />, document.getElementById(target))
}

const renderSpeciesCard = (options, target) => {
  ReactDOM.render(<SpeciesCard {...options} />, document.getElementById(target))
}

const renderExtendableCard = (options, target) => {
  ReactDOM.render(<ExtendableCard {...options} />, document.getElementById(target))
}

export { render, renderSpeciesCard, renderExtendableCard }
