import React from 'react'
import { render } from '@vtex/test-tools/react'

import Container from '../../Container'

describe('<Container /> component', () => {
  const renderComponent = customProps => {
    const comp = <Container {...customProps}> Test </Container>

    return render(comp)
  }

  it('should be rendered', () => {
    const { asFragment } = renderComponent()

    expect(asFragment()).toBeTruthy()
  })

  it('should match snapshot', () => {
    const { asFragment } = renderComponent()

    expect(asFragment()).toMatchSnapshot()
  })
})
