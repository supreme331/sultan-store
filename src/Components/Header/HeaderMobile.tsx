import React, {useState} from "react";
import {useAppDispatch} from "../../store/hooks/redux";
import styles from "../../styles/Header.module.scss";
import menuOpenIcon from "../../img/menu-open-icon.svg";
import menuCloseIcon from "../../img/menu-close-icon.svg";
import Logo from "../Logo";
import HeaderCartBlock from "./HeaderCartBlock";
import {Link} from "react-router-dom";
import {showAllProducts} from "../../store/reducers/CatalogSlice";
import catalogBlackIcon from "../../img/catalog-black-icon.svg";
import Divider from "../Divider";
import searchBlackIcon from "../../img/search-black-icon.svg";
import HeaderMobileMenu from "./HeaderMobileMenu";

const HeaderMobile: React.FC = () => {

    const dispatch = useAppDispatch();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    return (
        <div className={isMobileMenuOpen ? styles.overlayVisible : ''}>
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
                        <div onClick={() => setIsMobileMenuOpen(false)} className={styles.logoMobile}>
                            <Logo shade='dark' isMobile={true}/>
                        </div>
                        <div onClick={() => setIsMobileMenuOpen(false)}>
                            <HeaderCartBlock isMobile={true}/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={styles.containerMobile}>
                    <div className={styles.secondRowMobile}>
                        <Link onClick={() => {
                            dispatch(showAllProducts());
                            setIsMobileMenuOpen(false);
                        }}
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
                {isMobileMenuOpen && <HeaderMobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen}/>}
            </div>
        </div>
    )
}

export default HeaderMobile;