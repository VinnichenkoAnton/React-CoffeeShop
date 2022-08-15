import imgSolimo from '../../resources/products/solimoImg.jpg';
import imgPresto from '../../resources/products/prestoImg.jpg';
import imgAromisto from '../../resources/products/aromistoImg.jpg';

import styles from './ourBest.module.scss';

const arr = [
    {
        img: `${imgSolimo}`,
        name: 'Solimo Coffee Beans 2 kg',
        price: '10.73$',
        country: undefined
    },
    {
        img: `${imgPresto}`,
        name: 'Presto Coffee Beans 1 kg',
        price: '15.99$',
        country: undefined
    },
    {
        img: `${imgAromisto}`,
        name: 'AROMISTICO Coffee 1 kg',
        price: '6.99$',
        country: undefined
    },
]

const OurBest = () => {
    const items = arr.map((item, i) => {
        return (
            <li key={i}
                tabIndex = {0}
                className={styles.ourbest__product}>
                <div
                    className={styles.ourbest__img}>
                        <img src={item.img} alt={item.name} />
                </div>
                <div className={styles.ourbest__name}>{item.name}</div>
                <div className={styles.ourbest__price}>{item.price}</div>
            </li>
        )
    });

    return(
        <section className={styles.ourbest}>
            <h3 className={styles.ourbest__title}>Our best</h3>
            <ul className={styles.ourbest__list}>
                {items}
            </ul>
        </section>
    )
}

export default OurBest;