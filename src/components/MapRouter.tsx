import React from 'react'
import { HashRouter, BrowserRouter, Routes } from 'react-router-dom'
import { IRouteProps, MapRouterFunction, MapRouterProps } from 'src/types'
import RouteFunction from './RouteFunction'
import { TopScroll } from './TopScroll'

export const MapRouter: MapRouterFunction = function ({
  routes,
  browserRouter = false,
  enableTopScroll = true,
}: MapRouterProps): JSX.Element {
  return browserRouter ? (
    <BrowserRouter>
      {enableTopScroll && <TopScroll />}
      <Routes>
        {routes.map((route: IRouteProps) => RouteFunction(route))}
      </Routes>
    </BrowserRouter>
  ) : (
    <HashRouter>
      {enableTopScroll && <TopScroll />}
      <Routes>
        {routes.map((route: IRouteProps) => RouteFunction(route))}
      </Routes>
    </HashRouter>
  )
}

export default MapRouter