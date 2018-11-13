import React from 'react'
import PropTypes from 'prop-types'
import EbiSpeciesIcon from 'react-ebi-species'

import cardPropTypes from './CardPropTypes'

const SpeciesCard = ({iconSrc, description, content}) =>
  <div className={`column column-block text-center combo card`} style={{marginBottom:0, paddingBottom: `25px`}}>
    {
      description && description.url ?
        <a className={`species-icon`} style={{fontSize: `600%`, borderBottom: 0}} href={description.url}>
          <EbiSpeciesIcon species={iconSrc}/>
        </a> :
        <span className={`species-icon`} style={{fontSize: `600%`}}>
          <EbiSpeciesIcon species={iconSrc}/>
        </span>
    }

    {
      description &&
      <h5 className={`species-name`}>
        {
          description.url ?
            <a className={`species-url`} href={description.url}>{description.text}</a> :
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
