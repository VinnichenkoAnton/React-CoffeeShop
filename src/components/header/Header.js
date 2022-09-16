import classNames from 'classnames/bind';

import Navigation from '../navigation/Navigation';
import CoffeeBeans from '../coffeeBeans/CoffeBeans';
import { BtnMain } from '../btn/Btn';

import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = ({ screen, title }) => {
  const additionalInfo = (
    <>
      <CoffeeBeans coffeeColor="white" />
      <h2 className={styles.mainscreen__subtitle}>We makes every day full of energy and taste</h2>
      <h2 className={classNames(styles.mainscreen__subtitle, styles.mainscreen__subtitle_mt20)}>
        Want to try our beans?
      </h2>
      <NavLink to="/ourcoffee" className={styles.mainscreen__button}>
        <BtnMain />
      </NavLink>
    </>
  );

  return (
    <main className={classNames(styles[`${screen}`])}>
      <header>
        <Navigation align="alignleft" color="white" />
      </header>
      <h1 className={classNames(styles[`${screen}__title`])}>{title}</h1>
      {screen === 'mainscreen' && additionalInfo}
    </main>
  );
};

export default Header;
