import React from 'react'
import { Route } from 'react-router-dom'
import { IRouteFunction, IRouteProps } from '../types'

export const RouteFunction: IRouteFunction = (props: IRouteProps) => {
  return Array.isArray(props.nestedComponents) &&
    props.nestedComponents.length > 0 ? (
    <Route element={props.Component} path={props.urlPath} key={props.pathName}>
      {props.nestedComponents!.map((child: IRouteProps) =>
        RouteFunction(child),
      )}
    </Route>
  ) : (
    <Route
      element={props.Component}
      path={props.urlPath}
      key={props.pathName}
    />
  )
}

export default RouteFunction
