import classNames from "classnames/bind"
import BrandItem from "./BrandItem/BrandItem"
import styles from './Brands.module.scss'

const cx = classNames.bind(styles)

function Brands ({brands}){
    return(
        <div className={cx('wrapper')}>
            <div className={cx('brand-content')} style={{backgroundColor: "rgb(233, 233, 233)"}}>
                <h1 className={cx('title')}>Thương hiệu nổi bật</h1>
                <div className= {cx('content')}>
                    <div className={cx("row w-100")}>
                        {brands.map((brand, index) => <div className={cx("col-3")} key={index}>
                                <BrandItem data={brand}/>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands