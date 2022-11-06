import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.scss';
import images from '~/assets/images';

import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const cx = classNames.bind(styles);

function Slider({ imageSlider }) {
    return (
        <>
            <div className={cx('slide-on-pc')}>
                <Swiper
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    mousewheel={true}
                    keyboard={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Pagination, Keyboard, Autoplay]}
                >
                    {imageSlider.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img src={image.src} className={cx('img-fluid')} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={cx('slide-on-mobile')}>
                <Swiper
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    mousewheel={true}
                    keyboard={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Pagination, Keyboard, Autoplay]}
                >
                    <SwiperSlide>
                        <img src={images.slideMobile1} className={cx('img-fluid')} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={images.slideMobile2} className={cx('img-fluid')} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={images.slideMobile3} className={cx('img-fluid')} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={images.slideMobile4} className={cx('img-fluid')} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={images.slideMobile5} className={cx('img-fluid')} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={images.slideMobile6} className={cx('img-fluid')} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={images.slideMobile7} className={cx('img-fluid')} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

export default Slider;
