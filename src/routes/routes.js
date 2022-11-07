import OnlyHeader from '~/layouts/OnlyHeader';
import Cart from '~/pages/Cart/Cart';
import Coupon from '~/pages/Coupon/Coupon';
import Dashboard from '~/pages/Dashboard/Dashboard';
import Detail from '~/pages/Detail/detailProduct';
import Home from '~/pages/Home/Home';
import Login from '~/pages/Login/Login';
import Notification from '~/pages/Notification/Notification';
import Profile from '~/pages/Profile/Profile';
import Register from '~/pages/Register/Register';
import RegisterComplete from '~/pages/Register/RegisterComplete';
import Search from '~/pages/Search/Search';
import Account from '~/pages/Account/Account';

const publicRoutes = [
    { path: '/', component: Home, layout: OnlyHeader },
    { path: '/cart', component: Cart, layout: OnlyHeader },
    { path: '/profile', component: Profile },
    { path: '/coupon', component: Coupon, layout: OnlyHeader },
    { path: '/account', component: Account, layout: OnlyHeader },
    { path: '/dashboard', component: Dashboard, layout: OnlyHeader },
    { path: '/notification', component: Notification, layout: OnlyHeader },
    { path: '/search', component: Search, layout: OnlyHeader },
    { path: '/@:title', component: Detail, layout: OnlyHeader },
    { path: '/login', component: Login, layout: OnlyHeader },
    { path: '/register', component: Register, layout: OnlyHeader },
    { path: '/register/complete', component: RegisterComplete, layout: OnlyHeader },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
