import CategoryItem from '~/components/Category/CategoryItem';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from "./Category.module.scss"

const cx = classNames.bind(styles)
function Category() {
    return (
        <div className={cx("category")}>
            <CategoryItem src={images.category1} title="Laptop Siêu mượt" />
            <CategoryItem src={images.category2} title="Màn Hình Giảm 18%" />
            <CategoryItem src={images.category3} title="Khuyến Mãi Hot" />
            <CategoryItem src={images.category4} title="PC Giảm Đến 2tr" />
            <CategoryItem src={images.category5} title="Phụ Kiện Gaming" />
        </div>
    );
}

export default Category;
