import classNames from 'classnames';

import NavigationItem from '../navigationItem/NavigationItem';

import styles from './Navigation.module.scss';

const navItemArr = [
  {
    text: 'Coffee house',
    href: '#',
  },
  {
    text: 'Our coffee',
    href: '#',
  },
  {
    text: 'For your pleasure',
    href: '#',
  },
];

const Navigation = ({ color, align }) => {
  return (
    <nav>
      <ul className={classNames(styles.navigation, styles[`navigation_${align}`])}>
        {navItemArr.map((item, i) => {
          return <NavigationItem color={color} key={i} text={item.text} href={item.href} />;
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
