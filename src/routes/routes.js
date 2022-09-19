import OnlyHeader from "~/layouts/OnlyHeader"
import Coupon from "~/pages/Coupon/Coupon"
import Detail from "~/pages/Detail/detailProduct"
import Home from "~/pages/Home/Home"
import Cart from "~/pages/Cart/Cart"
import Profile from "~/pages/Profile/Profile"

const publicRoutes = [
    {path: '/', component: Home, layout: OnlyHeader},
    {path: '/cart', component: Cart, layout:OnlyHeader},
    {path: '/profile', component: Profile},
    {path: '/coupon', component: Coupon, layout: OnlyHeader},
    {path: '/@:title', component: Detail, layout: OnlyHeader},
]

const privateRoutes = []

export {publicRoutes, privateRoutes}