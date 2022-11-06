import classNames from 'classnames/bind';
import styles from './Category.module.scss';

const cx = classNames.bind(styles);
function CategoryItem({src, title }) {
    return (
        <div className={cx('category-item')}>
            <img src={src} alt="" />
            <span>{title}</span>
        </div>
    );
}

export default CategoryItem;
