import classNames from 'classnames';

import NavigationItem from '../navigationItem/NavigationItem';

import styles from './Navigation.module.scss';

const navItemArr = [
  {
    text: 'Coffee house',
    to: '/',
  },
  {
    text: 'Our coffee',
    to: '/ourcoffee',
  },
  {
    text: 'For your pleasure',
    to: '/yourpleasure',
  },
];

const Navigation = ({ color, align }) => {
  return (
    <nav>
      <ul className={classNames(styles.navigation, styles[`navigation_${align}`])}>
        {navItemArr.map((item, i) => {
          return <NavigationItem color={color} key={i} text={item.text} to={item.to} />;
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
