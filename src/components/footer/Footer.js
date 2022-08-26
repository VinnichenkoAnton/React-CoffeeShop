import Navigation from '../navigation/Navigation';
import CoffeeBeans from '../coffeeBeans/CoffeBeans';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Navigation align="aligncenter" color="black" />
      <CoffeeBeans coffeeColor="black" />
    </footer>
  );
};

export default Footer;
