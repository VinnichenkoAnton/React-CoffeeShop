import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import styles from './ProductCard.module.scss';

const ProductCard = ({ tabIndex, src, name, price, country, background, id }) => {
  return (
    <NavLink
      to={`/ourcoffee/${id}`}
      tabIndex={tabIndex}
      className={classNames(styles.productcard__product, styles[`background_${background}`])}
    >
      <div className={styles.productcard__img}>
        <img src={src} alt={name} />
      </div>
      <div className={styles.productcard__name}>{name}</div>

      {country && <div className={styles.productcard__country}>{country}</div>}

      <div className={styles.productcard__price}>{price}</div>
    </NavLink>
  );
};

export default ProductCard;
