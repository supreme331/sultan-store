import React from 'react';
import styles from "../../styles/Header.module.scss";
import InfoItem from "../InfoItem";
import geoIcon from "../../img/geo-icon.svg";
import {Link} from "react-router-dom";
import mailIcon from "../../img/mail-icon.svg";
import HeaderMenu from "./HeaderMenu";
import Logo from "../Logo";
import {showAllProducts} from "../../store/reducers/CatalogSlice";
import Button from "../Button";
import catalogIcon from "../../img/catalog-icon.svg";
import Input, {InputTypes} from "../Input";
import CallUs from "../CallUs";
import callUsImg from "../../img/call-us.png";
import DownloadPriceList from "../DownloadPriceList";
import HeaderCartBlock from "./HeaderCartBlock";
import {useAppDispatch} from "../../store/hooks/redux";

const HeaderDesktop = () => {

    const dispatch = useAppDispatch();

    return (
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
                        <DownloadPriceList/>
                    </div>
                    <HeaderCartBlock/>
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default HeaderDesktop;