import React from "react";
import styles from "../../styles/HeaderMenu.module.scss";
import {Link} from "react-router-dom";

const HeaderMenu: React.FC = () => {
    return (
        <ul className={styles.menuList}>
            <li className={styles.menuListItem}><Link to='/'>О компании</Link></li>
            <li className={styles.menuListItem}><Link to='/'>Доставка и оплата</Link></li>
            <li className={styles.menuListItem}><Link to='/'>Возврат</Link></li>
            <li className={styles.menuListItem}><Link to='/'>Контакты</Link></li>
            <li className={styles.menuListItem}><Link to='/app-admin'>Администрирование</Link></li>
        </ul>
    );
};


export default HeaderMenu;