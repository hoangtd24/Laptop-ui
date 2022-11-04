import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useContext } from 'react';
import Button from '~/components/Button/Button';
import transferPrice from '~/components/TranferPrice/tranferPrice';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('mt-5')}>
            <div className={cx('container-lg')}>
                <nav aria-label="breadcrumb" className={cx('breadcrumb-wrap')}>
                    <ol className={cx('breadcrumb')}>
                        <li className={cx('breadcrumb-item')}>
                            <a href="/">Trang chủ</a>
                        </li>
                        <li className={cx('breadcrumb-item')} aria-current="page">
                            Giỏ hàng
                        </li>
                    </ol>
                </nav>
                <div className={cx('row')}>
                    <div className={cx('col-8')}>
                        <div className={cx('cart-info')}>
                            <h1 className={cx('heading')}>Giỏ hàng</h1>
                            <Button
                            >
                                Xóa tất cả
                            </Button>
                        </div>
                        <div className={cx('cart-container')}>
                            <div className={cx('cart-heading')}>
                                <p className={cx('cart-heading-item', 'width')}>Sản phẩm</p>
                                <p className={cx('cart-heading-item')}>Đơn giá</p>
                                <p className={cx('cart-heading-item')}>Số lượng</p>
                                <p className={cx('cart-heading-item')}>Thành tiền</p>
                            </div>
                                <div className={cx('cart-item')}>
                                    <div className={cx('cart-item-info', 'width')}>
                                        <img className={cx('cart-item-img')}  alt="" />
                                        <p className={cx('cart-item-name')}></p>
                                    </div>
                                    <div className={cx('cart-price')}>
                                        <p className={cx('cart-price-new')}>1</p>
                                        <p className={cx('cart-price-old')}>2</p>
                                    </div>
                                    <div className={cx('cart-quantity')}>
                                        <div className={cx('cart-quantity-action')}>
                                            <FontAwesomeIcon
                                                icon={faMinus}
                                                className={cx('action-icon')}
                                            />
                                            <span className={cx('cart-item-quantity')}></span>
                                            <FontAwesomeIcon icon={faPlus} className={cx('action-icon')} />
                                        </div>
                                        <button className={cx('remove-item')}>Xóa</button>
                                    </div>
                                    <p className={cx('total-price')}>
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className={cx('col-3 p-4 shadow rounded-4 ms-5 mb-5')} style={{ height: '174px' }}>
                        <p className={cx('fw-bold')}>Thanh Toán</p>
                        <div className={cx('payment__estimate')}>
                            <span>Tổng tạm tính</span>
                            <span>1</span>
                        </div>
                        <div className={cx('payment__estimate')}>
                            <span>Thành tiền</span>
                            <span>2</span>
                        </div>
                        <Button large primary className={cx('w-100 mt-4 text-light')}>
                            Thanh toán
                        </Button>
                    </div>
                    <div className={cx('no-cart')}>
                        <img src="https://i.imgur.com/Drj57qu.png" alt="logo-cart" />
                        <p className={cx('cart-title')}>Giỏ hàng chưa có sản phẩm nào</p>
                        <Button primary large className={cx('buy-btn')} to="/">
                            Mua sắm ngay
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
