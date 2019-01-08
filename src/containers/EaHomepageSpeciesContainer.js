import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import cardPropTypes from '../cards/cardPropTypes'
import AtlasSpeciesCard from '../cards/AtlasSpeciesCard'

const CardContainer = styled.div`
  border-radius: 8px;
  :hover {
    background: AliceBlue;
  }
`

const EaHomepageSpeciesContainer = ({cards}) =>
  <div className={`row small-up-2 medium-up-6`}>
    {
      Array.isArray(cards) &&
      cards.map((card, index) =>
        <CardContainer className={`column column-block`} key={index}>
          <AtlasSpeciesCard {...card} />
        </CardContainer>
      )
    }
  </div>

EaHomepageSpeciesContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(cardPropTypes)).isRequired
}

export default EaHomepageSpeciesContainer
