import classNames from 'classnames/bind';
import CareItem from '~/components/CareItem';
import { Address, Bell, Computer, HeadPhone, News, Order, Setting, System, User } from '~/components/icons';
import styles from './Account.module.scss';
import MenuItem from "~/poper/Menu/MenuItem";

const cx = classNames.bind(styles);
const userMenu = [
    {
        path: '/profile',
        title: 'Thông tin tài khoản',
        icon: <User width="18px" height="18px" />,
    },
    {
        path: '/cart',
        title: 'Quản lí đơn hàng',
        icon: <Order width="18px" height="18px" />,
    },
    {
        path: '/address',
        title: 'Sổ địa chỉ',
        icon: <Address width="18px" height="18px" />,
    },
    {
        path: '/notifications',
        title: 'Thông báo',
        icon: <Bell width="18px" height="18px" />,
    },
    {
        path: '/notifications',
        title: 'Bản tin',
        icon: <News width="18px" height="18px" />,
    },
];
function Account() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx("account")}>
                <button className={cx("login-btn")}>
                    <a href='/login'>Đăng Nhập</a>
                </button>
            </div>
            {userMenu.map((item,index) => <MenuItem key={index} data={item}/>)}
            <CareItem LeftIcon={<System />} title="Hệ thống Showroom" to="/contact" />
            <CareItem LeftIcon={<HeadPhone />} title="Tư vấn khách hàng: " contact="1800 6867" />
            <CareItem LeftIcon={<HeadPhone />} title="CSKH: " contact="1800 6865" />
            <CareItem LeftIcon={<Computer />} title="Tin công nghệ" to="/congnghe" />
            <CareItem LeftIcon={<Setting />} title="Xây dựng cấu hình" to="/buildpc" />
        </div>
    );
}

export default Account;
