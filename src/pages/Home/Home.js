import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slider from '~/layouts/components/Slider/Slider';
import images from '~/assets/images';
import Banner from '~/layouts/components/Banner/Banner';
import HotProducts from '~/layouts/components/HotProducts';
import Brands from '~/layouts/components/Brands/Brands';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SuggestProducts from '~/components/SuggestProducts/SuggestProducts';


const cx = classNames.bind(styles)
function Home() {
    const slideImages = [
        {
            src: images.slideImage1,
        },
        {
            src: images.slideImage3,
        },
        {
            src: images.slideImage4,
        },
        {
            src: images.slideImage5,
        },
        {
            src: images.slideImage6,
        },
        {
            src: images.slideImage7,
        },
        {
            src: images.slideImage8,
        },
    ];

    const BannerImages1 = [
        {
            src: images.banner1,
        },
        {
            src: images.banner2,
        },
        {
            src: images.banner3,
        },
        {
            src: images.banner4,
        },
        
    ];

    const brands = [
        {
            src: images.brand1,
            name: 'Asus'
        },
        {
            src: images.brand2,
            name: 'Microsoft'
        },
        {
            src: images.brand3,
            name: 'Hp'
        },
        {
            src: images.brand4,
            name: 'Lenovo'
        },
        
    ];
    return (
        <div className={cx('wrapper')}>
            <Slider images = {slideImages}/>
            <Banner images = {BannerImages1}/>
            <div className={cx('content')}>
                <HotProducts type = 'laptop' bgr={images.backgroundImage} name='Laptop' className={cx('slide-product')}/> 
                <HotProducts type = 'chu' bgr={images.backgroundImage1} name='Chuột'className={cx('slide-product')}/>
                <Brands brands={brands}/>
                <SuggestProducts />
            </div>
        </div>
    );
}

export default Home;
