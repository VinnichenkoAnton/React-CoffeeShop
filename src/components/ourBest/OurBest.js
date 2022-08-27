import { productsArr } from '../../mocks/productsArr';
import ProductCard from '../productCard/ProductCard';
import Subtitle from '../subtitle/Subtitle';

import styles from './OurBest.module.scss';

const OurBest = () => {
  const bestProductsArr = [productsArr[0], productsArr[1], productsArr[2]];
  const items = bestProductsArr.map(({ id, img, name, price }) => {
    return (
      <ProductCard
        id={id}
        key={id}
        tabIndex={0}
        src={img}
        name={name}
        price={price}
        background="bgyel"
      />
    );
  });

  return (
    <section className={styles.ourbest}>
      <Subtitle text="Our best" />
      <ul className={styles.ourbest__list}>{items}</ul>
    </section>
  );
};

export default OurBest;
