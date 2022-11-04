import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import Button from "~/components/Button/Button";
import { User } from "~/components/icons";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";

import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logout } from "~/features/user/userSlice";
import { auth } from "~/firebase";

const cx = classNames.bind(styles)

function Menu({children, items}) {
    const dispatch = useDispatch()
    const handleLogOut = () => {
        auth.signOut();
        dispatch(logout());
        window.localStorage.removeItem('loginUser')
        toast.success("Bạn vừa đăng xuất");
      };
    return ( 
        <Tippy
            interactive
            placement="bottom"
            offset={[0,0]}
            render = {(attrs)=> (
                <div className = {cx('menu-list')} tabIndex = '-1' {...attrs} >
                    <Button large leftIcon = {<User/>} className = {cx('name')}>Tống Hoàng</Button>
                    {items.map((item,index) => <MenuItem key={index} data = {item}/>)}
                    <Button small primary className={cx('login-btn')} onClick={handleLogOut}>Đăng Xuất</Button>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;