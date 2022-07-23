import OnlyHeader from "~/layouts/OnlyHeader"
import Coupon from "~/pages/Coupon/Coupon"
import Detail from "~/pages/Detail"
import Home from "~/pages/Home/Home"
import Order from "~/pages/Order/Order"
import Profile from "~/pages/Profile/Profile"

const publicRoutes = [
    {path: '/', component: Home, layout: OnlyHeader},
    {path: '/order', component: Order},
    {path: '/profile', component: Profile},
    {path: '/coupon', component: Coupon, layout: OnlyHeader},
    {path: '/@:title', component: Detail, layout: OnlyHeader},
]

const privateRoutes = []

export {publicRoutes, privateRoutes}