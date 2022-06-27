import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import style from "./SearchItem.module.scss"

const cx = classNames.bind(style)

function SearchItem() {
    return ( 
        <div className={cx('wrapper')}>
            <FontAwesomeIcon className = {cx('icon')} icon = {faMagnifyingGlass}/>
            <p className = {cx('name')}>laptop asus</p>
        </div>
     );
}

export default SearchItem;