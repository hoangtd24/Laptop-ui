import classNames from "classnames/bind"
import SideBar from "~/layouts/DefaultLayout/SideBar"
import styles from "./Detail.module.scss"

const cx = classNames.bind(styles)

function Detail(){
    return(
        <div className={cx('wrapper')}>
            <h2>Profile Page</h2>
            <SideBar />
        </div>

    )
}
export default Detail