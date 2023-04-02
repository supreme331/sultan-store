import React from "react";
import styles from "../../styles/HeaderMenu.module.scss";
import {Link} from "react-router-dom";

const HeaderMenu: React.FC = () => {
    return (
        <ul className={styles.menu}>
            <li><Link to='/'>О компании</Link></li>
            <li><Link to='/'>Доставка и оплата</Link></li>
            <li><Link to='/'>Возврат</Link></li>
            <li><Link to='/'>Контакты</Link></li>
            <li><Link to='/app-admin'>Администрирование</Link></li>
        </ul>
    );
};

export default HeaderMenu;