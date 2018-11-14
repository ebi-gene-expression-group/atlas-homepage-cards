import React from 'react'
import PropTypes from 'prop-types'
import EbiSpeciesIcon from 'react-ebi-species'

import cardPropTypes from './CardPropTypes'

const SpeciesCard = ({iconSrc, description, content}) =>
  <div style={{marginBottom:0, paddingBottom: `25px`, textAlign: `center`}}>
    {
      description && description.url ?
        <a style={{fontSize: `600%`, borderBottom: 0}} href={description.url}>
          <EbiSpeciesIcon species={iconSrc}/>
        </a> :
        <span style={{fontSize: `600%`}}>
          <EbiSpeciesIcon species={iconSrc}/>
        </span>
    }

    {
      description &&
      <h5>
      {
        description.url ?
          <a href={description.url}>{description.text}</a> :
          description.text
      }
      </h5>
    }

    {
      content &&
      <span className={`content`}>
        {
          content.map((item) =>
            item.url ?
              <p className={`url`} style={{marginBottom: `5px`}} key={item.text}>
                <a href={item.url}>{item.text}</a>
              </p> :
              <p className={`text`} style={{marginBottom: `5px`}} key={item.text}>{item.text}</p>
          )
        }
      </span>
    }
  </div>

SpeciesCard.propTypes = cardPropTypes

export default SpeciesCard
