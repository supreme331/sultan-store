import React from 'react';
import styles from '../styles/Footer.module.scss';
import Input, {InputTypes} from "./Input";
import {Link} from "react-router-dom";
import priceIcon from "../img/price-icon.svg";
import whatsAppIcon from "../img/whats-app-icon.svg";
import telegramIcon from "../img/telegram-icon.svg";
import visaIcon from "../img/visa.svg";
import mastercardIcon from "../img/mastercard.svg";
import Button from "./Button";
import CallUs from "./CallUs";
import InfoItem from "./InfoItem";
import Logo from "./Logo";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.column}>
                        <div className={styles.logo}>
                            <Logo shade='light'/>
                        </div>
                        <p className={styles.aboutText}>Компания «Султан» — снабжаем розничные магазины товарами
                            "под ключ" в Кокчетаве и Акмолинской области</p>
                        <span className={styles.subscribeText}>Подпишись на скидки и акции</span>
                        <div>
                            <Input inputType={InputTypes.email}
                                   placeholder='Введите ваш E-mail'
                                   whiteInput={true}
                                   onButtonClick={() => {
                                   }}/>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <FooterMenu/>
                    </div>
                    <div className={styles.column}>
                        <FooterCategories/>
                    </div>
                    <div className={styles.column}>
                        <h4 className={styles.subtitle}>Скачать прайс-лист:</h4>
                        <div className={styles.priceBtn}>
                            <Button text='Прайс-лист' icon={priceIcon} alt="прайс-лист"/>
                        </div>
                        <FooterMessengers/>
                    </div>
                    <div className={styles.column}>
                        <FooterContacts/>
                        <FooterPayment/>
                    </div>
                </div>
            </div>
            <FooterMobile/>
        </footer>
    );
};

const FooterMobile: React.FC = () => {
    return (
        <div className={styles.footerMobile}>
            <div className={styles.containerMobile}>
                <div className={styles.rowMobile}>
                    <div className={styles.logoMobile}>
                        <Logo shade='light' isMobile={true}/>
                    </div>
                    <Button text='Прайс-лист' icon={priceIcon} alt="прайс-лист" size='Small'/>
                </div>
                <div className={styles.rowMobile}>
                    <div>
                        <p className={styles.aboutTextMobile}>Компания «Султан» — снабжаем розничные магазины товарами
                            "под ключ" в Кокчетаве и Акмолинской области</p>
                        <span className={styles.subscribeText}>Подпишись на скидки и акции</span>
                    </div>
                </div>
                <div className={styles.rowMobile}>
                    <Input inputType={InputTypes.email}
                           placeholder='Введите ваш E-mail'
                           whiteInput={true}
                           onButtonClick={() => {
                           }}/>
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

const FooterPayment = () => {
    return (
        <div className={styles.payment}>
            <Link to='/'><img src={visaIcon} alt="visa"/></Link>
            <Link to='/'><img src={mastercardIcon} alt="mastercard"/></Link>
        </div>
    )
}

export default Footer;