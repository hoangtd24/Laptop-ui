import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Category.module.scss';

const cx = classNames.bind(styles);
function CategoryItem({src, title, to, onClick }) {
    return (
        <Link className={cx('category-item')} to={to} onClick={onClick}>
            <img src={src} alt="" />
            <span>{title}</span>
        </Link>
    );
}

export default CategoryItem;
