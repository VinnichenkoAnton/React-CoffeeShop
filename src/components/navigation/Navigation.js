import classNames from 'classnames';

import NavigationItem from '../navigationItem/NavigationItem';

import styles from './Navigation.module.scss';

const navItemArr = [
  {
    text: 'Coffee house',
    to: '/',
    exact: true,
  },
  {
    text: 'Our coffee',
    to: '/ourcoffee',
    exact: false,
  },
  {
    text: 'For your pleasure',
    to: '/yourpleasure',
    exact: true,
  },
];

const Navigation = ({ color, align }) => {
  return (
    <nav>
      <ul className={classNames(styles.navigation, styles[`navigation_${align}`])}>
        {navItemArr.map((item, i) => {
          return (
            <NavigationItem
              color={color}
              key={i}
              text={item.text}
              to={item.to}
              exact={item.exact}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
