import Navigation from '../navigation/Navigation';

import styles from './secondaryScreen.module.scss';

const SecondaryScreen = ({title}) => {
    return (
        <main className={styles.mainscreen}>
             <header >
                 <Navigation/>
             </header>
             <h1 className={styles.mainscreen__title}>{title}</h1>
        </main>
     )
};

export default SecondaryScreen;