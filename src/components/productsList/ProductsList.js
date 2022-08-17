import { productsArr } from '../../mocks/productsArr';
import ProductItem from '../productItem/ProductItem';

import styles from './productsList.module.scss';

const ProductsList = () => {
  const modifiedProductsArr = [productsArr[0], productsArr[1], productsArr[2], productsArr[1]];
  return (
    <section>
      <ul className={styles.products__list}>
        {modifiedProductsArr.map((item, i) => {
          return (
            <ProductItem
              key={i}
              tabIndex={0}
              src={item.img}
              name={item.name}
              price={item.price}
              country={item.country}
              background="bgwhite"
            />
          );
        })}
      </ul>
    </section>
  );
};

export default ProductsList;
