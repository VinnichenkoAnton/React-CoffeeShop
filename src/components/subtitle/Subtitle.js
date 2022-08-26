import styles from './Subtitle.module.scss';

const Subtitle = ({ text }) => {
  return <h3 className={styles.subtitle}>{text}</h3>;
};

export default Subtitle;
