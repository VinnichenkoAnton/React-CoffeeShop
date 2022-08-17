import Navigation from '../navigation/Navigation';
import CoffeeBeans from '../coffeeBeans/CoffeBeans';
import { BtnMain } from '../btn/Btn';

import styles from './mainscreen.module.scss';

const Mainscreen = ({ background, title }) => {
  const additionalInfo = (
    <>
      <CoffeeBeans colorWhite />
      <h2 className={styles.mainscreen__subtitle}>We makes every day full of energy and taste</h2>
      <h2 className={`${styles.mainscreen__subtitle} ${styles.mainscreen__subtitle_mt20}`}>
        Want to try our beans?
      </h2>
      <BtnMain />
    </>
  );

  let backgroundStyles;
  if (background === 'primary') {
    backgroundStyles = styles.mainscreen;
  } else if (background === 'secondary') {
    backgroundStyles = styles.secondary;
  } else if (background === 'tertiary') {
    backgroundStyles = styles.tertiary;
  } else {
    return;
  }

  return (
    <main className={backgroundStyles}>
      <header>
        <Navigation />
      </header>
      <h1 className={background === 'primary' ? styles.mainscreen__title : styles.secondary__title}>
        {title}
      </h1>
      {background === 'primary' && additionalInfo}
    </main>
  );
};

export default Mainscreen;
