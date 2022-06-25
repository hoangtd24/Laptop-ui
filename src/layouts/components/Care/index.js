import classNames from "classnames/bind";
import style from "./Care.module.scss"

const cx = classNames.bind(style)
function Care() {
    return ( 
        <div className = {cx("wrapper")}>
            <div className={cx("container")}>

            </div>
        </div>
    );
}

export default Care;