import { Btn } from '../btn/Btn';

import styles from './Filters.module.scss';

const Filters = ({ inputValue, enteredId, enteredText }) => {
  const filterTypingHandler = (e) => {
    enteredText(e.target.value);
  };

  return (
    <section className={styles.filters}>
      <div className={styles.filters__inpwrapper}>
        <label className={styles.filters__label} htmlFor="username">
          Lookiing for
        </label>
        <input
          value={inputValue}
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
          <Btn text="Brazil" enteredId={enteredId} />
          <Btn text="Kenya" enteredId={enteredId} />
          <Btn text="Colombia" enteredId={enteredId} />
          <Btn text="All" enteredId={enteredId} />
        </div>
      </div>
    </section>
  );
};

export default Filters;
