/* eslint-disable @typescript-eslint/no-namespace */
import React from 'react'

export type LayoutType = (props: { children: JSX.Element }) => JSX.Element

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
  Layout?: (props: { children: JSX.Element }) => any
}
export type MapRouterFunction = (props: MapRouterProps) => JSX.Element
