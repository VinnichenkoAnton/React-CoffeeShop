import { Btn } from '../btn/Btn';

import styles from './filters.module.scss';

const Filters = ({ onChangeId }) => {
  return (
    <section className={styles.filters}>
      <div className={styles.filters__inpwrapper}>
        <label className={styles.filters__label} htmlFor="username">
          Lookiing for
        </label>
        <input
          placeholder="start typing here..."
          maxLength="20"
          className={styles.filters__input}
          type="text"
          id="username"
        ></input>
      </div>
      <div className={styles.filters__btnswrapper}>
        <div className={styles.filters__choise}>Or filter</div>
        <div className={styles.filters__btns}>
          <Btn text="Brazil" onChangeId={onChangeId} />
          <Btn text="Kenya" onChangeId={onChangeId} />
          <Btn text="Colombia" onChangeId={onChangeId} />
        </div>
      </div>
    </section>
  );
};

export default Filters;
