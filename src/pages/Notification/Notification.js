import classNames from 'classnames/bind';
import styles from './Notification.module.scss';
import Category from '~/layouts/components/Category/Category';

const cx = classNames.bind(styles);
function Notification() {

    return (
        <div className={cx('wrapper')}>
            <img src='https://shopfront-cdn.tekoapis.com/static/e536f0592aa3c8b1.png' alt=''/>
            <h2 className={cx("my-4")}>Bạn chưa có thông báo mới</h2>
        </div>
    );
}

export default Notification;
