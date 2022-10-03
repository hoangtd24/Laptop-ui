import classNames from "classnames/bind"
import { Link } from "react-router-dom"
import { Car } from "~/components/icons"
import styles from "./ProductItem.module.scss"
import transferPrice from "~/components/TranferPrice/tranferPrice"

const cx = classNames.bind(styles)

function ProductItem({data}){
    return(
        <Link to= {`@${data._id}`} className={cx('product')}>
            <img src = {data.image} className={cx('product-img')} alt=""/>
            <div className = {cx('product-lable')}>
                <p className = {cx('product-title')}>TIẾT KIỆM</p>
                <p className={cx('product-save')}>{transferPrice(data.oldprice - data.newprice)}</p>
            </div>
            <div className= {cx('product-name')}>{data.title}</div>
            <div className= {cx('product-info')}>
                <div className={cx('product-price')}>
                    <p className = {cx('product-price-current')}>{transferPrice(data.newprice)}</p>
                    <p className = {cx('product-price-old')}>{transferPrice(data.oldprice)}</p>
                </div>
                <div className = {cx('product-transport')}>
                    <Car />
                </div>
            </div>
        </Link>
    )
}

export default ProductItem