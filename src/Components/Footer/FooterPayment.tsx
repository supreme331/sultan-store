import styles from "../../styles/Footer.module.scss";
import {Link} from "react-router-dom";
import visaIcon from "../../img/visa.svg";
import mastercardIcon from "../../img/mastercard.svg";
import React from "react";

const FooterPayment = () => {
    return (
        <div className={styles.payment}>
            <Link to='/'><img src={visaIcon} alt="visa"/></Link>
            <Link to='/'><img src={mastercardIcon} alt="mastercard"/></Link>
        </div>
    )
}

export default FooterPayment;