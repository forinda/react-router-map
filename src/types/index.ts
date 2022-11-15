/* eslint-disable @typescript-eslint/no-namespace */
import React from 'react'

export interface IRouteProps {
  [key: string]: any
  pathName: string
  urlPath: string
  Component: React.ReactElement
  nestedComponents?: IRouteProps[]
}

export type IRouteFunction = (props: IRouteProps) => JSX.Element
export type MapRouterProps = {
  routes: IRouteProps[]
  topScroll?: boolean
  browserRouter?: boolean
}
export type MapRouterFunction = (props: MapRouterProps) => JSX.Element
