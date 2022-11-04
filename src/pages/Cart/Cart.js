import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Modal } from '@mui/material';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '~/components/Button/Button';
import transferPrice from '~/components/TranferPrice/tranferPrice';
import { decreaseQuantity, deleteAllProduct, deleteProduct, increaseQuantity } from '~/features/cart/cartSlice';
import styles from './Cart.module.scss';
const cx = classNames.bind(styles);

function Cart() {
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [openModalDeleteAll, setOpenModalDeleteAll] = useState(false);

    const [productId, setProductId] = useState(0);
    const handleOpenModalDeleteAll = () => setOpenModalDeleteAll(true);
    const handleOpenModalDelete = (id) => {
        setProductId(id);
        setOpenModalDelete(true);
    };
    const handleCloseModalDelete = () => setOpenModalDelete(false);
    const handleCloseModalDeleteAll = () => setOpenModalDeleteAll(false);

    const { cartLists } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const handleDeleteItem = (productId) => {
        dispatch(deleteProduct(productId));
        toast.success('Đã xóa sản phẩm khỏi giỏ hàng');
        setOpenModalDelete(false);
    };
    const handleDeleteAll = () => {
        dispatch(deleteAllProduct());
        toast.success('Đã xóa tất cả sản phẩm khỏi giỏ hàng');
        setOpenModalDeleteAll(false);
    };
    const totalPriceOrder = cartLists.reduce((prev, current) => prev + current.item.newprice * current.quantity, 0);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: '8px',
    };
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
                    {cartLists.length > 0 ? (
                        <>
                            <div className={cx('col-8')}>
                                <div className={cx('cart-info')}>
                                    <h1 className={cx('heading')}>Giỏ hàng</h1>
                                    <Button onClick={handleOpenModalDeleteAll}>Xóa tất cả</Button>
                                </div>
                                <div className={cx('cart-container')}>
                                    <div className={cx('cart-heading')}>
                                        <p className={cx('cart-heading-item', 'width')}>Sản phẩm</p>
                                        <p className={cx('cart-heading-item')}>Đơn giá</p>
                                        <p className={cx('cart-heading-item')}>Số lượng</p>
                                        <p className={cx('cart-heading-item')}>Thành tiền</p>
                                    </div>
                                    {cartLists.map((product, index) => (
                                        <div className={cx('cart-item')} key={index}>
                                            <div className={cx('cart-item-info', 'width')}>
                                                <img className={cx('cart-item-img')} src={product.item.image} alt="" />
                                                <p className={cx('cart-item-name')}>{product.item.title}</p>
                                            </div>
                                            <div className={cx('cart-price')}>
                                                <p className={cx('cart-price-new')}>
                                                    {transferPrice(product.item.newprice)}
                                                </p>
                                                <p className={cx('cart-price-old')}>
                                                    {transferPrice(product.item.oldprice)}
                                                </p>
                                            </div>
                                            <div className={cx('cart-quantity')}>
                                                <div className={cx('cart-quantity-action')}>
                                                    <FontAwesomeIcon
                                                        icon={faMinus}
                                                        className={cx('action-icon', {
                                                            prevent: product.quantity === 1,
                                                        })}
                                                        onClick={() => dispatch(decreaseQuantity(index))}
                                                    />
                                                    <span className={cx('cart-item-quantity')}>{product.quantity}</span>
                                                    <FontAwesomeIcon
                                                        icon={faPlus}
                                                        className={cx('action-icon')}
                                                        onClick={() => dispatch(increaseQuantity(index))}
                                                    />
                                                </div>
                                                <button
                                                    className={cx('remove-item')}
                                                    onClick={() => handleOpenModalDelete(index)}
                                                >
                                                    Xóa
                                                </button>
                                            </div>
                                            <p className={cx('total-price')}>
                                                {transferPrice(product.item.newprice * product.quantity)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={cx('col-3 p-4 shadow rounded-4 ms-5 mb-5')} style={{ height: '174px' }}>
                                <p className={cx('fw-bold')}>Thanh Toán</p>
                                <div className={cx('payment__estimate')}>
                                    <span>Tổng tạm tính</span>
                                    <span>{transferPrice(totalPriceOrder)}</span>
                                </div>
                                <div className={cx('payment__estimate')}>
                                    <span>Thành tiền</span>
                                    <span>{transferPrice(totalPriceOrder)}</span>
                                </div>
                                <Button large primary className={cx('w-100 mt-4 text-light')}>
                                    Thanh toán
                                </Button>
                            </div>
                        </>
                    ) : (
                        <div className={cx('no-cart')}>
                            <img src="https://i.imgur.com/Drj57qu.png" alt="logo-cart" />
                            <p className={cx('cart-title')}>Giỏ hàng chưa có sản phẩm nào</p>
                            <Button primary large className={cx('buy-btn')} to="/">
                                Mua sắm ngay
                            </Button>
                        </div>
                    )}
                </div>
                <Modal
                    open={openModalDelete}
                    onClose={handleCloseModalDelete}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <h1 className="text-center">Chú ý</h1>
                        <p className="fs-3 my-4 text-center">Bạn có muốn xóa sản phẩm này ra khỏi giỏ hàng?</p>
                        <div className="d-flex justify-content-between">
                            <Button outline large onClick={handleCloseModalDelete}>
                                Hủy bỏ
                            </Button>
                            <Button primary large onClick={() => handleDeleteItem(productId)} className="ms-4">
                                Đồng ý
                            </Button>
                        </div>
                    </Box>
                </Modal>
                <Modal
                    open={openModalDeleteAll}
                    onClose={handleCloseModalDeleteAll}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <h1 className="text-center">Chú ý</h1>
                        <p className="fs-3 my-4 text-center">Bạn muốn xoá tất cả sản phẩm ra khỏi giỏ hàng?</p>
                        <div className="d-flex justify-content-between">
                            <Button outline large onClick={handleCloseModalDeleteAll}>
                                Hủy bỏ
                            </Button>
                            <Button primary large onClick={() => handleDeleteAll()}>
                                Đồng ý
                            </Button>
                        </div>
                    </Box>
                </Modal>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Cart;
