import styles from './Btn.module.scss';

const BtnMain = () => {
  return (
    <button type="button" className={styles.btnmain}>
      More
    </button>
  );
};

const Btn = ({ text, onChangeId }) => {
  const filterClickHandler = (e) => {
    onChangeId(e.target.innerText);
  };
  return (
    <button type="button" className={styles.btn} onClick={filterClickHandler}>
      {text}
    </button>
  );
};

export { BtnMain, Btn };
