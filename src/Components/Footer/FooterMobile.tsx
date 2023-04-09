import React from "react";
import styles from "../../styles/Footer.module.scss";
import Logo from "../Logo";
import FooterMenu from "./FooterMenu";
import FooterCategories from "./FooterCategories";
import FooterContacts from "./FooterContacts";
import FooterPayment from "./FooterPayment";
import FooterMessengers from "./FooterMessengers";
import FooterAboutText from "./FooterAboutText";
import Subscribe from "../Subscribe";
import DownloadPriceList from "../DownloadPriceList";

const FooterMobile: React.FC = () => {
    return (
        <div className={styles.footerMobile}>
            <div className={styles.containerMobile}>
                <div className={styles.rowMobile}>
                    <Logo shade='light' isMobile={true}/>
                    <DownloadPriceList buttonSize='Small'/>
                </div>
                <div className={styles.rowMobile}>
                    <FooterAboutText />
                </div>
                <div className={styles.rowMobile}>
                    <Subscribe />
                </div>
                <div className={styles.rowMobile}>
                    <div className={styles.footerMenuList}>
                        <FooterMenu/>
                    </div>
                    <div className={styles.footerMenuList}>
                        <FooterCategories/>
                    </div>
                </div>
                <div className={styles.rowMobile}>
                    <div className={styles.contactsMobile}>
                        <div>
                            <FooterContacts/>
                            <FooterPayment/>
                        </div>
                        <div className={styles.messengersMobile}>
                            <FooterMessengers/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FooterMobile;