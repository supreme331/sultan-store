import React from 'react';
import FooterMobile from "./FooterMobile";
import FooterDesktop from "./FooterDesktop";

const Footer: React.FC = () => {
    return (
        <footer>
            <FooterDesktop />
            <FooterMobile />
        </footer>
    );
};



export default Footer;