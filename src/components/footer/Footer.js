import Navigation from '../navigation/Navigation';
import CoffeeBeans from '../coffeeBeans/CoffeBeans';

import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Navigation  colorBlack />
            <CoffeeBeans/>
        </footer>
    )
};

export default Footer;