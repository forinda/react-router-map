import { IRouteProps as IProp } from './types'
import { RouteFunction } from './components/RouteFunction'
import { MapRouter } from './components/MapRouter'
import { TopScroll } from './components/TopScroll'
export { MapRouter, TopScroll }
export default Object.freeze({ MapRouter, TopScroll })

export type MapRouter = typeof MapRouter
export type TopScroll = typeof TopScroll
export type RouteFunction = typeof RouteFunction
export type IRouteProps = IProp
