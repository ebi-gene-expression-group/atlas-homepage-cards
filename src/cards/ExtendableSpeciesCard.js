import React from 'react'
import PropTypes from 'prop-types'
import EbiSpeciesIcon from 'react-ebi-species'

import cardPropTypes from './CardPropTypes'

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
    const {iconSrc, iconDescription, content} = this.props

    const visibleContent = Array.isArray(content) && content.map((item, index) => {
      const key = `${item.text}-${index}`

      return item.url ?
        <li style={{marginBottom: `0.3rem`}} key={key}>
          <a href={item.url}>{item.text}</a>
        </li> :
        <li style={{marginBottom: `0.3rem`}} key={key}>{item.text}</li>
    })

    return (
      <div style={{marginBottom:0, paddingBottom: `25px`, textAlign: `center`}}>
        {
          iconDescription &&
          <h5>{iconDescription}</h5>
        }

        <span style={{fontSize: `800%`}}>
          <EbiSpeciesIcon species={iconSrc} />
        </span>

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
