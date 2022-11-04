import { Accordion, AccordionSummary, AccordionDetails, Typography, Radio, RadioGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

import classNames from 'classnames/bind';
import Button from '../Button/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './Filter.module.scss';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    categoryChange,
    sortChange,
    filterProduct,
    maxPriceChange,
    minPriceChange,
    typeChange,
} from '~/features/filter/filterSlice';

const cx = classNames.bind(styles);

function Filter() {
    const { category, type, page, minPrice, maxPrice, filter} = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const handleMinPrice = (e) => {
        dispatch(minPriceChange(e.target.value));
    };
    const handleMaxPrice = (e) => {
        dispatch(maxPriceChange(e.target.value));
    };
    const handleCategoryChange = (e) => {
        dispatch(categoryChange(e.target.value));
    };
    const handleTypeChange = (e) => {
        dispatch(typeChange(e.target.value));
    };
    const handleSortChange = (e) => {
        dispatch(sortChange(e.target.value));
    };

    useEffect(() => {
        let data = { type, page };
        if (!!filter) {
            data = { ...data, filter };
        }
        if (!!minPrice) {
            data = { ...data, minPrice };
        }
        if (!!maxPrice) {
            data = { ...data, maxPrice };
        }
        console.log(data);
        dispatch(filterProduct([category, data]));
    }, [minPrice, maxPrice, category, type, filter, page, dispatch]);

    return (
        <div className={cx('wrapper')}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ fontSize: '20px' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ fontSize: '14px' }}>Giá</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <input
                        placeholder="Giá thấp nhất"
                        className={cx('input-price')}
                        value={minPrice}
                        onChange={handleMinPrice}
                    />
                    <input
                        placeholder="Giá cao nhất"
                        className={cx('input-price')}
                        value={maxPrice}
                        onChange={handleMaxPrice}
                    />
                    <Button primary small className={cx('search-btn')}>
                        Tìm
                    </Button>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ fontSize: '20px' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ fontSize: '14px' }}>Danh mục</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Laptop"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel
                            className={cx('lable')}
                            value="Laptop"
                            control={<Radio />}
                            label="Laptop"
                            onChange={handleCategoryChange}
                        />
                        <FormControlLabel
                            className={cx('lable')}
                            value="Màn%20Hình"
                            control={<Radio />}
                            label="Màn hình"
                            onChange={handleCategoryChange}
                        />
                        <FormControlLabel
                            className={cx('lable')}
                            value="Chuột"
                            control={<Radio />}
                            label="Chuột"
                            onChange={handleCategoryChange}
                        />
                        <FormControlLabel
                            className={cx('lable')}
                            value="Bàn%20Phím"
                            control={<Radio />}
                            label="Bàn phím"
                            onChange={handleCategoryChange}
                        />
                        <FormControlLabel
                            className={cx('lable')}
                            value="PC"
                            control={<Radio />}
                            label="PC"
                            onChange={handleCategoryChange}
                        />
                    </RadioGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ fontSize: '20px' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ fontSize: '14px' }}>Loại sản phẩm</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="1"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel
                            className={cx('lable')}
                            value="1"
                            control={<Radio />}
                            label="Mới về"
                            onChange={handleTypeChange}
                        />
                        <FormControlLabel
                            className={cx('lable')}
                            value="2"
                            control={<Radio />}
                            label="Khuyến mãi tốt"
                            onChange={handleTypeChange}
                        />
                        <FormControlLabel
                            className={cx('lable')}
                            value="3"
                            control={<Radio />}
                            label="Bán chạy"
                            onChange={handleTypeChange}
                        />
                    </RadioGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ fontSize: '20px' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ fontSize: '14px' }}>Sắp xếp theo</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            className={cx('lable')}
                            value="1"
                            control={<Radio />}
                            label="Giá tăng dần"
                            onChange={handleSortChange}
                        />
                        <FormControlLabel
                            className={cx('lable')}
                            value="-1"
                            control={<Radio />}
                            label="Giá giảm dần"
                            onChange={handleSortChange}
                        />
                    </RadioGroup>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default Filter;
