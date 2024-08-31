import { lazy } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";
import ShoppingPage from "../02-component-patterns/components/ShoppingPage";

// import { LazyPage1,LazyPage2, LazyPage3 } from "../01-lazyload/pages";

const LazyPage1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1'))
const LazyPage2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'))
const LazyPage3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'))

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'))



interface Route {
    to: string;
    path: string;
    Component: (() => JSX.Element) |  React.LazyExoticComponent<() => JSX.Element>;
    name: string;
}
export const routes: Route[] = [
    {
        to: '/Shopping',
        path: '/shopping/', 
        Component: ShoppingPage,
        name: 'Shopping'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No-Lazy'
    }
]