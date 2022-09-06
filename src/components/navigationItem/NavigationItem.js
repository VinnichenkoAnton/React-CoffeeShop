import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import styles from './NavigationItem.module.scss';

const NavigationItem = ({ color, text, to }) => {
  return (
    <li className={classNames(styles.navigationitem, styles[`navigationitem_${color}`])}>
      <NavLink
        className={({ isActive }) =>
          classNames(styles.navigationitem_inactive, isActive ? styles.navigationitem_active : '')
        }
        to={to}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
