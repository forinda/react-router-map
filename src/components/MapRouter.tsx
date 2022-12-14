import React from 'react'
import { HashRouter, BrowserRouter, Routes } from 'react-router-dom'
import { IRouteProps, MapRouterFunction, MapRouterProps } from 'src/types'
import RouteFunction from './RouteFunction'
import { TopScroll } from './TopScroll'

export const MapRouter: MapRouterFunction = function ({
  routes,
  browserRouter = false,
  topScroll = true,
}: MapRouterProps): JSX.Element {
  return browserRouter ? (
    <BrowserRouter>
      {topScroll && <TopScroll />}
      <Routes>
        {routes.map((route: IRouteProps) => RouteFunction(route))}
      </Routes>
    </BrowserRouter>
  ) : (
    <HashRouter>
      {topScroll && <TopScroll />}
      <Routes>
        {routes.map((route: IRouteProps) => RouteFunction(route))}
      </Routes>
    </HashRouter>
  )
}

export default MapRouter
