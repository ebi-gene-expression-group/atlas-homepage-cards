import React from 'react'
import ReactDOM from 'react-dom'

import ResponsiveCardsRow, { ExtendableCard } from '../src/index'
import withFetchLoader from 'atlas-react-fetch-loader'

const FetchLoadResponsiveCardsRow = withFetchLoader(ResponsiveCardsRow)

const slideSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const render = (options, target) => {
  ReactDOM.render(
    <FetchLoadResponsiveCardsRow
      CardClass={ExtendableCard}
      slideSettings={slideSettings}
      {...options}
    />,
    document.getElementById(target))
}

export { render }
