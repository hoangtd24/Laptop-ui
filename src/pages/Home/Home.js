import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slider from '~/layouts/components/Slider/Slider';
import images from '~/assets/images';

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
    return (
        <div className={cx('wrapper')}>
            <Slider images = {slideImages}/>
        </div>
    );
}

export default Home;
