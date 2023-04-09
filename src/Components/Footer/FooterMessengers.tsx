import styles from "../../styles/Footer.module.scss";
import {Link} from "react-router-dom";
import whatsAppIcon from "../../img/whats-app-icon.svg";
import telegramIcon from "../../img/telegram-icon.svg";
import React from "react";

const FooterMessengers = () => {
    return (
        <>
            <span className={styles.subscribeText}>Связь в мессенджерах:</span>
            <div className={styles.messengers}>
                <Link to='/'><img src={whatsAppIcon} alt="whatsApp"/></Link>
                <Link to='/'><img src={telegramIcon} alt="telegram"/></Link>
            </div>
        </>
    )
}

export default FooterMessengers;