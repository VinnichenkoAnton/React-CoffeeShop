import CoffeeBeans from '../coffeeBeans/CoffeBeans';

import styles from './descrCard.module.scss';

const DescrCard = ({img, title, descr}) => {
    return (
        <section className={styles.descrcard}>
            <div className={styles.descrcard__container}>
                <div className={styles.descrcard__img}>
                    <img src={img} alt={title} />
                </div>
                <div className={styles.descrcard__wrapper}>
                    <h3 className={styles.descrcard__title}>{title}</h3>
                    <CoffeeBeans/>
                    <div className={styles.descrcard__descr}>{descr}</div>
                </div>
            </div>
            
            <div className={styles.descrcard__line}></div>
        </section>
    )
};

export default DescrCard;