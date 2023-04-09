import styles from "../../styles/Footer.module.scss";
import {Link} from "react-router-dom";
import React from "react";

const FooterCategories = () => {
    return (
        <>
            <h4 className={styles.subtitle}>Категории:</h4>
            <ul className={styles.footerMenu}>
                <Link to='/'>
                    <li>Бытовая химия</li>
                </Link>
                <Link to='/'>
                    <li>Косметика и гигиена</li>
                </Link>
                <Link to='/'>
                    <li>Товары для дома</li>
                </Link>
                <Link to='/'>
                    <li>Товары для детей и мам</li>
                </Link>
                <Link to='/'>
                    <li>Посуда</li>
                </Link>
            </ul>
        </>
    )
}

export default FooterCategories;