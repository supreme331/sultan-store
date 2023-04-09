import React from 'react';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from "./HeaderDesktop";

const Header: React.FC = () => {
    return (
        <header>
            <HeaderDesktop/>
            <HeaderMobile/>
        </header>
    );
};

export default Header;


