import classNames from "classnames/bind"
import styles from "./Banner.module.scss"
import BannerItem from "./BannerItem"

const cx = classNames.bind(styles)

function Banner({images}){
    return(
        <div className={cx('wrapper')}>
            {images.map((image, index) => <BannerItem key= {index} image={image}/>)}
        </div>
        
    )
}

export default Banner