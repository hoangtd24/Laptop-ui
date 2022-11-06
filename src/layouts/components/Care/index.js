import classNames from 'classnames/bind';
import style from './Care.module.scss';
import { System, HeadPhone, Computer, Setting } from '~/components/icons';
import CareItem from '~/components/CareItem';
import images from '~/assets/images/index.js';

const cx = classNames.bind(style);

function Care() {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('care-on-pc')}>
                    <CareItem
                        LeftIcon={<System className={cx('system-icon')} />}
                        title="Hệ thống Showroom"
                        to="/contact"
                    />
                    <CareItem
                        LeftIcon={<HeadPhone className={cx('consult-icon')} />}
                        title="Tư vấn khách hàng: "
                        contact="1800 6867"
                    />
                    <CareItem
                        LeftIcon={<HeadPhone className={cx('consult-icon')} />}
                        title="CSKH: "
                        contact="1800 6865"
                    />
                    <CareItem
                        LeftIcon={<Computer className={cx('computer-icon')} />}
                        title="Tin công nghệ"
                        to="/congnghe"
                    />
                    <CareItem
                        LeftIcon={<Setting className={cx('setting-icon')} />}
                        title="Xây dựng cấu hình"
                        to="/buildpc"
                    />
                </div>
            </div>
            <div className={cx('care-on-mobile')}>
                <img src={images.logopc} alt="" className={cx('logo-mobile')} />
            </div>
        </>
    );
}

export default Care;
