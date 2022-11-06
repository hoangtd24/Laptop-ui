import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';
import styles from './HotProducts.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

// Import Swiper styles

import ProductItem from './ProductItem';

const cx = classNames.bind(styles);

function HotProducts({ type, bgr, name, className }) {
    const apiProducts = `https://api-laptop-shop.herokuapp.com/api/products?search=${type}`;

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch(apiProducts)
            .then((res) => res.json())
            .then((res) => {
                setProducts(res.listProducts);
                setLoading(false);
            });
    }, [apiProducts]);
    return (
        <div className={cx('wrapper mx-md-3', { [className]: className })}>
            <div
                className={cx('slide-content')}
                style={{ backgroundImage: `url(${bgr})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
            >
                <div className={cx('header')}>
                    <h1 className={cx('title')}>{name}</h1>
                    <Link to="/search" className={cx('see-all')}>
                        Xem tất cả
                        <FontAwesomeIcon icon={faAngleRight} className={cx('arrow-right')} />
                    </Link>
                </div>
                <div className={cx('content')}>
                    {loading ? (
                        <Swiper slidesPerView={5} spaceBetween={10}>
                            <SwiperSlide>
                                <Skeleton height={310} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Skeleton height={310} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Skeleton height={310} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Skeleton height={310} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Skeleton height={310} />
                            </SwiperSlide>
                        </Swiper>
                    ) : (
                        <Swiper
                            spaceBetween={10}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                            breakpoints={{
                                300: {
                                    slidesPerView: 2,
                                },
                                576: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 4,
                                },
                                1024: {
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            {products.map((product) => (
                                <SwiperSlide key={product._id}>
                                    <ProductItem data={product} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HotProducts;
