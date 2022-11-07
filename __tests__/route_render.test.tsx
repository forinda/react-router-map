import * as React from 'react'
import { render } from '@testing-library/react'
import { MapRouter } from '../src/index'
import 'jest-canvas-mock'

const Comp = () => <div>Test</div>
const Child = () => <div>Child</div>

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<Comp />)
  })
})

describe('Render routes', () => {
  it('renders without crashing', () => {
    render(
      <MapRouter
        routes={[
          {
            Component: <Comp />,
            hasChildren: false,
            nestedComponents: [],
            pathName: 'test',
            urlPath: '/test',
          },
        ]}
        enableTopScroll={false}
        browserRouter={false}
      />,
    )
  })
})

// render with children and nested components
describe('Render routes with nesting', () => {
  it('renders without crashing', () => {
    render(
      <MapRouter
        routes={[
          {
            Component: <Comp />,
            hasChildren: true,
            nestedComponents: [
              {
                Component: <Child />,
                hasChildren: false,
                nestedComponents: [],
                pathName: 'test',
                urlPath: '/test',
              },
            ],
            pathName: 'test',
            urlPath: '/',
          },
        ]}
        enableTopScroll={false}
        browserRouter={false}
      />,
    )
  })
})
