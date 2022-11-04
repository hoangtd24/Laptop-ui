import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import transferPrice from "../TranferPrice/tranferPrice";
import styles from "./CartItem.module.scss"

const cx = classNames.bind(styles)

function CartItem({data}) {
    return ( 
        <div className = {cx('wrapper')}>
            <img className = {cx('img')} src ={data.item.image} alt = '' />
            <div className = {cx('info')}>
                <Link to = "" className = {cx('name')}>{data.item.title}</Link>
                <div className = {cx('quantity')}>
                    <span className = {cx('quantity-title')}>Số lượng </span>
                    <span className = {cx('quantity-number')}>{data.quantity}</span>
                </div>
                <div className = {cx('price')}>{transferPrice(data.item.newprice)}</div>
            </div>
        </div>
    );
}

export default CartItem;