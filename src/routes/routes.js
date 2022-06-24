import OnlyHeader from "~/layouts/OnlyHeader"
import Coupon from "~/pages/Coupon/Coupon"
import Home from "~/pages/Home/Home"
import Order from "~/pages/Order/Order"
import Profile from "~/pages/Profile/Profile"

const publicRoutes = [
    {path: '/', component: Home, layout: OnlyHeader},
    {path: '/order', component: Order},
    {path: '/profile', component: Profile},
    {path: '/coupon', component: Coupon, layout: OnlyHeader},
]

const privateRoutes = []

export {publicRoutes, privateRoutes}