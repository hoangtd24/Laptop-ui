import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames/bind"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Slider from 'react-slick'
import styles from "./HotProducts.module.scss"

import ProductItem from "./ProductItem"

const cx = classNames.bind(styles)

function HotProducts({type,bgr,name,className}){

    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch(`https://api-laptop-shop.herokuapp.com/api/products?search=${type}`)
        .then(res=>res.json())
        .then(res=>setProducts(res.listProducts))
    },[])
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    }; 
    return(
        <Link to = "/" className={cx('wrapper',{[className]:className})}>
            <div className={cx('container')} style={{backgroundImage:`url(${bgr})`}}>
                <div className={cx('header')}>
                    <h1 className={cx('title')}>{name}</h1>
                    <Link to = '/' className = {cx('see-all')}>
                        Xem tất cả
                        <FontAwesomeIcon icon={faAngleRight} className= {cx('arrow-right')}/>
                    </Link>
                </div>
                <div className={cx('content')}>
                    <Slider {...settings} className={cx('slider')}>
                        {
                            products.map(product => <ProductItem data = {product} key={product.id}/>)
                        }
                    </Slider>
                </div>
            </div>
        </Link>
    )
}

export default HotProducts