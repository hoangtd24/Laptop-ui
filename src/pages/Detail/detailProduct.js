import classNames from "classnames/bind"
import styles from "./Detail.module.scss"
import { useParams } from "react-router-dom"
import { Car, Change, Gift, Laptop, Settings, Shield, Truck } from "~/components/icons"
import { useContext, useEffect, useState } from "react"
import Button from "~/components/Button/Button"
import images from "~/assets/images"
import transferPrice from "~/components/TranferPrice/tranferPrice"
import ProductSpecifications from "~/layouts/components/productSpecifications/ProductSpecifications"
import Toast from "~/components/Toast/Toast"
import axios from "axios"
import LazyLoad from "react-lazyload"

const cx = classNames.bind(styles)

function Detail(){


    const productId = useParams()
    const [promoActive,setPromoActive] = useState(true)
    const [products, setProducts] = useState([])
    const [showToast,setShowToast] = useState(false)

    function getDataProduct(){
        const data = products.find(product => product._id === productId.title)
        return data
    }

    function createMarkup() {
        return {__html: getDataProduct().content};
      }
      
      function MyComponent() {
        return (
            <div className={cx("describe-content")}>
                <div className ={cx("describe")}>
                    <h1>Mô tả sản phẩm</h1>
                    {getDataProduct() && <div className = {cx("description")} dangerouslySetInnerHTML={createMarkup()} />}
                </div>
                <ProductSpecifications />
            </div>
        );
      }
      function handleAddItem(){
            setShowToast(true)
      }

    useEffect(() => {
        const getDataLaptop = async () =>{
            for(let i = 1; i<=10; i++){
                const response = await axios.get(`https://api-laptop-shop.herokuapp.com/api/products?page=${i}`)
                setProducts(prev => [...prev, ...response.data.listProducts])
            }
            
        }
        getDataLaptop();
    },[])
    return(
        <div className={cx("wrapper")}>
            {showToast && <Toast/>}
            <div className = {cx("container-lg")}>
                <nav aria-label="breadcrumb">
                    <ol className={cx("breadcrumb")}>
                        <li className={cx("breadcrumb-item")}><a href="/">Home</a></li>
                        <li className={cx("breadcrumb-item active")} aria-current="page">Detail</li>
                    </ol>
                </nav>
                <div className = {cx("row")}>
                    <div className = {cx("col-9")}>
                        {getDataProduct() && 
                        <div className = {cx("product__info")}>
                            <div className={cx("info-product")}>
                                <img className = {cx("product-img")} src={getDataProduct().image} alt="" />
                                <div className= {cx("product-setting")}>
                                    <p className = {cx("product-setting-item")}>
                                        - CPU: Intel Core i7-10510U
                                    </p>
                                    <p className = {cx("product-setting-item")}>
                                        - Màn hình: 14" IPS (1920 x 1080)
                                    </p>
                                    <p className = {cx("product-setting-item")}>
                                        - RAM: 1 x 8GB DDR4 2666MHz
                                    </p>
                                    <p className = {cx("product-setting-item")}>
                                        - Đồ họa: NVIDIA GeForce MX250 2GB GDDR5 / Intel UHD Graphics
                                    </p>
                                    <p className = {cx("product-setting-item")}>
                                        - Lưu trữ: 512GB SSD M.2 NVMe /
                                    </p>
                                    <p className = {cx("product-setting-item")}>
                                        - Hệ điều hành: Windows 10 Home SL 64-bit
                                    </p>
                                    <p className = {cx("product-setting-item")}>
                                        - Pin: 4 cell 50 Wh Pin liền
                                    </p>
                                    <p className = {cx("product-setting-item")}>
                                    - Khối lượng: 1.2 kg
                                    </p>
                                </div>
                            </div>
                            <div className= {cx("product__discount")}>
                                <h1 className= {cx('product-name')}>{getDataProduct().title}</h1>
                                <div className= {cx('product-trademark')}>
                                    <div className={cx('trademark')}>
                                        <p className = {cx('trademark-title')}>Thương hiệu: </p>
                                        <a href="/" className = {cx('trademark-name')}>HP</a>
                                    </div>
                                    <p className = {cx('trademark-store')}>SKU: 220609880</p>
                                </div>
                                <p className={cx("product-quantity")}>Chỉ còn lại {getDataProduct().quantity} sản phẩm</p>
                                <div className= {cx('product-info')}>
                                    <div className={cx('product-price')}>
                                        {promoActive ? 
                                        <p className = {cx('product-price-current')}>{getDataProduct().newprice && transferPrice(getDataProduct().newprice)}</p>
                                            : 
                                        <p className = {cx('product-price-current')}>{getDataProduct().oldprice && transferPrice(getDataProduct().oldprice)}</p>}
                                        {promoActive && <p className = {cx('product-price-old')}>{getDataProduct().oldprice && transferPrice(getDataProduct().oldprice)}</p>}
                                    </div>
                                </div>
                                <div className = {cx('product-promo')}>
                                    <h2 className = {cx('promo-title')}>Chọn một trong những khuyến mãi sau</h2>
                                    <div 
                                        className = {cx('promo-item',{active: promoActive})}
                                        onClick = {()=> setPromoActive(!promoActive)}
                                    >
                                        <div className = {cx('promo-img')}>
                                            <Gift />
                                        </div>
                                        <div className={cx('promo-info')}>
                                            <p className = {cx('promo-price')}>
                                                Giảm {getDataProduct().newprice && transferPrice(getDataProduct().oldprice - getDataProduct().newprice)} / Chiếc
                                            </p>
                                            <p className = {cx('promo-condition')}>Khi mua từ 1 Chiếc trở lên</p>
                                            <p className = {cx('promo-expiry')}>HSD: 22/12/2022</p>
                                        </div>
                                    </div>
                                </div>
                                <div className = {cx('row mt-5 justify-content-between mx-0')}>
                                    <Button 
                                        to="/cart"
                                        large 
                                        primary 
                                        className = {cx('col-5')}
                                        onClick = {() => handleAddItem()}
                                    >
                                        Mua Ngay
                                    </Button>
                                    <Button 
                                        large 
                                        outline
                                        className = {cx('col-5')}
                                        onClick = {() => handleAddItem()}
                                    >
                                        Thêm vào giỏ hàng
                                    </Button>
                                </div>
                                <div className = {cx("related-promo")}>
                                    <p className = {cx("related-title")}>
                                        Khuyến mãi liên quan
                                    </p>
                                    <ul className = {cx("related-list")}>
                                        <li className={cx("related-item")}>
                                            Trả góp 6 tháng lãi suất 0% với đơn hàng lớn hơn 3tr.
                                            <a href="/">Xem chi tiết</a>
                                        </li>
                                        <li className={cx("related-item")}>
                                            Nhập mã <strong>PV100</strong> giảm thêm 5% tối đa 100.000đ khi thanh toán qua VNPAY-QR.
                                            <a href="/">Xem chi tiết</a>
                                        </li>
                                        <li className={cx("related-item")}>
                                            Nhập mã <strong>PVAPPLE</strong> giảm thêm 4% tối đa 800.000đ cho đơn hàng Apple từ 20 triệu khi thanh toán qua VNPAY-QR.
                                            <a href="/">Xem chi tiết</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                    <div className = {cx("col-3")}>
                        <div className={cx("product__policy")}>
                            <div className = {cx("policy-transport")}>
                                <Car />
                                <span>Sản phẩm được miễn phí giao hàng</span>
                            </div>
                            <div className={cx("policy-sale")}>
                                <p className = {cx("policy-sale-heading")}>Chính sách bán hàng</p>
                                <div className = {cx("policy-sale-item")}>
                                    <Truck />
                                    <span>Miễn phí giao hàng cho đơn hàng từ 800K</span>
                                </div>
                                <div className = {cx("policy-sale-item")}>
                                    <Shield />
                                    <span>Cam kết hàng chính hãng 100%</span>
                                </div>
                                <div className = {cx("policy-sale-item")}>
                                    <Change />
                                    <span>Đổi trả trong vòng 10 ngày</span>
                                </div>
                            </div>
                            <div className={cx("policy-sale")}>
                                <p className = {cx("policy-sale-heading")}>Dịch vụ khác</p>
                                <div className = {cx("policy-sale-item")}>
                                    <Settings />
                                    <span>Sửa chữa đồng giá 150.000đ.</span>
                                </div>
                                <div className = {cx("policy-sale-item")}>
                                    <Laptop />
                                    <span>Vệ sinh máy tính, laptop.</span>
                                </div>
                                <div className = {cx("policy-sale-item")}>
                                    <Shield />
                                    <span>Bảo hành tại nhà.</span>
                                </div>
                                <img className = {cx("img-fluid mt-5 rounded-4")} src = {images.adver} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <LazyLoad>{MyComponent()}</LazyLoad>
            </div>
        </div>

    )
}
export default Detail
