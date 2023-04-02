import React, {useState} from 'react';
import styles from '../../styles/Header.module.scss';
import geoIcon from '../../img/geo-icon.svg';
import mailIcon from '../../img/mail-icon.svg';
import catalogIcon from '../../img/catalog-icon.svg';
import catalogBlackIcon from '../../img/catalog-black-icon.svg';
import priceIcon from '../../img/price-icon.svg';
import callUsImg from '../../img/call-us.png';
import menuOpenIcon from '../../img/menu-open-icon.svg';
import menuCloseIcon from '../../img/menu-close-icon.svg';
import searchBlackIcon from '../../img/search-black-icon.svg';
import {Link} from "react-router-dom";
import Button from "../Button";
import Input, {InputTypes} from "../Input";
import CartHeaderBlock from "./CartHeaderBlock";
import CallUs from "../CallUs";
import InfoItem from "../InfoItem";
import Logo from "../Logo";
import {showAllProducts} from "../../store/reducers/CatalogSlice";
import {useAppDispatch} from "../../store/hooks/redux";
import HeaderMenu from './HeaderMenu';
import Divider from "../Divider";

const Header: React.FC = () => {

    const dispatch = useAppDispatch();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    return (
        <header>
            <div className={styles.headerDesktop}>
                <div className={styles.container}>
                    <div className={styles.firstRow}>
                        <div className={styles.header__infoBlock}>
                            <InfoItem icon={geoIcon}
                                      alt='локация'
                                      title='г. Кокчетав, ул. Ж. Ташенова 129Б'
                                      subtitle='(Рынок Восточный)'
                                      purpose='header'/>
                            <Link to="mailto:opt.sultan@mail.ru">
                                <InfoItem icon={mailIcon}
                                          alt='email'
                                          title='opt.sultan@mail.ru'
                                          subtitle='На связи в любое время'
                                          purpose='header'/>
                            </Link>
                        </div>
                        <HeaderMenu/>
                    </div>
                </div>
                <hr/>
                <div className={styles.container}>
                    <div className={styles.secondRow}>
                        <div className={styles.header__logo}>
                            <Logo shade='dark'/>
                        </div>
                        <div className={styles.header__catalogSearch}>
                            <Link onClick={() => dispatch(showAllProducts())}
                                  className={styles.header__catalogSearchBtn}
                                  to='/'>
                                <Button text='Каталог' icon={catalogIcon} alt="каталог"/>
                            </Link>
                            <Input
                                inputType={InputTypes.search}
                                placeholder='Поиск...'
                                onButtonClick={() => {
                                }}/>
                        </div>
                        <div className={styles.header__callUsBlock}>
                            <CallUs textAlign='right'/>
                            <img src={callUsImg} alt="позвоните нам"/>
                        </div>
                        <div className={styles.priceBtn}>
                            <Button text='Прайс-лист' icon={priceIcon} alt="прайс-лист"/>
                        </div>
                        <CartHeaderBlock/>
                    </div>
                </div>
                <hr/>
            </div>
            {!isMobileMenuOpen
                ? < HeaderMobile setIsMobileMenuOpen={setIsMobileMenuOpen} isMobileMenuOpen={isMobileMenuOpen}/>
                : null}
            <div className={isMobileMenuOpen ? styles.overlayVisible : styles.overlayHidden}>
                <div className={styles.headerMenuMobile}>
                    <HeaderMobile setIsMobileMenuOpen={setIsMobileMenuOpen} isMobileMenuOpen={isMobileMenuOpen}/>
                    <HeaderMenu isMobile={true}/>
                </div>
            </div>
        </header>
    );
};

const HeaderMobile: React.FC<HeaderMobileProps> = ({setIsMobileMenuOpen, isMobileMenuOpen}) => {
    const dispatch = useAppDispatch();

    return (
        <div className={styles.headerMobile}>
            <div className={styles.containerMobile}>
                <div className={styles.firstRowMobile}>
                    <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                         className={styles.openMenuMobile}>
                        {
                            !isMobileMenuOpen ? <img src={menuOpenIcon} alt="открыть меню"/>
                                : <img src={menuCloseIcon} alt="закрыть меню"/>
                        }
                    </div>
                    <div className={styles.logoMobile}>
                        <Logo shade='dark' isMobile={true}/>
                    </div>
                    <CartHeaderBlock isMobile={true}/>
                </div>
            </div>
            <hr/>
            <div className={styles.containerMobile}>
                <div className={styles.secondRowMobile}>
                    <Link onClick={() => dispatch(showAllProducts())}
                          className={styles.mobileBtn}
                          to='/'>
                        <div>
                            <img src={catalogBlackIcon} alt="каталог"/>
                        </div>
                        <span>Каталог</span>
                    </Link>
                    <Divider direction='vertical' heightInPx={30}/>
                    <div className={styles.mobileBtn}>
                        <div>
                            <img src={searchBlackIcon} alt="каталог"/>
                        </div>
                        <span>Поиск</span>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}

interface HeaderMobileProps {
    setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
    isMobileMenuOpen: boolean;
}

export default Header;


