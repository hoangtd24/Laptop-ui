import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./CartItem.module.scss"

const cx = classNames.bind(styles)

function CartItem() {
    return ( 
        <div className = {cx('wrapper')}>
            <img className = {cx('img')} src = 'https://lh3.googleusercontent.com/OG_LAurr9Wa7uo28dt2Njnsc7NZbwWmiO0eXYLWk-iyrPOGo64-nhdeoqYvFbf8fBSZr2bCnEfhVDP93P30=rw' alt = '' />
            <div className = {cx('info')}>
                <Link to = "" className = {cx('name')}>Chuột máy tính Dareu EM908</Link>
                <div className = {cx('quantity')}>
                    <span className = {cx('quantity-title')}>Số lượng </span>
                    <span className = {cx('quantity-number')}>1</span>
                </div>
                <div className = {cx('price')}>199.000đ</div>
            </div>
        </div>
    );
}

export default CartItem;