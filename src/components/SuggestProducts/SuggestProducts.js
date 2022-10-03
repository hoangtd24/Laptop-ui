import { Link } from "react-router-dom"
import styles from "./SuggestProducts.module.scss"
import className from "classnames/bind"
import ProductItem from "~/layouts/components/HotProducts/ProductItem"
import { useEffect, useState } from "react"

const cx = className.bind(styles)
const pages = [1,2,3,4,5,6]
function SuggestProducts(){
    const scrollToView = () => {
        window.scrollTo({
            top: 1800,
            behavior: 'smooth'
        })
    }
    const [products,setProducts] =useState([])
    const [currentPage,setCurrentPage] = useState(1)
    useEffect(() => {
        fetch(`https://api-laptop-shop.herokuapp.com/api/products?page=${currentPage}`)
        .then(res => res.json())
        .then(res => setProducts(res.listProducts))
    },[currentPage])
    return (
        <div className = {cx("mt-5 mx-md-3")}>
            <div className = {cx("container-lg d-flex p-4 justify-content-between border rounded-top")}>
                <h1>Dành cho bạn</h1>
            </div>
            <div className = {cx("container-lg p-0")}>
                <div className={cx("row row-cols-2 row-cols-md-4 row-cols-lg-5 mx-0")}>
                    {
                        products.map((product,index) => <div className={cx("col border p-0")} key={index}>
                                                <ProductItem data={product}/>
                                            </div>)
                    }
                </div>
            </div>
            <div className={cx("d-flex justify-content-center mt-5")}>
                <ul className={cx("pagination pagination-lg")}>
                    {currentPage>1 && 
                        <li className={cx("page-item")}>
                            <p 
                                className={cx("page-link")} 
                                onClick= {() =>{
                                    scrollToView()
                                    setCurrentPage(prev => prev - 1)
                                    }
                                }
                            >
                                Previous
                            </p>
                        </li>
                    }
                    {pages.map((page, index) => <li className={cx("page-item")} key={index}>
                        <p 
                            className={cx("page-link",{active: currentPage=== index + 1})} 
                            onClick= {() => {
                                scrollToView()
                                setCurrentPage(page)
                                }
                            }
                        >
                            {page}
                        </p>
                    </li>)}
                    {currentPage < 6 && 
                        <li className={cx("page-item")}>
                            <p 
                                className={cx("page-link")} 
                                onClick= {() => {
                                    scrollToView()
                                    setCurrentPage(prev => prev + 1)
                                    }
                                }
                            >
                                Next
                            </p>
                        </li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default SuggestProducts