import styles from './btn.module.scss';

const BtnMain = () => {
    return (
        <button type='button' className={styles.btnmain}>
            More
        </button>
    )
}

const Btn = ({text}) => {
    return (
        <button type='button' className={styles.btn}>
            {text}
        </button>
    )
}

export {BtnMain, Btn};