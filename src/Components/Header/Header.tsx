import React from 'react';
import styles from '../../styles/Header.module.scss';
import geoIcon from '../../img/geo-icon.svg';
import mailIcon from '../../img/mail-icon.svg';
import catalogIcon from '../../img/catalog-icon.svg';
import priceIcon from '../../img/price-icon.svg';
import callUsImg from '../../img/call-us.png';
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

const Header: React.FC = () => {

    const dispatch = useAppDispatch();

    return (
        <header>
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
                    <HeaderMenu />
                </div>
            </div>
            <hr/>
            <div className={styles.container}>
                <div className={styles.secondRow}>
                    <div className={styles.header__logo}>
                        <Logo shade='dark' />
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
                            onButtonClick={()=>{}}/>
                    </div>
                    <div className={styles.header__callUsBlock}>
                        <CallUs textAlign='right' />
                        <img src={callUsImg} alt="позвоните нам"/>
                    </div>
                    <Button text='Прайс-лист' icon={priceIcon} alt="прайс-лист"/>
                    <CartHeaderBlock />
                </div>
            </div>
            <hr/>
        </header>
    );
};

export default Header;


