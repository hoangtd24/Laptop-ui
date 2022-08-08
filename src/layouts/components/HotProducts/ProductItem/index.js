import classNames from "classnames/bind"
import { Link } from "react-router-dom"
import { Car } from "~/components/icons"
import styles from "./ProductItem.module.scss"


const cx = classNames.bind(styles)

function ProductItem({data}){
    return(
        <Link to= {`@${data._id}`} className={cx('product')}>
            <img src = {data.image} className={cx('product-img')} />
            <div className = {cx('product-lable')}>
                <p className = {cx('product-title')}>TIẾT KIỆM</p>
                <p className={cx('product-save')}>{data.oldprice - data.newprice} đ</p>
            </div>
            <div className= {cx('product-name')}>{data.title}</div>
            <div className= {cx('product-info')}>
                <div className={cx('product-price')}>
                    <p className = {cx('product-price-current')}>{data.newprice}đ</p>
                    <p className = {cx('product-price-old')}>{data.oldprice}đ</p>
                </div>
                <div className = {cx('product-transport')}>
                    <Car />
                </div>
            </div>
        </Link>
    )
}

export default ProductItem