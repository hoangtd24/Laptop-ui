import style from "./DefaultLayout.module.scss"
import classNames from "classnames/bind";

import Header from "~/layouts/components/Header";
import Care from "~/layouts/components/Care";
import SideBar from "./SideBar";

const cx = classNames.bind(style)
function DefaultLayout({children}) {
    return ( 
        <div className = {cx("wrapper")}>
            <Care />
            <Header />
            <div className = {cx("container")}>
                <SideBar />
                <div className = {cx("content")}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;