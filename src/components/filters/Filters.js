import { Btn } from '../btn/Btn';

import styles from './filters.module.scss';

const Filters = ({ valueForInput, onChangeId, onFilterTyping }) => {
  const filterTypingHandler = (e) => {
    onFilterTyping(e.target.value);
  };

  return (
    <section className={styles.filters}>
      <div className={styles.filters__inpwrapper}>
        <label className={styles.filters__label} htmlFor="username">
          Lookiing for
        </label>
        <input
          value={valueForInput}
          placeholder="start typing here..."
          maxLength="20"
          className={styles.filters__input}
          type="text"
          id="username"
          onChange={filterTypingHandler}
        ></input>
      </div>
      <div className={styles.filters__btnswrapper}>
        <div className={styles.filters__choise}>Or filter</div>
        <div className={styles.filters__btns}>
          <Btn text="Brazil" onChangeId={onChangeId} />
          <Btn text="Kenya" onChangeId={onChangeId} />
          <Btn text="Colombia" onChangeId={onChangeId} />
          <Btn text="All" onChangeId={onChangeId} />
        </div>
      </div>
    </section>
  );
};

export default Filters;
