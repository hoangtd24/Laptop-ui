import classNames from "classnames/bind";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from "./Slider.module.scss"

const cx = classNames.bind(styles)

function Slider({ images }) {
    return (
        <Carousel interval={3000} indicators = {false}>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img src={image.src} className = {cx('img-fluid')} alt=""/>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Slider;
