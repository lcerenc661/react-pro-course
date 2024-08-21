import { lazy } from "react";

// import { LazyPage1,LazyPage2, LazyPage3 } from "../01-lazyload/pages";

const LazyPage1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1'))
const LazyPage2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'))
const LazyPage3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'))



interface Route {
    to: string;
    path: string;
    Component: (() => JSX.Element) |  React.LazyExoticComponent<() => JSX.Element>;
    name: string;
}
export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1', 
        Component: LazyPage1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2', 
        Component: LazyPage2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: LazyPage3,
        name: 'Lazy-3'
    }
]