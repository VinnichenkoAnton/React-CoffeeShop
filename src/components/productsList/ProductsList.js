import { useState, useEffect } from 'react';

import { productsArr } from '../../mocks/productsArr';
import ProductItem from '../productItem/ProductItem';

import styles from './productsList.module.scss';

const ProductsList = ({ id }) => {
  const [productsList, setProductsList] = useState([
    productsArr[0],
    productsArr[1],
    productsArr[2],
    productsArr[1],
    productsArr[1],
    productsArr[1],
  ]);

  // useEffect(() => {
  //   setProductsList((productsList) => {
  //     return [
  //     productsList.filter((item) => {
  //         return item.country === id;
  //       }),
  //     ];
  //   });
  // }, [id]);

  return (
    <section>
      <ul className={styles.products__list}>
        {productsList.map((item, i) => {
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
