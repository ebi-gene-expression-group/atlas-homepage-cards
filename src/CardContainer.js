import React from 'react'
import PropTypes from 'prop-types'
import SpeciesCard from './SpeciesCard'
import URI from 'urijs'

class CardContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
      loading: true,
      error: null
    }
  }

  async componentDidMount() {
    this.setState({ loading: true })

    const url = URI(this.props.resource, this.props.host).toString()
    const response = await fetch(url)

    try {
      if (!response.ok) {
        throw new Error(`${url} => ${response.status}`)
      }

      this.setState({
        data: await response.json(),
        loading: false,
        error: null
      })
    } catch(e) {
      this.setState({
        data: null,
        loading: false,
        error: {
          description: `There was a problem communicating with the server. Please try again later.`,
          name: e.name,
          message: e.message
        }
      })
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      error: {
        description: `There was a problem rendering this component.`,
        name: error.name,
        message: `${error.message} – ${info}`
      }
    })
  }

  render() {
    const { data, loading } = this.state

    return (
      loading ?
        <p> Loading, please wait...</p> :
        data && data.length > 0 ?
          <div id="by-species">
            <div className="row small-up-2 medium-up-3">
              {data.map((species) =>
                <SpeciesCard
                  species={species.iconSrc}
                  description={species.iconDescription}
                  content={species.content}
                  key={species.iconSrc}
                />
              )}
            </div>
          </div> :
          <p> There are no species.</p>
    )
  }
}

CardContainer.propTypes = {
  host: PropTypes.string,
  resource: PropTypes.string
}

export default CardContainer
