import classNames from 'classnames/bind';

import styles from './productItem.module.scss';

const ProductItem = ({ tabIndex, src, name, price, country, background }) => {
  return (
    <li
      tabIndex={tabIndex}
      className={classNames(styles.productitem__product, styles[`background_${background}`])}
    >
      <div className={styles.productitem__img}>
        <img src={src} alt={name} />
      </div>
      <div className={styles.productitem__name}>{name}</div>

      {country && <div className={styles.productitem__country}>{country}</div>}

      <div className={styles.productitem__price}>{price}</div>
    </li>
  );
};

export default ProductItem;
