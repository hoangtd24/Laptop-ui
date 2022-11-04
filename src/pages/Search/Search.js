import { Container, Breadcrumbs, Link, Typography, Grid } from '@mui/material';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import Filter from '~/components/Filter/Filter';
import ProductItem from '~/layouts/components/HotProducts/ProductItem';
import styles from './Search.module.scss';
import { useEffect } from 'react';
import { filterProduct } from '~/features/filter/filterSlice';

const cx = classNames.bind(styles);
function Search() {
    const { category, type, page, minPrice, maxPrice, sort, productLists } = useSelector((state) => state.filter);
    console.log(productLists);
    const dispatch = useDispatch();
    useEffect(() => {
        let data = { type, page };
        if (!!sort) {
            data = { ...data, sort };
        }
        if (!!minPrice) {
            data = { ...data, minPrice };
        }
        if (!!maxPrice) {
            data = { ...data, maxPrice };
        }
        dispatch(filterProduct([category, data]));
    }, [minPrice, maxPrice, category, type, sort, page, dispatch]);

    return (
        <div className={cx('wrapper')}>
            <Container>
                <Breadcrumbs aria-label="breadcrumb" sx={{ margin: '24px 0', fontSize: '16px' }}>
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Typography color="text.primary" sx={{ fontSize: '16px' }}>
                        Search
                    </Typography>
                </Breadcrumbs>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Filter />
                    </Grid>
                    <Grid item xs={10} spacing={0} container>
                        {productLists.listProducts &&
                            productLists.listProducts.map((item, index) => (
                                <Grid item xs={2.4} key={index}>
                                    <div className='border'>
                                        <ProductItem data={item} />
                                    </div>
                                </Grid>
                            ))}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Search;
