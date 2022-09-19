import classNames from 'classnames/bind';
import { forwardRef} from 'react';
import { Link } from 'react-router-dom';
import styles from './ActionItem.module.scss';

const cx = classNames.bind(styles);

const ActionItem = forwardRef(({ to, href, icon, title, onClick, className, ...passProps },ref) =>{
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
    });

    return (
        <Comp ref = {ref} className={classes} {...props}>
            <div className={cx('action-icon')}>{icon}</div>
            <span className={cx('action-title')}>{title}</span>
        </Comp>
    );
})

export default ActionItem;
