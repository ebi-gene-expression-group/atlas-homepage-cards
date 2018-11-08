import React from 'react'
import PropTypes from 'prop-types'

const ImageCard = ({iconSrc, iconDescription, content}) => {
  return (
    <div className={`column column-block text-center combo card`} style={{marginBottom:0, paddingBottom: `25px`}}>
      {
        iconDescription && <h5 className="species-name">{iconDescription}</h5>
      }

      <span className={`species-icon`} style={{fontSize: `800%`}}>
        <img id={`icon`} alt={iconDescription} src={iconSrc}/>
      </span>

      {
        content &&
          <span className="content">
            {
              content.map((item) =>
                item.url ?
                  <p id={`url`} style={{marginBottom: `0.3rem`}} key={item.text}><a href={item.url} key={item.text}>{item.text}</a></p> :
                  <p id={`text`} style={{marginBottom: `0.3rem`}} key={item.text}>{item.text}</p>
              )
            }
          </span>
      }
    </div>
  )
}

ImageCard.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  iconDescription: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string
  }))
}

export default ImageCard
