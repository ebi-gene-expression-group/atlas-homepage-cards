import React from 'react'
import EbiSpeciesIcon from 'react-ebi-species'
import styled from 'styled-components'
import cardPropTypes from './cardPropTypes'

const ClearLink = styled.a`
  border-bottom: none;
  
  :hover {
    border-bottom: none;
  }
`

const SpeciesCard = ({iconSrc, description, content}) =>
  <div style={{marginBottom:0, paddingBottom: `2rem`, textAlign: `center`}}>
    {
      description && description.url ?
        <a style={{fontSize: `6rem`, borderBottom: 0}} href={description.url}>
          <EbiSpeciesIcon species={iconSrc}/>
        </a> :
        <span style={{fontSize: `6rem`}}>
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
      <p className={`experiments`}>{content[0].text} <br/>

        <ClearLink href={content[1].url} className={`baseline`}>
            <span
                data-tooltip
                style={{cursor: `unset`, fontWeight: `bold`}}
                className={`baseline tiny button-rd`} title={`Baseline experiments`}>Baseline</span>
          {content[1].text}
        </ClearLink>
        <ClearLink
            href={content[2].url}
            className={`differential padding-left-medium`}>
              <span
                  data-tooltip
                  style={{cursor: `unset`, fontWeight: `bold`}}
                  className={`differential tiny button-rd`}
                  title={`Differential experiments`}>Differential</span>
          {content[2].text}
        </ClearLink>
      </p>
    }
  </div>

SpeciesCard.propTypes = cardPropTypes

export default SpeciesCard
