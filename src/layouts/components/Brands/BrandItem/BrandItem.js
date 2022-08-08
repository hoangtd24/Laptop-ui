import classNames from "classnames/bind"
import styles from '../Brands.module.scss'

const cx = classNames.bind(styles)
function BrandItem({data}){
    return (
        <div className={cx('brand')}>
            <div className={cx('brand-img')}>
                <img className={cx('img')} src = {data.src} />
            </div>
            <span className={cx('brand-name')}>{data.name}</span>
        </div>
    )
}

export default BrandItem