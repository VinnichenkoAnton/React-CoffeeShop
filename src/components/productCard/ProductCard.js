import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './ProductCard.module.scss';

const ProductCard = ({ tabIndex, src, name, price, country, background, onClick, id }) => {
  const handleClick = (id) => {
    onClick(id);
  };
  return (
    <Link
      to={`/ourcoffee/${id}`}
      data-id={id}
      tabIndex={tabIndex}
      className={classNames(styles.productcard__product, styles[`background_${background}`])}
      onClick={handleClick}
    >
      <div className={styles.productcard__img}>
        <img src={src} alt={name} />
      </div>
      <div className={styles.productcard__name}>{name}</div>

      {country && <div className={styles.productcard__country}>{country}</div>}

      <div className={styles.productcard__price}>{price}</div>
    </Link>
  );
};

export default ProductCard;
