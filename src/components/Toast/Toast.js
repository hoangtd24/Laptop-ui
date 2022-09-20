import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Toast.module.scss"

const cx = classNames.bind(styles)

function Toast(){
    return(
        <div className={cx("toast")}>
             <FontAwesomeIcon icon={faCheckCircle} className = {cx("toast__icon")}/>
             <span className = {cx("toast__message")}>Thêm sản phẩm thành công</span>
        </div> 
    )
}

export default Toast