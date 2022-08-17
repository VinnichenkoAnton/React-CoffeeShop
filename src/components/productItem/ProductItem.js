import styles from './productItem.module.scss';

const ProductItem = ({ tabIndex, src, name, price, country }) => {
  return (
    <li tabIndex={tabIndex} className={styles.productitem__product}>
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
