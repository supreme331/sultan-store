import React from 'react';
import logoLight from "../img/logo-light.svg";
import logoDark from "../img/logo-dark.svg";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../store/hooks/redux";
import {showAllProducts} from "../store/reducers/CatalogSlice";

interface LogoProps {
    shade: 'dark' | 'light'
}

const Logo: React.FC<LogoProps> = ({shade}) => {
    const dispatch = useAppDispatch();
    return (
        <Link onClick={() => dispatch(showAllProducts())} to='/'>
            <img src={shade === 'dark' ? logoDark : logoLight} alt="логотип"/>
        </Link>
    );
};

export default Logo;