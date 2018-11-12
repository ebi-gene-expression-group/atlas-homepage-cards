import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme from 'enzyme'
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import EbiSpeciesIcon from 'react-ebi-species'
import ImageSpeciesCard from '../src/ImageSpeciesCard.js'

Enzyme.configure({ adapter: new Adapter() })

describe(`ImageSpeciesCard`, () => {
  test(`with no data matches snapshot`, () => {
    const tree = renderer.create(<ImageSpeciesCard iconSrc={``}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })


  test(`does not render optional empty content`, () => {
    const wrapper = shallow(<ImageSpeciesCard iconSrc={``} />)

    expect(wrapper.find(EbiSpeciesIcon).exists()).toBe(true)
    expect(wrapper.find(`.species-name`).exists()).toBe(false)
    expect(wrapper.find(`.content`).exists()).toBe(false)
  })

  test(`does not render non-existent descriptions`, () => {
    const content = [
      {
        text: `120 experiments`
      },
      {
        text: `1 baseline experiment`
      },
      {
        text: `119 differential experiments`
      }
    ]
    const speciesName = `Mus musculus`

    const wrapper = shallow(<ImageSpeciesCard iconSrc={speciesName} content={content} description={speciesName}/>)
    expect(wrapper.find(`.species-name`).exists()).toBe(false)

    const contentWrapper = wrapper.find(`.content`)
    expect(contentWrapper.exists()).toBe(true)
    expect(contentWrapper.find(`#text`)).toHaveLength(3)
    expect(contentWrapper.find(`#url`).exists()).toBe(false)
  })

  test(`renders URLs`, () => {
    const content = [
      {
        text: `120 experiments`,
        url: `http://example.com/experiments`
      }
    ]

    const wrapper = shallow(<ImageSpeciesCard iconSrc={``} content={content}/>)
    const urlsWrapper = wrapper.find(`.content #url`)

    expect(urlsWrapper).toHaveLength(1)
  })

  test(`displays upto five experiments be default`, () => {
    const content = [
      {
        text: `1 experiments`
      },
      {
        text: `2 baseline experiment`
      },
      {
        text: `3 differential experiments`
      },
      {
        text: `4 differential experiments`
      },
      {
        text: `5 differential experiments`
      },
      {
        text: `6 differential experiments`
      }
    ]
    const speciesName = `Mus musculus`

    const wrapper = shallow(<ImageSpeciesCard iconSrc={speciesName} content={content} description={speciesName}/>)
    expect(wrapper.find(`#text`)).toHaveLength(5)
    wrapper.setState({ showResults: true })
    wrapper.update()
    expect(wrapper.find(`#text`)).toHaveLength(content.length)


  })
})