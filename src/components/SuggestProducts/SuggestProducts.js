import styles from './SuggestProducts.module.scss';
import className from 'classnames/bind';
import ProductItem from '~/layouts/components/HotProducts/ProductItem';
import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';

const cx = className.bind(styles);
function SuggestProducts() {
    const handleChange = (event, value) => {
        setCurrentPage(value)
        window.scrollTo({
            top: 1800,
            behavior: 'smooth'
        })
      };
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        fetch(`https://api-laptop-shop.herokuapp.com/api/products?page=${currentPage}`)
            .then((res) => res.json())
            .then((res) => setProducts(res.listProducts));
    }, [currentPage]);
    return (
        <div className={cx('mt-5 mx-md-3')}>
            <div className={cx('suggest-content')}>
                <h1>Dành cho bạn</h1>
                <div className={cx('container-lg p-0')}>
                    <div className={cx('row row-cols-2 row-cols-md-4 row-cols-lg-5 mx-0')}>
                        {products.map((product, index) => (
                            <div className={cx('col border p-0')} key={index}>
                                <ProductItem data={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={cx('d-flex justify-content-center mt-5')}>
                <ul className={cx('pagination')}>
                    <Pagination count={10} color="primary" size='large'page={currentPage} onChange={handleChange}/>
                </ul>
            </div>
        </div>
    );
}

export default SuggestProducts;
