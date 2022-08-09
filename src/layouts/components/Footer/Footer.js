import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import images from '~/assets/images'
import Policy from '~/components/Policy/Policy'
import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

function Footer(){
    const policies = [
        {
            title: 'Hỗ trợ khách hàng',
            items: [
                {
                    name: 'Thẻ ưu đãi'
                },
                {
                    name: 'Trung tâm bảo hành'
                },
                {
                    name: 'Thanh toán và giao hàng'
                },
                {
                    name: 'Dịch vụ sửa chữa và bảo trì'
                },
                {
                    name: 'Doanh nghiệp thân thiết'
                },
            ]
        },
        {
            title: 'Chính sách mua hàng và bảo hành',
            items: [
                {
                    name: 'Quy định chung'
                },
                {
                    name: 'Chính sách bảo mật thông tin'
                },
                {
                    name: 'Chính sách vận chuyển và lắp đặt'
                },
                {
                    name: 'Chính sách bảo hành'
                },
                {
                    name: 'Chính sách đổi trả và hoàn tiền'
                },
                {
                    name: 'Quy định giá cả và hình thức thanh toán'
                },
                {
                    name: 'Chính sách trả góp'
                },
            ]
        },
        {
            title: 'Thông tin Phong Vũ',
            items: [
                {
                    name: 'Giới thiệu Phong Vũ'
                },
                {
                    name: 'Thông tin liên hệ'
                },
                {
                    name: 'Hệ Thống Showroom'
                },
                {
                    name: 'Hỏi đáp'
                },
                {
                    name: 'Tin công nghệ'
                },
                {
                    name: 'Tuyển dụng'
                },
            ]
        },
        {
            title: 'Cộng đồng Phong Vũ',
            items: [
                {
                    name: 'Gọi mua hàng: 18006867'
                },
                {
                    name: 'Gọi chăm sóc: 18006865'
                },
                {
                    name: 'Phong Vũ Việt Nam'
                },
                {
                    name: 'Phong Vũ Media'
                },
                {
                    name: 'Phong Vũ hội'
                },
            ]
        },
        {
            title: 'Email liên hệ',
            items: [
                {
                    name: 'Hỗ trợ khách hàng'
                },
                {
                    name: 'Liên hệ báo giá'
                },
                {
                    name: 'Hợp tác phát triển'
                },
            ]
        },
    ]
    return(
        <div className={cx('wrapper')}>
            <div className={cx('policy')}>
                {
                    policies.map((policy, index) => <Policy data= {policy} key={index}/>)
                }
            </div>
            <div className={cx('payment')}>
                <h3 className={cx('payment-title')}>Phương thức thanh toán</h3>
                <div className={cx('payment-list')}>
                    <Link to='/' className={cx('payment-item')}>
                        <img src={images.qr} className = {cx('payment-img')} />
                        <p className={cx('payment-name')}>QR Code</p>
                    </Link>
                    <Link to='/' className={cx('payment-item')}>
                        <img src={images.money} className = {cx('payment-img')} />
                        <p className={cx('payment-name')}>Tiền mặt</p>
                    </Link>
                    <Link to='/' className={cx('payment-item')}>
                        <img src={images.time} className = {cx('payment-img')} />
                        <p className={cx('payment-name')}>Trả góp</p>
                    </Link>
                    <Link to='/' className={cx('payment-item')}>
                        <img src={images.banking} className = {cx('payment-img')} />
                        <p className={cx('payment-name')}>Banking</p>
                    </Link>
                </div>
            </div>
            <div className={cx('contact')}>
                <div className={cx('copyright')}>
                    <h2 className={cx('copyright-title')}>CÔNG TY CỔ PHẦN THƯƠNG MẠI - DỊCH VỤ PHONG VŨ</h2>
                    <p className={cx('copyright-text')}>© 1997 - 2020 Công Ty Cổ Phần Thương Mại - Dịch Vụ Phong Vũ</p>
                    <p className={cx('copyright-text')}>Giấy chứng nhận đăng ký doanh nghiệp: 0304998358 do Sở KH-ĐT TP.HCM cấp lần đầu ngày 30 tháng 05 năm 2007</p>
                </div>
                <div className={cx('location')}>
                    <div className={cx('location-item')}>
                        <p className={cx('location-name')}>Địa chỉ trụ sở chính</p>
                        <p className={cx('location-address')}>Tầng 5, Số 117-119-121 Nguyễn Du, Phường Bến Thành, Quận 1, Thành Phố Hồ Chí Minh</p>
                    </div>
                    <div className={cx('location-item')}>
                        <p className={cx('location-name')}>Văn phòng điều hành miền bắc</p>
                        <p className={cx('location-address')}>Tầng 6, Số 1 Phố Thái Hà, Phường Trung Liệt, Quận Đống Đa, Hà Nội</p>
                    </div>
                    <div className={cx('location-item')}>
                        <p className={cx('location-name')}>Văn phòng điều hành miền nam</p>
                        <p className={cx('location-address')}>Tầng 11 Minh Long Tower, số 17 Bà Huyện Thanh Quan, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer