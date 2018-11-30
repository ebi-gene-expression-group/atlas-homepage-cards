import React from 'react'
import PropTypes from 'prop-types'
import latestExperimentCardPropTypes from '../cards/latestExperimentCardPropTypes'

import LatestExperimentCard from '../cards/LatestExperimentCard'
import URI from 'urijs'

const SceaHomePageLatestExperimentContainer = ({cards, host}) =>
  <div className={`row small-up-2 medium-up-3`}>
    {
      Array.isArray(cards) &&
      cards.map((card, idx) =>
        <LatestExperimentCard key={idx} host={host} {...card}/>
      )
    }
  </div>  

SceaHomePageLatestExperimentContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(latestExperimentCardPropTypes)).isReq
}

export default SceaHomePageLatestExperimentContainer