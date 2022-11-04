import className from 'classnames/bind';
import styles from './HeaderMobile.module.scss';
import images from '~/assets/images/index.js';
import { Hidden } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(styles);
function HeaderMobile() {
    return (
        <div className={cx('header-mobile')}>
            <img src={images.logopc} alt="" className={cx('logo-mobile')} />
            <div className={cx('search')}>
                <input className={cx('search-input')} placeholder="Nhập từ khóa để tìm kiếm" />
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </div>
    );
}

export default HeaderMobile;
