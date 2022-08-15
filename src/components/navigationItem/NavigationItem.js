import styles from './navigationItem.module.scss';

const NavigationItem = (props) => {
    const itemCliked = props.itemHover ? `${styles.navigationitem} ${styles.navigationitem_show}` : styles.navigationitem;
    const blackText = props.colorBlack ? `${styles.navigationitem_black}` : '';
    const itemStyles = `${itemCliked} ${blackText}`
    return( 
        <li 
            className={itemStyles}>
            <a 
                href={props.href}
                onClick={props.linkClickedHandler}
            >{props.text}</a>
        </li>
    )
};

export default NavigationItem;