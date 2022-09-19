import classNames from "classnames/bind"
import styles from "./ProductSpecifications.module.scss"

const cx = classNames.bind(styles)

function ProductSpecifications(){
    return (
        <div className={cx("wrapper")}>
            <h1>Thông số chi tiết</h1>
            <table className={cx("table-specifications")}>
                <tbody>

                    <tr>
                        <td>Thương hiệu</td>
                        <td>Apple</td>
                    </tr>
                    <tr>
                        <td>Bảo hành</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td className={cx("heading")}>Thông tin chung</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Series laptop</td>
                        <td>Vostro</td>
                    </tr>
                    <tr>
                        <td>Part-number</td>
                        <td>YX51W6</td>
                    </tr>
                    <tr>
                        <td>Màu Sắc</td>
                        <td>Đen</td>
                    </tr>
                    <tr>
                        <td>Thế hệ CPU</td>
                        <td>Core i5 , Intel Core thế hệ thứ 11</td>
                    </tr>
                    <tr>
                        <td>CPU</td>
                        <td>Intel Core i5-1135G7 ( 2.4 GHz - 4.2 GHz / 8MB / 4 nhân, 8 luồng )</td>
                    </tr>
                    <tr>
                        <td>Chip đồ họa</td>
                        <td>NVIDIA GeForce MX330 2GB GDDR5 / Intel Iris Xe Graphics</td>
                    </tr>
                    <tr>
                        <td>RAM</td>
                        <td>1 x 8GB DDR4 3200MHz ( 2 Khe cắm</td>
                    </tr>
                    <tr>
                        <td>Màn hình</td>
                        <td>14" ( 1920 x 1080 ) Full HD không cảm ứng , Màn hình chống lóa , HD webcam</td>
                    </tr>
                    <tr>
                        <td>Thế hệ CPU</td>
                        <td>Core i5 , Intel Core thế hệ thứ 11</td>
                    </tr>
                    <tr>
                        <td>Pin</td>
                        <td>50 Wh , Pin liền</td>
                    </tr>
                    <tr>
                        <td>Khối lượng</td>
                        <td>1.3 kg</td>
                    </tr>
                    <tr>
                        <td className={cx("heading")}>Thông tin Khác</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Mic</td>
                        <td>Có</td>
                    </tr>
                    <tr>
                        <td>Bảo mật</td>
                        <td>Vân tay</td>
                    </tr>
                    <tr>
                        <td>Đèn LED trên máy</td>
                        <td>LED</td>
                    </tr>
                    <tr>
                        <td>Phụ kiện đi kèm</td>
                        <td>Adapter 30W, dây sạc</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductSpecifications