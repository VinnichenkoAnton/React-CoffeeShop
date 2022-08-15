import { useState } from 'react';

import NavigationItem from '../navigationItem/NavigationItem';

import styles from './navigation.module.scss';

const navItemArr = [
    {
        'text': 'Coffee house',
        'href': '#',
        'itemHover': true
    },
    {
        'text': 'Our coffee',
        'href': '#',
        'itemHover': false
    },
    {
        'text': 'For your pleasure',
        'href': '#',
        'itemHover': false
    }
];

const Navigation = (props) => {
    const [itemHover, setItemHover] = useState([true, false, false]);

    const linkClickedHandler = (e) => {
        e.preventDefault();
        let newArr = navItemArr.map(item => {
            
            if (item.text === e.target.text) {
                 item.itemHover = true;
            } else {
                item.itemHover = false;
            }
            return item.itemHover;
            
        });
        setItemHover(newArr);
    };

    const centerAligned = props.colorBlack ? `${styles.navigation__links} ${styles.navigation__links_black}` : `${styles.navigation__links}`;

    return (
        <nav>
            <ul className={centerAligned}>
                {
                    navItemArr.map((item, i) => {
                        return <NavigationItem colorBlack={props.colorBlack} key ={i} linkClickedHandler={linkClickedHandler} itemHover = {itemHover[i]} text = {item.text} href = {item.href}/>
                    })
                }
            </ul>
        </nav>
    )
}

export default Navigation;