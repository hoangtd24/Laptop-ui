import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import style from "./Header.module.scss"
import images from '~/assets/images/index.js'
import { Wrapper as PoperWrapper } from "~/poper";
import SearchItem from "~/components/SearchItem"

const cx = classNames.bind(style)

function Header() {
    return (
        <header className = {cx("wrapper")}>
            <div className = {cx("inner")}>
                <img src = {images.logofull} alt = 'Logo' className={cx('logo-full')}/>
                <Tippy 
                    //visible
                    interactive
                    placement="bottom-start"
                    render={attrs => (
                        <div className = {cx('search-result')} tabIndex = "-1" {...attrs}>
                            <PoperWrapper>
                                <SearchItem />
                                <SearchItem />
                                <SearchItem />
                                <SearchItem />
                                <SearchItem />
                                <SearchItem />
                                <SearchItem />
                            </PoperWrapper>
                        </div>
                    )}
                >
                    <div className = {cx('search')}>
                        <input className={cx('search-input')} placeholder = 'Nhập từ khóa để tìm kiếm' />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon = {faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
            </div>
        </header>
    );
}

export default Header;