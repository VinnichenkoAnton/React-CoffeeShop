import { ReactComponent as ThreeCoffeeBeans } from '../../resources/threeCoffeeBeans.svg';

import classNames from 'classnames/bind';

import styles from './CoffeeBeans.module.scss';

const CoffeeBeans = ({ coffeeColor }) => {
  return (
    <div className={classNames(styles.coffeebeans, styles[`coffeebeans_${coffeeColor}`])}>
      <ThreeCoffeeBeans />
    </div>
  );
};

export default CoffeeBeans;
