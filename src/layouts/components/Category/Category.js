import CategoryItem from '~/components/CategoryItem/CategoryItem';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import { useDispatch } from 'react-redux';
import { categoryChange, typeChange } from '~/features/filter/filterSlice';

const cx = classNames.bind(styles);
function Category() {
    const dispatch = useDispatch();
    return (
        <div className={cx('category')}>
            <CategoryItem
                src={images.category1}
                title="Laptop Siêu mượt"
                to="/search"
                onClick={() => dispatch(categoryChange('Laptop'))}
            />
            <CategoryItem
                src={images.category2}
                title="Màn Hình Giảm 18%"
                to="/search"
                onClick={() => dispatch(categoryChange('Màn%20Hình'))}
            />
            <CategoryItem
                src={images.category3}
                title="Khuyến Mãi Hot"
                to="/search"
                onClick={() => dispatch(typeChange(2))}
            />
            <CategoryItem
                src={images.category4}
                title="PC Giảm Đến 2tr"
                to="/search"
                onClick={() => dispatch(categoryChange('PC'))}
            />
            <CategoryItem
                src={images.category5}
                title="Phụ Kiện Gaming"
                to="/search"
                onClick={() => dispatch(categoryChange('Chuột'))}
            />
        </div>
    );
}

export default Category;
