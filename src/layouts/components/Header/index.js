import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./Header.module.scss"
import images from '~/assets/images/index.js'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style)

function Header() {
    return (
        <header className = {cx("wrapper")}>
            <div className = {cx("inner")}>
                <img src = {images.logofull} alt = 'Logo' className={cx('logo-full')}/>
                <div className = {cx('search')}>
                    <input className={cx('search-input')} placeholder = 'Nhập từ khóa để tìm kiếm' />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon = {faMagnifyingGlass} />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;