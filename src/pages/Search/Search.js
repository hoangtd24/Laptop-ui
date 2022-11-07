import { Container, Breadcrumbs, Link, Typography, Grid, Pagination, Hidden } from '@mui/material';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import Filter from '~/components/Filter/Filter';
import ProductItem from '~/layouts/components/HotProducts/ProductItem';
import styles from './Search.module.scss';
import { useEffect, useState } from 'react';
import { filterProduct, pageChange } from '~/features/filter/filterSlice';
import React from 'react';
import Button from '~/components/Button/Button';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const cx = classNames.bind(styles);
function Search() {
    const { category, type, page, minPrice, maxPrice, sort, productLists } = useSelector((state) => state.filter);
    const [showFilter, setShowFilter] = useState(false)
    const dispatch = useDispatch();
    const handleChange = (event, value) => {
        dispatch(pageChange(value));
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

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
                    <Grid item xs={0} sm={2} md={2}>
                        <Filter showFilter={showFilter} setShowFilter={setShowFilter}/>
                    </Grid>
                    <Hidden smUp>
                        <Grid item xs={12} sm={0} md={0}>
                            <Button rightIcon={<FilterAltOutlinedIcon sx={{ fontSize: '18px' }} onClick={() => setShowFilter(true)}/>}>Bộ lọc</Button>
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} sm={10} md={10} spacing={0} container>
                        {productLists.listProducts &&
                            productLists.listProducts.map((item, index) => (
                                <Grid item xs={4} sm={3} lg={2.4} key={index}>
                                    <div className="border">
                                        <ProductItem data={item} />
                                    </div>
                                </Grid>
                            ))}
                    </Grid>
                </Grid>
                <div className={cx('pagination')}>
                    <Pagination
                        count={productLists.totalPage}
                        color="primary"
                        size="large"
                        page={page}
                        onChange={handleChange}
                    />
                </div>
            </Container>
        </div>
    );
}

export default Search;
