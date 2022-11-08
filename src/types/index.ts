/* eslint-disable @typescript-eslint/no-namespace */
import React from 'react'
export interface IRouteProps {
  pathName: string
  urlPath: string
  Component: React.ReactElement
  hasChildren: boolean
  nestedComponents?: IRouteProps[]
}

export type IRouteFunction = (props: IRouteProps) => JSX.Element
export type MapRouterProps = {
  routes: IRouteProps[]
  enableTopScroll?: boolean
  browserRouter?: boolean
}
export type MapRouterFunction = (props: MapRouterProps) => JSX.Element
