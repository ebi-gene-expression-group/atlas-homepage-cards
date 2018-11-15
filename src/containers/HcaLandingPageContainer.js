import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import withFetchLoader from './FetchLoader'
import cardPropTypes from '../cards/cardPropTypes'
import ExtendableCard from '../cards/ExtendableCard'

const CardContainer = styled.div`
  border-radius: 8px;
  :hover {
    background: AliceBlue;
  }
`

const HcaCardContainer = ({cards}) =>
  <div className={`row`}>
    {
      Array.isArray(cards) &&
      cards.map((card, index) =>
        <CardContainer className={`small-3 small-centered`} key={index}>
          <ExtendableCard {...card} />
        </CardContainer>
      )
    }
  </div>

HcaCardContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(cardPropTypes)).isRequired
}

export default HcaCardContainer
