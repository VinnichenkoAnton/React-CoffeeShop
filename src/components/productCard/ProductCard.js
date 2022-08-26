import classNames from 'classnames/bind';

import styles from './ProductCard.module.scss';

const ProductCard = ({ tabIndex, src, name, price, country, background, itemChoseHandler, id }) => {
  return (
    <li
      data-id={id}
      tabIndex={tabIndex}
      className={classNames(styles.productcard__product, styles[`background_${background}`])}
      onClick={itemChoseHandler}
    >
      <div className={styles.productcard__img}>
        <img src={src} alt={name} />
      </div>
      <div className={styles.productcard__name}>{name}</div>

      {country && <div className={styles.productcard__country}>{country}</div>}

      <div className={styles.productcard__price}>{price}</div>
    </li>
  );
};

export default ProductCard;
