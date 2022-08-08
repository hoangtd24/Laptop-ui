import classNames from "classnames/bind"
import BrandItem from "./BrandItem/BrandItem"
import styles from './Brands.module.scss'

const cx = classNames.bind(styles)

function Brands ({brands}){
    return(
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h1 className={cx('title')}>Thương hiệu nổi bật</h1>
                <div className= {cx('content')}>
                    {brands.map((brand, index) => <BrandItem key={index} data={brand}/>)}
                </div>
            </div>
        </div>
    )
}

export default Brands