import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';
import Category from '~/layouts/components/Category/Category';

const cx = classNames.bind(styles);
function Dashboard() {

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx("my-4")}>Danh mục sản phẩm</h2>
            <Category />
        </div>
    );
}

export default Dashboard;
