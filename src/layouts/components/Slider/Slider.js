import classNames from "classnames/bind";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from "./Slider.module.scss"

const cx = classNames.bind(styles)

function Slider({ images }) {
    return (
        <Carousel interval={5000} indicators = {false}>
            {images.map((image, index) => (
                <Carousel.Item>
                    <img src={image.src} key={index} className = {cx('slide-image')} />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Slider;
