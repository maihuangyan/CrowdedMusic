import { lazy } from "react"
import Loadable from "ui-component/Loadable"

const Home = Loadable(lazy(() => import("views/home")));

const routes = [
    {
        path:'/home',
        name:'home',
        til:'首页',
        element:Home,
        hidden:false,
    },
    {
        path:'/music',
        name:'music',
        til:'music',
        element:Loadable(lazy(()=>import('views/music'))),
        hidden:false,
    },
    {
        path:'/login',
        til:'登录',
        element:Loadable(lazy(()=>import('views/login'))),
        hidden:true,
    },
    {
        path:'*',
        til:'页面未找到',
        element:Loadable(lazy(()=>import('views/404'))),
        hidden:true,
    },
]

export default routes