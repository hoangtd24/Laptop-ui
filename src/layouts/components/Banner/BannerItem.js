import classNames from "classnames/bind"
import styles from "./Banner.module.scss"
import { Link } from "react-router-dom"
const cx = classNames.bind(styles)

function BannerItem({image}){
    return(
        <div className={cx('content')}>
            <Link to = '/' className= {cx('banner-link')}>
                <img src={image.src} className = {cx('banner')}/>
            </Link>
            <span className={cx('banner-name')}>{image.name}</span>
        </div>
    )
}

export default BannerItem