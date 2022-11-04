import { Container, Breadcrumbs, Link, Typography, Grid } from '@mui/material';
import classNames from 'classnames/bind';
import Filter from '~/components/Filter/Filter';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
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
                    <Grid item xs={10}></Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Search;
