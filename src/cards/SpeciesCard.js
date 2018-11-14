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
      Array.isArray(content) &&
      <ul style={{listStyle: `none`}}>
        {
          content.map((item, index) => {
            const key = `${item.text}-${index}`

            return item.url ?
              <li style={{marginBottom: `0.3rem`}} key={key}>
                <a href={item.url}>{item.text}</a>
              </li> :
              <li style={{marginBottom: `0.3rem`}} key={key}>{item.text}</li>
            }
          )
        }
      </ul>
    }
  </div>

SpeciesCard.propTypes = cardPropTypes

export default SpeciesCard
