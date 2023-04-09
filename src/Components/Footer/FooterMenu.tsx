import styles from "../../styles/Footer.module.scss";
import {Link} from "react-router-dom";
import React from "react";

const FooterMenu = () => {
    return (
        <>
            <h4 className={styles.subtitle}>Меню сайта:</h4>
            <ul className={styles.footerMenu}>
                <Link to='/'>
                    <li>О компании</li>
                </Link>
                <Link to='/'>
                    <li>Доставка и оплата</li>
                </Link>
                <Link to='/'>
                    <li>Возврат</li>
                </Link>
                <Link to='/'>
                    <li>Контакты</li>
                </Link>
            </ul>
        </>
    )
}

export default FooterMenu;