import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme from 'enzyme'
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ImageCard from '../src/ImageCard.js'

Enzyme.configure({ adapter: new Adapter() })

describe(`ImageCard`, () => {
  test(`with no data matches snapshot`, () => {
    const tree = renderer.create(<ImageCard iconSrc={``}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })


  test(`does not render non-existent URLs`, () => {
    const wrapper = shallow(<ImageCard iconSrc={``}/>)

    expect(wrapper.find(`#icon`).exists()).toBe(true)
    expect(wrapper.find(`.species-name`).exists()).toBe(false)
    expect(wrapper.find(`.content`).exists()).toBe(false)
  })

  test(`does not render non-existent URLs`, () => {
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

    const wrapper = shallow(<ImageCard iconSrc={speciesName} content={content} description={speciesName}/>)
    expect(wrapper.find(`.species-name`).exists()).toBe(true)
    expect(wrapper.find(`.species-name`).text()).toBe(speciesName)

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

    const wrapper = shallow(<ImageCard iconSrc={``} content={content}/>)
    const urlsWrapper = wrapper.find(`.content #url`)

    expect(urlsWrapper).toHaveLength(1)
  })
})