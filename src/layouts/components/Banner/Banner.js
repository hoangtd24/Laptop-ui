import classNames from "classnames/bind"
import styles from "./Banner.module.scss"
import BannerItem from "./BannerItem"

const cx = classNames.bind(styles)

function Banner({images}){
    return(
        <div className={cx('wrapper')}>
            <div className={cx("container-lg")}>
                <div className={cx("row justify-content-between")}>
                    {images.map((image, index) => 
                    <div key= {index} className={cx("col-3 p-0")}>
                        <BannerItem image={image}/>
                    </div>
                    )}
                </div>
            </div>
        </div>
        
    )
}

export default Banner