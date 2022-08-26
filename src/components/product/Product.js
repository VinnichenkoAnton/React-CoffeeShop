import classNames from 'classnames';

import CoffeeBeans from '../coffeeBeans/CoffeBeans';
import Subtitle from '../subtitle/Subtitle';

import styles from './Product.module.scss';

const Product = ({ img, imgwidth, title, generalInfo, country, description, price }) => {
  return (
    <section className={styles.product}>
      <div className={styles.product__container}>
        <div className={classNames(styles.product__img, styles[`product_${imgwidth}`])}>
          <img src={img} alt={title} />
        </div>
        <div className={styles.product__wrapper}>
          <Subtitle text={title} />
          <CoffeeBeans coffeeColor="black" />

          {generalInfo ? (
            <div className={styles.product__info}>{generalInfo}</div>
          ) : (
            <>
              <div className={styles.product__country}>
                Country: <span>{country}</span>
              </div>
              <div className={styles.product__description}>
                Desciption: <span>{description}</span>
              </div>
              <div className={styles.product__price}>
                Price: <span>{price}</span>
              </div>
            </>
          )}
        </div>
      </div>

      {generalInfo ? <div className={styles.descrcard__line}></div> : null}
    </section>
  );
};

export default Product;
