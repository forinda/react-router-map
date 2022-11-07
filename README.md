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
import {MapRouter} from 'react-router-map'

const routes = []
const Comp = () => <div>
 <MapRouter routes={routes} enableTopScroll={false} browserRouter={false} />
</div>
```
