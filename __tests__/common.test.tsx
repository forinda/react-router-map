import * as React from 'react'
import { render } from '@testing-library/react'
import { MapRouter } from '../src'
import 'jest-canvas-mock'

const Comp = () => <div>Test</div>

describe('Common render', () => {
  it('renders without crashing', () => {
    <MapRouter routes={[]} enableTopScroll={false} browserRouter={false} />
    render(<Comp />)
  })
})
