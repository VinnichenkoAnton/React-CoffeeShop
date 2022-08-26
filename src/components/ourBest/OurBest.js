import { productsArr } from '../../mocks/productsArr';
import ProductCard from '../productCard/ProductCard';
import Subtitle from '../subtitle/Subtitle';

import styles from './OurBest.module.scss';

const OurBest = () => {
  const bestOfProductsArr = [productsArr[0], productsArr[1], productsArr[2]];
  const items = bestOfProductsArr.map((item, i) => {
    return (
      <ProductCard
        key={i}
        tabIndex={0}
        src={item.img}
        name={item.name}
        price={item.price}
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
