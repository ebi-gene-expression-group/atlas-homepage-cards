import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import EbiSpeciesIcon from 'react-ebi-species'

import { batmanFilmsSpeciesCardProps, findingNemoSpeciesCardProps } from './TestUtils'
import AtlasSpeciesCard from '../src/cards/AtlasSpeciesCard'

Enzyme.configure({ adapter: new Adapter() })

describe(`AtlasSpeciesCard`, () => {
  test.each([ [batmanFilmsSpeciesCardProps.description.text, batmanFilmsSpeciesCardProps],
              [findingNemoSpeciesCardProps.description.text, findingNemoSpeciesCardProps] ])(
    `matches snapshot: %s`, (titleText, props) => {
    const tree = renderer.create(<AtlasSpeciesCard {...props}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`does not render optional empty title and content`, () => {
    const wrapper = shallow(<AtlasSpeciesCard iconType={`species`} iconSrc={``} />)

    expect(wrapper.find(EbiSpeciesIcon).exists()).toBe(true)
    expect(wrapper.find(`h5`).exists()).toBe(false)
    expect(wrapper.find(`li`).exists()).toBe(false)
    expect(wrapper.find(`ul`).exists()).toBe(false)
  })

  test(`renders different experiment types with url`, () => {
    const props = batmanFilmsSpeciesCardProps
    props.description.url = `#`

    const wrapper = shallow(<AtlasSpeciesCard {...props}/>)

    expect(wrapper.find(`.baseline`)).toHaveLength(2)
    expect(wrapper.find(`.differential`)).toHaveLength(2)
  })
})
