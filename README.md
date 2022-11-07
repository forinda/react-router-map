# react-router-map

## How to use

Installation

```sh
# Pnpm
pnpm install react-router-map
# Npm
npm install react-router-map
#Yarn
yarn add react-router-map
```

To load it in your component ensure `react-router-dom` is installed

```jsx
import { MapRouter } from 'react-router-map'
import { IRouteProps } from 'react-router-map/dist/cjs/types' //Types of route

const Child1 = ()=> <div>Child 1</div>
const Child2 = ()=> <div>Child 2</div>
const Parent1 = ()=> <div>Child 2</div>
const Parent1 = ()=> <div>Child 2</div>
const routes: IRouteProps[] = [
  {
    pathName: 'Home',
    urlPath: '/',
    Component: <Parent1 />,
    hasChildren: false,
  },
  {
    pathName: 'Home',
    urlPath: '/',
    Component: <Parent2 />,
    hasChildren: false,
  }
]
const Comp = () => (
  <div>
    <MapRouter routes={routes} enableTopScroll={false} browserRouter={false} />
  </div>
)
```
