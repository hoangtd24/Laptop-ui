import classNames from "classnames/bind";
import Button from "~/components/Button/Button";
import styles from "./Policy.module.scss"

const cx = classNames.bind(styles)

function Policy({data}){
    return(
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>{data.title}</h3>
            {data.items.map((item, index) => <Button key= {index} className = {cx('text-small')}>{item.name}</Button>)}
        </div>
    )
}

export default Policy