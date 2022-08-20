import styles from './btn.module.scss';

const BtnMain = () => {
  return (
    <button type="button" className={styles.btnmain}>
      More
    </button>
  );
};

const Btn = ({ text, onChangeId }) => {
  const clickHandler = (e) => {
    onChangeId(e.target.innerText);
  };
  return (
    <button type="button" className={styles.btn} onClick={clickHandler}>
      {text}
    </button>
  );
};

export { BtnMain, Btn };
