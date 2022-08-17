import { productsArr } from '../../mocks/productsArr';
import ProductItem from '../productItem/ProductItem';

import styles from './ourBest.module.scss';

const OurBest = () => {
  const items = productsArr.map((item, i) => {
    return <ProductItem key={i} tabIndex={0} src={item.img} name={item.name} price={item.price} />;
  });

  return (
    <section className={styles.ourbest}>
      <h3 className={styles.ourbest__title}>Our best</h3>
      <ul className={styles.ourbest__list}>{items}</ul>
    </section>
  );
};

export default OurBest;
