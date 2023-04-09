import styles from "../../styles/Footer.module.scss";
import CallUs from "../CallUs";
import {Link} from "react-router-dom";
import InfoItem from "../InfoItem";
import React from "react";

const FooterContacts = () => {
    return (
        <>
            <h4 className={styles.subtitle}>Контакты:</h4>
            <CallUs/>
            <div className={styles.mailBlock}>
                <Link to="mailto:opt.sultan@mail.ru">
                    <InfoItem title='opt.sultan@mail.ru'
                              subtitle='На связи в любое время'
                              purpose='footer'/>
                </Link>
            </div>
        </>
    )
}

export default FooterContacts;