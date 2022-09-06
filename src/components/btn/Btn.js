import styles from './Btn.module.scss';

const BtnMain = () => {
  return (
    <button type="button" className={styles.btnmain}>
      More
    </button>
  );
};

const Btn = ({ text, enteredId }) => {
  const clickHandler = (e) => {
    enteredId(e.target.innerText);
  };
  return (
    <button type="button" className={styles.btn} onClick={clickHandler}>
      {text}
    </button>
  );
};

export { BtnMain, Btn };
