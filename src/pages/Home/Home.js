import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slider from '~/layouts/components/Slider/Slider';
import images from '~/assets/images';
import Banner from '~/layouts/components/Banner/Banner';

const cx = classNames.bind(styles)
function Home() {
    const slideImages = [
        {
            src: images.slideImage1,
        },
        {
            src: images.slideImage2,
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
    return (
        <div className={cx('wrapper')}>
            <Slider images = {slideImages}/>
            <Banner images = {BannerImages1}/>
        </div>
    );
}

export default Home;
