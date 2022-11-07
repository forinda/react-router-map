import React from 'react'
import { HashRouter, BrowserRouter, Routes } from 'react-router-dom'
import { IRouteProps } from '../types'
import RouteFunction from './RouteFunction'
import { TopScroll } from './TopScroll'

type Props = {
  routes: IRouteProps[]
  enableTopScroll?: boolean
  browserRouter: boolean
}

export function Router(props: Props): JSX.Element {
  const { routes, enableTopScroll, browserRouter } = props
  return browserRouter ? (
    <BrowserRouter>
      {enableTopScroll && <TopScroll />}
      <Routes>
        {routes.map((route: IRouteProps) => RouteFunction({ ...route }))}
      </Routes>
    </BrowserRouter>
  ) : (
    <HashRouter>
      {enableTopScroll && <TopScroll />}
      <Routes>
        {routes.map((route: IRouteProps) => RouteFunction({ ...route }))}
      </Routes>
    </HashRouter>
  )
}

export type IRouterFunction = typeof Router
export type IRouterReturn = ReturnType<IRouterFunction>
