import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import style from './Header.module.scss';
import images from '~/assets/images/index.js';
import { Wrapper as PoperWrapper } from '~/poper';
import SearchItem from '~/components/SearchItem';
import ActionItem from '~/components/ActionItem';
import { Bell, Cart, Order, Promote, User } from '~/components/icons';
import { Fragment, useState } from 'react';
import CartItem from '~/components/CartItem/CartItem';
import Button from '~/components/Button/Button';

const cx = classNames.bind(style);

function Header() {
    const [cartItem, setCartItem] = useState([0]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logofull} alt="Logo" className={cx('logo-full')} />
                <div>
                    <Tippy
                        visible={false}
                        interactive
                        placement="bottom-start"
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
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
                        <div className={cx('search')}>
                            <input className={cx('search-input')} placeholder="Nhập từ khóa để tìm kiếm" />
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippy>
                </div>

                <div className={cx('actions')}>
                    <ActionItem icon={<Promote />} title="Khuyến mãi" to="/khuyenmai" />
                    <ActionItem icon={<Order />} title="Đơn hàng" to="/order" />
                    <ActionItem icon={<User />} title="Đăng nhập" />

                    <div>
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
                            delay = {[0, 500]}
                            render={(attrs) => (
                                <div className={cx('cart-result')} tabIndex="-1" {...attrs}>
                                    <div className={cx('cart-info')}>
                                        {cartItem.length <= 0 ? (
                                            <div className={cx('no-cart')}>
                                                <img src="https://i.imgur.com/Drj57qu.png" alt="logo cart" />
                                                <p className={cx('cart-title')}>Giỏ hàng chưa có sản phẩm nào</p>
                                                <button className={cx('buy-btn')}>Mua sắm ngay</button>
                                            </div>
                                        ) : (
                                            cartItem.map((item, index) => {
                                                return <CartItem key={index} item={item} />;
                                            })
                                        )}
                                    </div>
                                    {cartItem.length <= 0 ? (
                                        <Fragment />
                                    ) : (
                                        <div className={cx('caculate')}>
                                            <div className={cx('caculate-info')}>
                                                <p className={cx('caculate-title')}>
                                                    Tổng tiền ({cartItem.length}) sản phẩm
                                                </p>
                                                <p className={cx('caculate-price')}>1.000.000đ</p>
                                            </div>
                                            <div className = {cx('cart-btn')}>
                                                <Button to = '/cart' primary large className={cx('custom-cart-btn')}>Xem giỏ hàng</Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        >
                            <span>
                                <ActionItem icon={<Cart />} title="Giỏ hàng" to="/cart" />
                            </span>
                        </Tippy>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
