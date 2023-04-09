import React from 'react';
import styles from "../../styles/Footer.module.scss";
import Logo from "../Logo";
import FooterAboutText from "./FooterAboutText";
import Subscribe from "../Subscribe";
import FooterMenu from "./FooterMenu";
import FooterCategories from "./FooterCategories";
import DownloadPriceList from "../DownloadPriceList";
import FooterMessengers from "./FooterMessengers";
import FooterContacts from "./FooterContacts";
import FooterPayment from "./FooterPayment";

const FooterDesktop = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <div className={styles.logo}>
                        <Logo shade='light'/>
                    </div>
                    <FooterAboutText />
                    <Subscribe />
                </div>
                <div className={styles.column}>
                    <FooterMenu/>
                </div>
                <div className={styles.column}>
                    <FooterCategories/>
                </div>
                <div className={styles.column}>
                    <DownloadPriceList title='Скачать прайс-лист:' />
                    <FooterMessengers/>
                </div>
                <div className={styles.column}>
                    <FooterContacts/>
                    <FooterPayment/>
                </div>
            </div>
        </div>
    );
};

export default FooterDesktop;