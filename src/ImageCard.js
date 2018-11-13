import React from 'react'
import PropTypes from 'prop-types'

class ImageCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showResults: false
    }
    this.onClick = this.onClick.bind(this)
  }
 
  onClick(){
    this.setState({
      showResults: !this.state.showResults
    })
  }

  render(){
    let {iconSrc, iconDescription, content} = this.props
    return (
      <div className={`column column-block text-center combo card`} style={{marginBottom:0, paddingBottom: `25px`}}>
        {
          iconDescription && <h5 className="species-name">{iconDescription}</h5>
        }

        <span className={`species-icon`} style={{fontSize: `800%`}}>
          <img className={`icon`} alt={iconDescription} src={iconSrc}/>
        </span>

        {
          content &&
            <ul className={`content`} style={{listStyle:`none`, paddingLeft:`0`, marginLeft:`0`}}>
              {
                content.map((item, idx) => { 
                  return(
                    idx < 5 || (idx >= 5 && this.state.showResults) ?
                      item.url ?
                      <li className={`url`} style={{marginBottom: `0.3rem`}} key={item.text}><a href={item.url} key={item.text}>{item.text}</a></li> :
                      <li className={`text`} style={{marginBottom: `0.3rem`}} key={item.text}>{item.text}</li>
                    :             
                    null
                  )
                })
              }
              {
                content.length >= 5 ?
                    this.state.showResults ?
                    <button className="button small hide_button" onClick={this.onClick}> Hide…</button>
                    :
                    <button className="button small show_button" onClick={this.onClick}> See more…</button>
                  : 
                 null
              }
            </ul>
        }
      </div>
    )
  }
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