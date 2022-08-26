import ProductCard from '../productCard/ProductCard';

import styles from './ProductsList.module.scss';

const ProductsList = ({ filteredProductsList }) => {
  const itemChoseHandler = (e) => {
    const chosenProduct = filteredProductsList.filter(
      (item) => item.id === e.currentTarget.getAttribute('data-id'),
    );
    console.log(chosenProduct);
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
              itemChoseHandler={itemChoseHandler}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default ProductsList;
