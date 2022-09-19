import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useContext } from "react";
import Button from "~/components/Button/Button";
import transferPrice from "~/components/TranferPrice/tranferPrice";
import { CartContext } from "~/context/Context";
import styles from "./Cart.module.scss";

const cx = classNames.bind(styles)

function Cart() {

    const {state} = useContext(CartContext)
    const totalPriceOrder = state.reduce((prev,current) => prev + current.product.newprice * current.quantity,0)
    return (
        <div className={cx("wrapper")}>
            <nav aria-label="breadcrumb" className={cx("breadcrumb-wrap")}>
                <ol className={cx("breadcrumb")}>
                    <li className={cx("breadcrumb-item")}><a href="/">Trang chủ</a></li>
                    <li className={cx("breadcrumb-item")} aria-current="page">Giỏ hàng</li>
                </ol>
            </nav>
            {
                state.length > 0 ? (
                    <>
                        <div className={cx("cart")}>
                            <div className={cx("cart-info")}>
                                <h1 className={cx("heading")}>Giỏ hàng</h1>
                                <Button>Xóa tất cả</Button>
                            </div>
                            <div className={cx("cart-container")}>
                                <div className={cx("cart-heading")}>
                                    <p className={cx("cart-heading-item","width")}>Sản phẩm</p>
                                    <p className={cx("cart-heading-item")}>Đơn giá</p>
                                    <p className={cx("cart-heading-item")}>Số lượng</p>
                                    <p className={cx("cart-heading-item")}>Thành tiền</p>
                                </div>
                                {state.map((item,index) => 
                                    <div className={cx("cart-item")} key={index}>
                                        <div className={cx("cart-item-info","width")}>
                                            <img className={cx("cart-item-img")} src={item.product.image} alt="" />
                                            <p className = {cx("cart-item-name")}>{item.product.title}</p>
                                        </div>
                                        <div className={cx("cart-price")}>
                                            <p className={cx("cart-price-new")}>{transferPrice(item.product.newprice)}</p>
                                            <p className={cx("cart-price-old")}>{transferPrice(item.product.oldprice)}</p>
                                        </div>
                                        <div className={cx("cart-quantity")}>
                                            <div className={cx("cart-quantity-action")}>
                                                <FontAwesomeIcon icon={faMinus} className={cx("action-icon")}/>
                                                <span className={cx("cart-item-quantity")}>{item.quantity}</span>
                                                <FontAwesomeIcon icon={faPlus} className={cx("action-icon")}/>
                                            </div>
                                            <button className={cx("remove-item")}>Xóa</button>
                                        </div>
                                        <p className={cx("total-price")}>{transferPrice(item.product.newprice * item.quantity)}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={cx("payment")}>
                            <p>Thanh Toán</p>
                            <div className={cx("payment__estimate")}>
                                <span>Tổng tạm tính</span>
                                <span>{transferPrice(totalPriceOrder)}</span>
                            </div>
                            <div className={cx("payment__estimate")}>
                                <span>Thành tiền</span>
                                <span>{transferPrice(totalPriceOrder)}</span>
                            </div>
                            <Button large primary className={cx("cart-btn")}>Thanh toán</Button>
                        </div>
                    </>
                ):(
                    <div className={cx('no-cart')}>
                        <img src="https://i.imgur.com/Drj57qu.png" alt="logo-cart" />
                        <p className={cx('cart-title')}>Giỏ hàng chưa có sản phẩm nào</p>
                        <Button primary large className={cx('buy-btn')} to="/" >Mua sắm ngay</Button>
                    </div>
                )
            }
        </div>
    );
}

export default Cart;