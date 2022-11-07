import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './CareItem.module.scss';

const cx = classNames.bind(style);

function CareItem({ LeftIcon, title, to = '', contact = '', className }) {
    return (
        <Link to={to} className={cx('wrapper', className)}>
            <span className={cx('icon')}>{LeftIcon}</span>
            <span className={cx('title')}>{title}</span>
            <span className={cx('contact')}>{contact}</span>
        </Link>
    );
}

export default CareItem;
