import classNames from "classnames/bind";
import styles from "./Coupon.module.scss"

const cx = classNames.bind(styles)

function Coupon() {
    return (
        <div className={cx("wrapper")}>
            <h2>Updating...</h2>
        </div>
    );
}

export default Coupon;