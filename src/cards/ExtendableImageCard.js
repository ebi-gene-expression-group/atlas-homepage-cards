import React from 'react'
import PropTypes from 'prop-types'

import cardPropTypes from './CardPropTypes'

const MAX = 5

class ImageCard extends React.Component {
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

    const visibleContent = content && content.map((item, index) => {
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

        <img alt={iconDescription} src={iconSrc}/>

        <ul style={{listStyle: `none`}}>
        {
          this.state.isHidden ?
            visibleContent.slice(0, MAX) :
            visibleContent
        }
        </ul>
        {
          Array.isArray(content) && content.length > MAX &&
          <button className={`button`}  onClick={this.onClick}>{this.state.isHidden ? `Show all` : `Show less`}</button>
        }
      </div>
    )
  }
}

ImageCard.propTypes = cardPropTypes

export default ImageCard
