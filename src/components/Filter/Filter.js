import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Radio,
    RadioGroup,
    FormGroup,
    Checkbox,
} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

import classNames from 'classnames/bind';
import Button from '../Button/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './Filter.module.scss';

const cx = classNames.bind(styles);

function Filter() {
    return (
        <div className={cx('wrapper')}>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{fontSize: '20px'}}/>} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography sx={{fontSize: '14px'}}>Giá</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <input placeholder="Giá thấp nhất" className={cx('input-price')} />
                    <input placeholder="Giá cao nhất" className={cx('input-price')} />
                    <Button primary small className={cx('search-btn')}>
                        Tìm
                    </Button>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{fontSize: '20px'}} />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography sx={{fontSize: '14px'}}>Danh mục</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel className={cx("lable")} value="female" control={<Radio />} label="Laptop" />
                        <FormControlLabel className={cx("lable")} value="male" control={<Radio />} label="Màn hình" />
                        <FormControlLabel className={cx("lable")} value="other" control={<Radio />} label="Chuột" />
                        <FormControlLabel className={cx("lable")} value="keyboard" control={<Radio />} label="Bàn phím" />
                        <FormControlLabel className={cx("lable")} value="pc" control={<Radio />} label="PC" />
                    </RadioGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{fontSize: '20px'}} />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography sx={{fontSize: '14px'}}>Sắp xếp theo</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <FormControlLabel className={cx("lable")} control={<Checkbox />} label="Mới về" />
                        <FormControlLabel className={cx("lable")} control={<Checkbox />} label="Khuyến mãi tốt nhất" />
                        <FormControlLabel className={cx("lable")} control={<Checkbox />} label="Bán chạy" />
                        <FormControlLabel className={cx("lable")} control={<Checkbox />} label="Giá tăng dần" />
                        <FormControlLabel className={cx("lable")} control={<Checkbox />} label="Giá giảm dần" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default Filter;
