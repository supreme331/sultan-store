import React from 'react';
import logoLight from "../img/logo-light.svg";
import logoDark from "../img/logo-dark.svg";
import styles from "../styles/Logo.module.scss";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../store/hooks/redux";
import {showAllProducts} from "../store/reducers/CatalogSlice";

const Logo: React.FC<LogoProps> = ({shade,  isMobile = false}) => {

    const dispatch = useAppDispatch();
    
    return (
        <Link onClick={() => dispatch(showAllProducts())} to='/'>
            <img className={!isMobile ? styles.logo : styles.logoMobile}
                 src={shade === 'dark' ? logoDark : logoLight} alt="логотип"/>
        </Link>
    );
};

interface LogoProps {
    shade: 'dark' | 'light';
    isMobile?: boolean;
}

export default Logo;