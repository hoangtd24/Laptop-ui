import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./ActionItem.module.scss"

const cx = classNames.bind(styles)


function ActionItem({to, href, icon, title, onClick,className,...passProps}) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    }

    if(to){
        props.to = to
        Comp = Link
    }else if(href){
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper',{
        [className]: className,
    })

    return ( 
        <Comp className={classes} {...props}>
            <button>
                <div className = {cx('action-icon')}>{icon}</div>
                <span className= {cx('action-title')}>{title}</span>
            </button>
        </Comp>
    );
}

export default ActionItem;

