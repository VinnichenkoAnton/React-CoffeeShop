import classNames from 'classnames/bind';

import styles from './navigationItem.module.scss';

const NavigationItem = ({ color, text, href }) => {
  return (
    <li className={classNames(styles.navigationitem, styles[`navigationitem_${color}`])}>
      <a href={href}>{text}</a>
    </li>
  );
};

export default NavigationItem;
