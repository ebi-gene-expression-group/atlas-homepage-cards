import React from 'react'
import PropTypes from 'prop-types'
import EbiSpeciesIcon from 'react-ebi-species'

const SpeciesCard = ({species, description, content}) => {
  return (
    <div className="column column-block text-center combo">
      <span className="large-species-icon">
        <EbiSpeciesIcon species={species}/>
      </span>

      <h5 className="species">{description}</h5>
      {
        content.map((item) =>
          item.url ?
            <p><a href={item.url} key={item.text}>{item.text}</a></p> :
            <p>{item.text}</p>
        )
      }

    </div>
  )
}

SpeciesCard.propTypes = {
  species: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string
  }))
}

export default SpeciesCard
