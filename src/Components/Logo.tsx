import React from 'react';
import logoLight from "../../img/logo-light.svg";
import logoDark from "../../img/logo-dark.svg";
import {Link} from "react-router-dom";

interface LogoProps {
    shade: 'dark' | 'light'
}

const Logo: React.FC<LogoProps> = ({shade}) => {
    return (
        <Link to='/'>
            <img src={shade === 'dark' ? logoDark : logoLight} alt="логотип"/>
        </Link>
    );
};

export default Logo;