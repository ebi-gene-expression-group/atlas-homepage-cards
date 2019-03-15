import { shallow, mount } from 'enzyme'
import EbiSpeciesIcon from 'react-ebi-species'

import { generateRandomInt } from './TestUtils'
import { aRickleInTimeImageCardProps, batmanFilmsSpeciesCardProps, findingNemoSpeciesCardProps } from './TestUtils'
import Card from '../src/Card'

describe(`Card`, () => {
  test(`can render image cards`, () => {
    expect(shallow(<Card {...aRickleInTimeImageCardProps}/>)).toContainExactlyOneMatchingElement(`img`)
  })

  test(`can render species icon cards`, () => {
    expect(shallow(<Card {...batmanFilmsSpeciesCardProps}/>)).toContainExactlyOneMatchingElement(EbiSpeciesIcon)
  })

  test(`does not render optional empty title and content`, () => {
    const wrapper = shallow(<Card iconType={`species`} iconSrc={``} />)

    expect(wrapper).toContainExactlyOneMatchingElement(EbiSpeciesIcon)
    expect(wrapper).not.toContainMatchingElement(`h5`)
    expect(wrapper).not.toContainMatchingElement(`li`)
    expect(wrapper).not.toContainMatchingElement(`ul`)
  })

  test(`does not render missing URLs`, () => {
    const props = findingNemoSpeciesCardProps
    const wrapper = shallow(<Card {...props} />)

    expect(wrapper).toContainExactlyOneMatchingElement(`h5`)
    expect(wrapper.find(`h5`)).toHaveText(props.description.text)
    expect(wrapper.find(`h5 a`).exists()).toBe(Boolean(props.description.url))

    const contentWrapper = wrapper.find(`ul`)

    expect(contentWrapper).toExist()
    expect(contentWrapper.find(`li`)).toHaveLength(props.content.length)
    expect(contentWrapper.find(`li a`).exists()).toBe(Boolean(props.content[0].url))
  })

  test(`renders URLs`, () => {
    const props = batmanFilmsSpeciesCardProps
    props.description.url = `#`

    const wrapper = shallow(<Card {...props}/>)

    expect(wrapper.find(`h5 a`)).toExist()
    expect(wrapper.find(`li a`)).toHaveLength(props.content.length)
  })

  test(`changes species icon size according to props`, () => {
    const props = batmanFilmsSpeciesCardProps
    const size = generateRandomInt(1, 10)
    const wrapper = shallow(<Card {...props} speciesIconHeight={`${size}rem`}/>)

    expect(wrapper.find(`span`)).toHaveStyle(`fontSize`, `${size}rem`)
  })

  test(`changes image icon size according to props`, () => {
    const props = aRickleInTimeImageCardProps
    const size = generateRandomInt(100, 400)
    const wrapper = shallow(<Card {...props} imageIconHeight={`${size}px`}/>)

    expect(wrapper.find(`img`)).toHaveStyle(`height`, `${size}px`)
  })

  test.each([
    [batmanFilmsSpeciesCardProps.description.text, batmanFilmsSpeciesCardProps],
    [findingNemoSpeciesCardProps.description.text, findingNemoSpeciesCardProps],
    [aRickleInTimeImageCardProps.description.text, aRickleInTimeImageCardProps]
  ])(`matches snapshot: %s`, (titleText, props) => {
    expect(mount(<Card {...props}/>)).toMatchSnapshot()
  })
})
