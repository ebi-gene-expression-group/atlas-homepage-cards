import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import cardPropTypes from './modelPropTypes'
import Card from './Card'

const ResponsiveCardsRow = (props) => {
  const { CardClass, cards } = props
  const { speciesIconHeight, imageIconHeight, hoverColour, smallColumns, mediumColumns, largeColumns } = props

  const CardContainer = styled.div`
    /* border-radius: 8px; */
    :hover {
      background: ${hoverColour};
    }
  `

  return (
    <div className={`row small-up-${smallColumns} medium-up-${mediumColumns} large-up-${largeColumns}`}>
      {
        Array.isArray(cards) &&
        cards.map((card, index) =>
          <CardContainer className={`column column-block`} key={index}>
            <CardClass
              {...card}
              imageIconHeight={imageIconHeight}
              speciesIconHeight={speciesIconHeight}/>
          </CardContainer>
        )
      }
    </div>
  )
}

ResponsiveCardsRow.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(cardPropTypes)).isRequired,
  CardClass: PropTypes.func,
  speciesIconHeight: PropTypes.string,
  imageIconHeight: PropTypes.string,
  hoverColour: PropTypes.string,
  smallColumns: PropTypes.number,
  mediumColumns: PropTypes.number,
  largeColumns: PropTypes.number
}

ResponsiveCardsRow.defaultProps = {
  CardClass: Card,
  speciesIconHeight: `6rem`,
  imageIconHeight: `2rem`,
  hoverColour: `AliceBlue`,
  smallColumns: 2,
  mediumColumns: 4,
  largeColumns: 8
}

export default ResponsiveCardsRow
