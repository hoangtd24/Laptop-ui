import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import style from './Header.module.scss';
import images from '~/assets/images/index.js';
import { Wrapper as PoperWrapper } from '~/poper';
import SearchItem from '~/components/SearchItem';
import ActionItem from '~/components/ActionItem';
import { Address, Bell, Cart, News, Order, Promote, User } from '~/components/icons';
import { useEffect, useState } from 'react';
import CartItem from '~/components/CartItem/CartItem';
import Button from '~/components/Button/Button';
import Menu from '~/poper/Menu/Menu';
import { Link } from 'react-router-dom';
import transferPrice from '~/components/TranferPrice/tranferPrice';
import { useSelector } from 'react-redux';

const cx = classNames.bind(style);

function Header() {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const data = JSON.parse(localStorage.getItem('loginUser'));
    const { token } = useSelector((state) => state.user);
    const { cartLists } = useSelector((state) => state.cart);

    const isSignIn = data ? data.token : token;

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        fetch(`https://api-laptop-shop.herokuapp.com/api/products?search=${searchValue}`)
            .then((res) => res.json())
            .then((res) => setSearchResult(res.listProducts));
    }, [searchValue]);
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
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('inner')}>
                    <div className={cx('row w-100 d-flex align-items-center')}>
                        <div className={cx('col-lg-3 col-md-3')}>
                            <Link to="/" onClick={() => scrollTop()}>
                                <img src={images.logofull} alt="Logo" className={cx('img-fluid')} />
                            </Link>
                        </div>
                        <div className={cx('col-lg-4 col-md-5')}>
                            <div>
                                <Tippy
                                    visible={showResult && searchResult.length > 0}
                                    interactive
                                    onClickOutside={() => setShowResult(false)}
                                    placement="bottom-start"
                                    render={(attrs) => (
                                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                            <PoperWrapper>
                                                {searchResult.map((result, index) => (
                                                    <SearchItem key={index} data={result} />
                                                ))}
                                            </PoperWrapper>
                                        </div>
                                    )}
                                >
                                    <div className={cx('search')}>
                                        <input
                                            value={searchValue}
                                            onChange={(e) => setSearchValue(e.target.value)}
                                            onFocus={() => setShowResult(true)}
                                            className={cx('search-input')}
                                            placeholder="Nhập từ khóa để tìm kiếm"
                                        />
                                        <button className={cx('search-btn')}>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </button>
                                    </div>
                                </Tippy>
                            </div>
                        </div>
                        <div className={cx('col-lg-5 col-md-4')}>
                            <div className={cx('actions')}>
                                <ActionItem
                                    icon={<Promote />}
                                    title="Khuyến mãi"
                                    to="/coupon"
                                    className={cx('d-lg-flex d-md-none')}
                                />
                                <ActionItem
                                    icon={<Order />}
                                    title="Đơn hàng"
                                    to="/cart"
                                    className={cx('d-lg-flex d-md-none')}
                                />
                                {!!isSignIn ? (
                                    <Menu items={userMenu}>
                                        <ActionItem icon={<User />} title="Tống Hoàng" />
                                    </Menu>
                                ) : (
                                    <ActionItem icon={<User />} title="Đăng nhập" to="/login" />
                                )}

                                <div className={cx('d-lg-block d-md-none')}>
                                    <Tippy
                                        interactive
                                        placement="bottom-end"
                                        offset={[0, 0]}
                                        render={(attrs) => (
                                            <div className={cx('notification-result')} tabIndex="-1" {...attrs}>
                                                <img
                                                    src="https://shopfront-cdn.tekoapis.com/static/e536f0592aa3c8b1.png"
                                                    alt="logo tim kiem"
                                                />
                                                <p className={cx('notification-title')}>Bạn chưa có thông báo mới</p>
                                            </div>
                                        )}
                                    >
                                        <span>
                                            <ActionItem icon={<Bell />} title="Thông báo" />
                                        </span>
                                    </Tippy>
                                </div>

                                <div>
                                    <Tippy
                                        interactive
                                        placement="bottom-end"
                                        offset={[0, 0]}
                                        delay={[0, 500]}
                                        render={(attrs) => (
                                            <div className={cx('cart-result')} tabIndex="-1" {...attrs}>
                                                {cartLists.length <= 0 ? (
                                                    <div className={cx('cart-info')}>
                                                        <div className={cx('no-cart')}>
                                                            <img
                                                                src="https://i.imgur.com/Drj57qu.png"
                                                                alt="logo-cart"
                                                            />
                                                            <p className={cx('cart-title')}>
                                                                Giỏ hàng chưa có sản phẩm nào
                                                            </p>
                                                            <button className={cx('buy-btn')}>Mua sắm ngay</button>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <>
                                                        {cartLists.map((item, index) => {
                                                            return <CartItem key={index} data={item} />;
                                                        })}
                                                        <div className={cx('caculate')}>
                                                            <div className={cx('caculate-info')}>
                                                                <p className={cx('caculate-title')}>
                                                                    Tổng tiền sản phẩm
                                                                </p>
                                                                <p className={cx('caculate-price')}>{}</p>
                                                            </div>
                                                            <div className={cx('cart-btn')}>
                                                                <Button
                                                                    to="/cart"
                                                                    primary
                                                                    large
                                                                    className={cx('custom-cart-btn')}
                                                                >
                                                                    Xem giỏ hàng
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        )}
                                    >
                                        <span className={cx('cart')}>
                                            <ActionItem icon={<Cart />} title="Giỏ hàng" />
                                            {cartLists.length > 0 && <p className={cx("cart-quantity")}>{cartLists.length}</p>}
                                        </span>
                                    </Tippy>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
