import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'


const Comp = () => <div>Test</div>

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<Comp />)
  })
})
