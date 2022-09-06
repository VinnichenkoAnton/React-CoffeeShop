import { useState, useEffect } from 'react';

import { productsArr } from '../../mocks/productsArr';

import useCoffeeService from '../../services/useCoffeeService';

import ProductCard from '../productCard/ProductCard';
import Subtitle from '../subtitle/Subtitle';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import styles from './OurBest.module.scss';

const OurBest = () => {
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    getCoffeeData().then(onCoffeeLoaded);
  }, []);
  const onCoffeeLoaded = (coffeeLoaded) => {
    setBestProducts(coffeeLoaded);
  };

  const { loading, error, getCoffeeData, clearError } = useCoffeeService();

  // const bestProductsArr = [productsArr[0], productsArr[1], productsArr[2]];
  const items = bestProducts.map(({ id, img, name, price }) => {
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

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;

  return (
    <section className={styles.ourbest}>
      <Subtitle text="Our best" />
      <ul className={styles.ourbest__list}>
        {errorMessage}
        {spinner}
        {items}
      </ul>
    </section>
  );
};

export default OurBest;
