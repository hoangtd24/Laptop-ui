import classNames from "classnames/bind";
import style from "./OnlyHeader.module.scss"
import Header from "~/layouts/components/Header";
import Care from "~/layouts/components/Care";

const cx = classNames.bind(style)
function OnlyHeader({children}) {
    return ( 
        <div className ={cx("wrapper")}>
            <Care />
            <Header />
            <div className = {cx("container")}>
                <div className = {cx("content")}>{children}</div>
            </div>
        </div>
    );
}

export default OnlyHeader;