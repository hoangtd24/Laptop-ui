import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import images from '~/assets/images';
import Button from '~/components/Button/Button';
import { Car, Change, Gift, Laptop, Settings, Shield, Truck } from '~/components/icons';
import transferPrice from '~/components/TranferPrice/tranferPrice';
import { addProduct } from '~/features/cart/cartSlice';
import { getDataLaptop } from '~/features/product/productSlice';
import ProductSpecifications from '~/layouts/components/productSpecifications/ProductSpecifications';
import styles from './Detail.module.scss';

const cx = classNames.bind(styles);

function Detail() {
    const productId = useParams();
    const [promoActive, setPromoActive] = useState(true);
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();
    const {item} = useSelector(state=>state.product)

    useEffect(() => {
        dispatch(getDataLaptop(productId.title));
        setProduct(item)
    }, [dispatch, productId.title,item]);
    function createMarkup() {
        return { __html: product.content };
    }
    
    function MyComponent() {
        return (
            <div className={cx('describe-content')}>
                <div className={cx('describe')}>
                    <h1>Mô tả sản phẩm</h1>
                    {product && <div className={cx('description')} dangerouslySetInnerHTML={createMarkup()} />}
                </div>
                <ProductSpecifications />
            </div>
        );
    }
    function handleAddItem() {
        toast.success("Đã thểm sản phẩm vào giỏ hàng")
        dispatch(addProduct(product))
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-lg')}>
                <nav aria-label="breadcrumb">
                    <ol className={cx('breadcrumb')}>
                        <li className={cx('breadcrumb-item')}>
                            <a href="/">Home</a>
                        </li>
                        <li className={cx('breadcrumb-item active')} aria-current="page">
                            Detail
                        </li>
                    </ol>
                </nav>
                <div className={cx('row')}>
                    <div className={cx('col-12 col-md-9')}>
                        {product && (
                            <div className={cx('product__info')}>
                                <div className={cx('info-product')}>
                                    <img className={cx('product-img')} src={product.image} alt="" />
                                    <div className={cx('product-setting')}>
                                        <p className={cx('product-setting-item')}>- CPU: Intel Core i7-10510U</p>
                                        <p className={cx('product-setting-item')}>- Màn hình: 14" IPS (1920 x 1080)</p>
                                        <p className={cx('product-setting-item')}>- RAM: 1 x 8GB DDR4 2666MHz</p>
                                        <p className={cx('product-setting-item')}>
                                            - Đồ họa: NVIDIA GeForce MX250 2GB GDDR5 / Intel UHD Graphics
                                        </p>
                                        <p className={cx('product-setting-item')}>- Lưu trữ: 512GB SSD M.2 NVMe /</p>
                                        <p className={cx('product-setting-item')}>
                                            - Hệ điều hành: Windows 10 Home SL 64-bit
                                        </p>
                                        <p className={cx('product-setting-item')}>- Pin: 4 cell 50 Wh Pin liền</p>
                                        <p className={cx('product-setting-item')}>- Khối lượng: 1.2 kg</p>
                                    </div>
                                </div>
                                <div className={cx('product__discount')}>
                                    <h1 className={cx('product-name')}>{product.title}</h1>
                                    <div className={cx('product-trademark')}>
                                        <div className={cx('trademark')}>
                                            <p className={cx('trademark-title')}>Thương hiệu: </p>
                                            <a href="/" className={cx('trademark-name')}>
                                                HP
                                            </a>
                                        </div>
                                        <p className={cx('trademark-store')}>SKU: 220609880</p>
                                    </div>
                                    <p className={cx('product-quantity')}>Chỉ còn lại {product.quantity} sản phẩm</p>
                                    <div className={cx('product-info')}>
                                        <div className={cx('product-price')}>
                                            {promoActive ? (
                                                <p className={cx('product-price-current')}>
                                                    {product.newprice && transferPrice(product.newprice)}
                                                </p>
                                            ) : (
                                                <p className={cx('product-price-current')}>
                                                    {product.oldprice && transferPrice(product.oldprice)}
                                                </p>
                                            )}
                                            {promoActive && (
                                                <p className={cx('product-price-old')}>
                                                    {product.oldprice && transferPrice(product.oldprice)}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className={cx('product-promo')}>
                                        <h2 className={cx('promo-title')}>Chọn một trong những khuyến mãi sau</h2>
                                        <div
                                            className={cx('promo-item', { active: promoActive })}
                                            onClick={() => setPromoActive(!promoActive)}
                                        >
                                            <div className={cx('promo-img')}>
                                                <Gift />
                                            </div>
                                            <div className={cx('promo-info')}>
                                                <p className={cx('promo-price')}>
                                                    Giảm{' '}
                                                    {product.newprice &&
                                                        transferPrice(product.oldprice - product.newprice)}{' '}
                                                    / Chiếc
                                                </p>
                                                <p className={cx('promo-condition')}>Khi mua từ 1 Chiếc trở lên</p>
                                                <p className={cx('promo-expiry')}>HSD: 22/12/2022</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('row mt-5 justify-content-between mx-0')}>
                                        <Button
                                            to="/cart"
                                            large
                                            primary
                                            className={cx('col-5')}
                                            onClick={() => handleAddItem()}
                                        >
                                            Mua Ngay
                                        </Button>
                                        <Button large outline className={cx('col-5')} onClick={() => handleAddItem()}>
                                            Thêm vào giỏ hàng
                                        </Button>
                                    </div>
                                    <div className={cx('related-promo')}>
                                        <p className={cx('related-title')}>Khuyến mãi liên quan</p>
                                        <ul className={cx('related-list')}>
                                            <li className={cx('related-item')}>
                                                Trả góp 6 tháng lãi suất 0% với đơn hàng lớn hơn 3tr.
                                                <a href="/">Xem chi tiết</a>
                                            </li>
                                            <li className={cx('related-item')}>
                                                Nhập mã <strong>PV100</strong> giảm thêm 5% tối đa 100.000đ khi thanh
                                                toán qua VNPAY-QR.
                                                <a href="/">Xem chi tiết</a>
                                            </li>
                                            <li className={cx('related-item')}>
                                                Nhập mã <strong>PVAPPLE</strong> giảm thêm 4% tối đa 800.000đ cho đơn
                                                hàng Apple từ 20 triệu khi thanh toán qua VNPAY-QR.
                                                <a href="/">Xem chi tiết</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={cx('col-12 col-md-3')}>
                        <div className={cx('product__policy')}>
                            <div className={cx('policy-transport')}>
                                <Car />
                                <span>Sản phẩm được miễn phí giao hàng</span>
                            </div>
                            <div className={cx('policy-sale')}>
                                <p className={cx('policy-sale-heading')}>Chính sách bán hàng</p>
                                <div className={cx('policy-sale-item')}>
                                    <Truck />
                                    <span>Miễn phí giao hàng cho đơn hàng từ 800K</span>
                                </div>
                                <div className={cx('policy-sale-item')}>
                                    <Shield />
                                    <span>Cam kết hàng chính hãng 100%</span>
                                </div>
                                <div className={cx('policy-sale-item')}>
                                    <Change />
                                    <span>Đổi trả trong vòng 10 ngày</span>
                                </div>
                            </div>
                            <div className={cx('policy-sale')}>
                                <p className={cx('policy-sale-heading')}>Dịch vụ khác</p>
                                <div className={cx('policy-sale-item')}>
                                    <Settings />
                                    <span>Sửa chữa đồng giá 150.000đ.</span>
                                </div>
                                <div className={cx('policy-sale-item')}>
                                    <Laptop />
                                    <span>Vệ sinh máy tính, laptop.</span>
                                </div>
                                <div className={cx('policy-sale-item')}>
                                    <Shield />
                                    <span>Bảo hành tại nhà.</span>
                                </div>
                                <img className={cx('img-fluid mt-5 rounded-4 d-none d-sm-block')} src={images.adver} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <LazyLoad>{MyComponent()}</LazyLoad>
            </div>
            <ToastContainer />
        </div>
    );
}
export default Detail;
