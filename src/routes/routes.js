import OnlyHeader from "~/layouts/OnlyHeader"
import Coupon from "~/pages/Coupon/Coupon"
import Detail from "~/pages/Detail/detailProduct"
import Home from "~/pages/Home/Home"
import Cart from "~/pages/Cart/Cart"
import Profile from "~/pages/Profile/Profile"
import Login from "~/pages/Login/Login"
import Register from "~/pages/Register/Register"
import RegisterComplete from "~/pages/Register/RegisterComplete"
import Search from "~/pages/Search/Search"

const publicRoutes = [
    {path: '/', component: Home, layout: OnlyHeader},
    {path: '/cart', component: Cart, layout:OnlyHeader},
    {path: '/profile', component: Profile},
    {path: '/coupon', component: Coupon, layout: OnlyHeader},
    {path: '/search', component: Search, layout: OnlyHeader},
    {path: '/@:title', component: Detail, layout: OnlyHeader},
    {path: '/login', component: Login, layout: OnlyHeader},
    {path: '/register', component: Register, layout: OnlyHeader},
    {path: '/register/complete', component: RegisterComplete, layout: OnlyHeader},



]

const privateRoutes = []

export {publicRoutes, privateRoutes}