import React from 'react'
import PropTypes from 'prop-types'
import EbiSpeciesIcon from 'react-ebi-species'

const SpeciesCard = ({iconSrc, description, content}) => {
  return (
    <div className="column column-block text-center combo" style={{marginBottom:0, paddingBottom: `25px`}}>
      <span className="large-species-icon" style={{fontSize: `600%`}}>
        <EbiSpeciesIcon species={iconSrc}/>
      </span>

      <h5 className="species">{description}</h5>
      {
        content.map((item) =>
          item.url ?
            <p style={{marginBottom: `0.3rem`}} key={item.text}><a href={item.url} key={item.text}>{item.text}</a></p> :
            <p style={{marginBottom: `0.3rem`}} key={item.text}>{item.text}</p>
        )
      }
    </div>
  )
}

SpeciesCard.propTypes = {
  iconSrc: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string
  }))
}

export default SpeciesCard
