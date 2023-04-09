import React from 'react';
import styles from "../../styles/HeaderMenu.module.scss";
import InfoItem from "../InfoItem";
import geoIcon from "../../img/geo-icon.svg";
import {Link} from "react-router-dom";
import mailIcon from "../../img/mail-icon.svg";
import phoneIcon from "../../img/phone-icon.svg";
import phoneFilledIcon from "../../img/phone-filled-icon.svg";
import Divider from "../Divider";
import Button from "../Button";
import priceIcon from "../../img/price-icon.svg";

const HeaderMobileMenu: React.FC<HeaderMobileMenuProps> = ({setIsMobileMenuOpen}) => {
    return (
        <div className={styles.menuMobileContainer}>
            <div className={styles.menuMobile}>


                <div className={styles.infoElemMobile}>
                    <InfoItem icon={geoIcon}
                              alt='локация'
                              title='г. Кокчетав, ул. Ж. Ташенова 129Б'
                              subtitle='(Рынок Восточный)'
                              purpose='header'/>
                </div>
                <div className={styles.infoElemMobile}>
                    <Link to="mailto:opt.sultan@mail.ru">
                        <InfoItem icon={mailIcon}
                                  alt='email'
                                  title='opt.sultan@mail.ru'
                                  subtitle='На связи в любое время'
                                  purpose='header'/>
                    </Link>
                </div>
                <div className={styles.infoElemMobile}>
                    <Link to="tel:+77774900091">
                        <InfoItem icon={phoneIcon}
                                  alt='позвонить'
                                  title='Отдел продаж'
                                  subtitle='+7 (777) 490-00-91'
                                  purpose='header'/>
                        <span className={styles.workingTime}>время работы: 9:00-20:00</span>
                    </Link>
                </div>
                <div className={styles.placeACall}>
                    <div className={styles.placeACallBtn}>
                        <img src={phoneFilledIcon} alt="заказать звонок"/>
                    </div>
                    <span>Заказать звонок</span>
                </div>
                <Divider/>
                <h2 className={styles.menuMobileTitle}>Меню сайта:</h2>
                <ul className={styles.menuListMobile}>
                    <li onClick={() => setIsMobileMenuOpen(false)}>
                        <Link to='/'>О компании</Link>
                    </li>
                    <li onClick={() => setIsMobileMenuOpen(false)}>
                        <Link to='/'>Доставка и оплата</Link>
                    </li>
                    <li onClick={() => setIsMobileMenuOpen(false)}>
                        <Link to='/'>Возврат</Link>
                    </li>
                    <li onClick={() => setIsMobileMenuOpen(false)}>
                        <Link to='/'>Контакты</Link>
                    </li>
                    <li onClick={() => setIsMobileMenuOpen(false)}>
                        <Link to='/app-admin'>Администрирование</Link>
                    </li>
                </ul>
                <Button text='Прайс-лист' icon={priceIcon} alt="прайс-лист"/>
            </div>
        </div>
    );
};

interface HeaderMobileMenuProps {
    setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
}

export default HeaderMobileMenu;