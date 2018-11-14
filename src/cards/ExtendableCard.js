import React from 'react'
import PropTypes from 'prop-types'
import EbiSpeciesIcon from 'react-ebi-species'

import renderContentListItems from './renderContentListItems'
import cardPropTypes from './cardPropTypes'

const MAX = 5

class ExtendableSpeciesCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isHidden: this.props.content && this.props.content.length >= MAX
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    const { iconType, iconSrc, iconDescription, content } = this.props
    const visibleContent = Array.isArray(content) && renderContentListItems(content)

    return (
      <div style={{marginBottom:0, paddingBottom: `2rem`, textAlign: `center`}}>
        {
          iconDescription &&
          <h5>{iconDescription}</h5>
        }

        {
          iconType === `species` ?
            <span style={{fontSize: `8rem`}}><EbiSpeciesIcon species={iconSrc} /></span> :
          iconType === `image` ?  // Margin picked by trial and error to match EbiSpeciesIcon of size 8rem
            <img alt={iconDescription} src={iconSrc} style={{height: `8rem`, marginBottom: `2.35rem`, marginTop: `2.50rem`}}/> :
          // iconType unknown
            null
        }

        <ul className={`content`} style={{listStyle: `none`}}>
        {
          this.state.isHidden ?
            visibleContent.slice(0, MAX) :
            visibleContent
        }
        </ul>
        {
          Array.isArray(content) && content.length > MAX &&
          <button className={`button`} onClick={this.onClick}>{this.state.isHidden ? `Show all` : `Show less`}</button>
        }
      </div>
    )
  }
}

ExtendableSpeciesCard.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  iconDescription: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string
  }))
}

export default ExtendableSpeciesCard
