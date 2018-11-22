import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import cardPropTypes from '../cards/cardPropTypes'
import ExtendableCard from '../cards/ExtendableCard'

const partitionArray = (arr, lengthOfPartition) => {
  const result = []
  let thisPartitionElements = []
  for (let i = 0; i < arr.length; i++) {
    if (lengthOfPartition - thisPartitionElements.length === 0) {
      result.push(thisPartitionElements)
      thisPartitionElements = []
    }
    thisPartitionElements.push(arr[i])
  }

  // If there is an incomplete row left...
  if (thisPartitionElements.length !== 0) {
    result.push(thisPartitionElements)
  }

  return result
}

const HcaLandingPageCardContainer = ({cards}) => {
  const columnsPerRow = 12  // A Foundation thing
  const columnsPerCard = 6  // Our thing, 6 columns per card (i.e. 2 cards per row)

  const cardsSplitByRow = partitionArray(cards, columnsPerRow / columnsPerCard)

  return (
    <div className={`row`}>
      {
        cardsSplitByRow.map((rowCards, rowIndex) =>
          <div className={`columns small-${rowCards.length * columnsPerCard} small-centered`} key={rowIndex}>
            <div className={`row`}>
            {
              rowCards.map((card, index) =>
                <div className={`small-${columnsPerRow / rowCards.length} columns`} key={`${rowIndex}-${index}`}>
                  <ExtendableCard {...card} />
                </div>
              )
            }
            </div>
          </div>
        )
      }
    </div>
  )
}

HcaLandingPageCardContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(cardPropTypes)).isRequired
}

export default HcaLandingPageCardContainer
