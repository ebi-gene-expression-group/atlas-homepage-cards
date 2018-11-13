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

    const visibleContent = content && content.map((item) => {
      return item.url ?
        <li className={`url`} style={{marginBottom: `0.3rem`}} key={item.text}><a href={item.url} key={item.text}>{item.text}</a></li> :
        <li className={`text`} style={{marginBottom: `0.3rem`}} key={item.text}>{item.text}</li>
    })


    return (
      <div className={`column column-block text-center combo card`} style={{marginBottom:0, paddingBottom: `25px`}}>
        {
          iconDescription && <h5 className={`image-description`}>{iconDescription}</h5>
        }

        <span className={`image-icon`} style={{fontSize: `800%`}}>
          <img style={{width: `128px`}} alt={iconDescription} src={iconSrc}/>
        </span>
        {
          content &&
            <ul className={`content`} style={{listStyle: `none`, paddingLeft: `0`, marginLeft: `0`}}>
              <div>
              {
                this.state.isHidden ?
                  visibleContent.slice(0, MAX) :
                  visibleContent
              }
              {
                content.length > MAX &&
                <button className={`button small`} onClick={this.onClick}>{this.state.isHidden ? `Show all` : `Show less`}</button>
              }
              </div>
            </ul>
        }
      </div>
    )
  }
}

ImageCard.propTypes = cardPropTypes

export default ImageCard