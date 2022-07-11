import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import Button from "~/components/Button/Button";
import { User } from "~/components/icons";
import styles from "./Menu.module.scss"
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles)

function Menu({children, items}) {
    return ( 
        <Tippy
            interactive
            placement="bottom"
            offset={[0,0]}
            render = {(attrs)=> (
                <div className = {cx('menu-list')} tabIndex = '-1' {...attrs} >
                    <Button large leftIcon = {<User/>} className = {cx('name')}>Tống Hoàng</Button>
                    {items.map((item,index) => <MenuItem key={index} data = {item}/>)}
                    <Button small primary className={cx('login-btn')}>Đăng Xuất</Button>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;