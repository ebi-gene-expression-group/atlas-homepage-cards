import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import cardPropTypes from './modelPropTypes'
import Card from './Card'
import Slide from 'react-slick'

const CarousleCardsRow = (props) => {
  const { CardClass, cards, slideSettings } = props
  const { className, cardContainerClassName, speciesIconHeight, imageIconHeight, hoverColour } = props
  slideSettings.slidesToShow = slideSettings.slidesToShow >= cards.length ? cards.length : slideSettings.slidesToShow

  const CardContainer = styled.div`
    /* border-radius: 8px; */
    :hover {
      background: ${hoverColour};
    }
  `
  const cardsDisplay = Array.isArray(cards) && cards.map((card, index) =>
    <CardContainer className={cardContainerClassName} key={index}>
      <CardClass
        {...card}
        imageIconHeight={imageIconHeight}
        speciesIconHeight={speciesIconHeight}/>
    </CardContainer>)

  return (
    <div className={className}>
      {
        <Slide id={`slide`} 
          {...slideSettings}>
          {cardsDisplay}
        </Slide>
      }
    </div>
  )
}

CarousleCardsRow.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(cardPropTypes)).isRequired,
  CardClass: PropTypes.func,
  className: PropTypes.string,
  cardContainerClassName: PropTypes.string,
  speciesIconHeight: PropTypes.string,
  imageIconHeight: PropTypes.string,
  hoverColour: PropTypes.string,
  slideSettings: PropTypes.object
}

CarousleCardsRow.defaultProps = {
  CardClass: Card,
  className: ``,
  cardContainerClassName: ``,
  speciesIconHeight: `6rem`,
  imageIconHeight: `2rem`,
  hoverColour: `AliceBlue`,
  slideSettings: {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  }
}

export default CarousleCardsRow
