import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

import Button from '~/components/Button/Button.js';

const cx = classNames.bind(styles)
function MenuItem({ data }) {
    return (
        <Button large leftIcon={data.icon} to={data.path} className = {cx('custom-menu-item')}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
