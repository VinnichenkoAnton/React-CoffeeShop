import ProductCard from '../productCard/ProductCard';

import styles from './ProductsList.module.scss';

const ProductsList = ({ filteredProductsList }) => {
  const itemChoseHandler = (productId) => {
    console.log(productId);
  };
  return (
    <section>
      <ul className={styles.products__list}>
        {filteredProductsList.map((item) => {
          return (
            <ProductCard
              id={item.id}
              key={item.id}
              tabIndex={0}
              src={item.img}
              name={item.name}
              price={item.price}
              country={item.country}
              background="bgwhite"
              onClick={() => itemChoseHandler(item.id)}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default ProductsList;
