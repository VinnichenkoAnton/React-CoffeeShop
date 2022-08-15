import Navigation from "../navigation/Navigation";
import CoffeeBeans from "../coffeeBeans/CoffeBeans";
import Btn from "../btn/Btn";

import styles from './mainscreen.module.scss';

const Mainscreen = () => {
    return (
       <main className={styles.mainscreen}>
            <header >
                <Navigation/>
            </header>
            <h1 className={styles.mainscreen__title}>Everything You Love About Coffee</h1>
            <CoffeeBeans colorWhite/>
            <h2 className={styles.mainscreen__subtitle}>We makes every day full of energy and taste</h2>
            <h2 className={`${styles.mainscreen__subtitle} ${styles.mainscreen__subtitle_mt20}`}>Want to try our beans?</h2>
            <Btn/>
       </main>
    )
};

export default Mainscreen;