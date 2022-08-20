import ProductItem from '../productItem/ProductItem';

import styles from './productsList.module.scss';

const ProductsList = ({ filteredProductsList }) => {
  return (
    <section>
      <ul className={styles.products__list}>
        {filteredProductsList.map((item, i) => {
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
