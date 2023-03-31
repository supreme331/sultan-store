import React from 'react';
import styles from '../../styles/BreadCrumbs.module.scss';
import {Link} from "react-router-dom";

interface BreadCrumbsProps {
    catalogName?: string;
    catalogUrl?: string;
    productName?: string;
    productUrl?: string;
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({catalogName= 'Каталог',
                                                     catalogUrl = '/catalog',
                                                     productName,
                                                     productUrl}) => {
    return (
        <div className={styles.breadCrumbs}>
            <Link className={styles.breadCrumbItem} to='/'><span>Главная</span></Link>
            <Link className={styles.breadCrumbItem} to={catalogUrl}><span>{catalogName}</span></Link>
            {productName && productUrl ? <Link className={styles.breadCrumbItem} to={productUrl}><span>{productName}</span></Link> : null}
        </div>
    );
};

export default BreadCrumbs;