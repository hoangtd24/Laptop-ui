import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from "./SearchItem.module.scss"

const cx = classNames.bind(style)

function SearchItem({data}) {
    return ( 
        <Link to={`/@${data._id}`} className={cx('wrapper')}>
            <FontAwesomeIcon className = {cx('icon')} icon = {faMagnifyingGlass}/>
            <p className = {cx('name')}>{data.title}</p>
        </Link >
     );
}

export default SearchItem;