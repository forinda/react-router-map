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

Supports both `esm` and `commonjs`

```jsx
import { MapRouter } from 'react-router-map'
import { IRouteProps } from 'react-router-map' //Types of route for esm modules

const Child1 = () => <div>Child 1</div>
const Child2 = () => <div>Child 2</div>
const Parent1 = () => <div>Child 2</div>
const Parent1 = () => <div>Child 2</div>
const routes: IRouteProps[] = [
  {
    pathName: 'Home',
    urlPath: '/',
    Component: <Parent1 />,
    hasChildren: false,
  },
  {
    pathName: 'Admin',
    urlPath: '/admin',
    Component: <Parent2 />,
    hasChildren: true,
    nestedComponents: [
      {
        pathName: 'Dashboard',
        urlPath: '/admin',
        Component: <Child1 />,
        hasChildren: false,
      },
      {
        pathName: 'Users',
        urlPath: '/admin/users',
        Component: <Child2 />,
        hasChildren: false,
      },
    ],
  },
]
const Comp = () => (
  <div>
    <MapRouter routes={routes} enableTopScroll={false} browserRouter={false} />
  </div>
)
```
Sample layout structure
```sh
- Hompage # Hopepage render Parent 1
- admin # The component wrapper where you pass your <Outlet/>
  - Dashboard # Render dashboard
  - Users # Render users
  - Sumary # Render Dashboard summary
```

Sample Dashboard component

```jsx
const Admin = () => (
  <div>
    <div>
      <h1>Dashboard</h1>
    </div>
    <div>
      <Outlet />
    </div>
  </div>
)
```

The code above implements `HashRouter` and `BrowserRouter` for you and you just need to install the package and `react-router-dom`
Features

- Optional topscroll on page navigation
- Enable BrowserRouter or disable( Defaults to `HashRouter`)
- Nested layouts (You just have to to supply any level of nesting in your Application in the `nestedComponents` property)
  Upcoming features
- Layout support

# Try it out

<iframe src="https://stackblitz.com/edit/react-ts-nriwyu?ctl=1&devToolsHeight=33&embed=1&file=pages/Homepage.tsx&theme=dark"></iframe>

In the mean time we can inject a wrapper in the route `Component` property

Supports nested layouts
![Dashboard layout](./assets/nested.png)

