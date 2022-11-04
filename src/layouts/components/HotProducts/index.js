import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames/bind"
import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from "react-router-dom"
import Slider from 'react-slick'
import styles from "./HotProducts.module.scss"

import ProductItem from "./ProductItem"

const cx = classNames.bind(styles)

function HotProducts({type,bgr,name,className}){
    const apiProducts = `https://api-laptop-shop.herokuapp.com/api/products?search=${type}`
    
    const [loading, setLoading] = useState(false)
    const [products,setProducts] = useState([])
    useEffect(()=>{
        setLoading(true)
        fetch(apiProducts)
        .then(res=>res.json())
        .then(res=>{
            setProducts(res.listProducts)
            setLoading(false)
        })
    }, [])
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                arrows: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
              }
            }
          ]
    }; 
    return(
        <div className={cx('wrapper mx-md-3',{[className]:className})}>
            <div className={cx('slide-content')} style={{backgroundImage:`url(${bgr})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className={cx('header')}>
                    <h1 className={cx('title')}>{name}</h1>
                    <Link to = '/search' className = {cx('see-all')}>
                        Xem tất cả
                        <FontAwesomeIcon icon={faAngleRight} className= {cx('arrow-right')}/>
                    </Link>
                </div>
                <div className={cx('content')}>
                    {
                        loading ? 
                        (
                            <Slider {...settings} className={cx('slider')}>
                                <div className = {cx("px-2")}>
                                    <Skeleton height={310}/>
                                </div>
                                <div className = {cx("px-2")}>
                                    <Skeleton height={310}/>
                                </div>
                                <div className = {cx("px-2")}>
                                    <Skeleton height={310}/>
                                </div>
                                <div className = {cx("px-2")}>
                                    <Skeleton height={310}/>
                                </div>
                                <div className = {cx("px-2")}>
                                    <Skeleton height={310}/>
                                </div>
                            </Slider>
                        )
                            : 
                        (   
                            <Slider {...settings} className={cx('slider')}>
                                {
                                    products.map(product => <ProductItem data = {product} key={product._id}/>)
                                }
                            </Slider>
                        ) 
                    }
                </div>
            </div>
        </div>
    )
}

export default HotProducts