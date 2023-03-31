import React from 'react';
import styles from '../styles/BreadCrumbs.module.scss';
import {Link} from "react-router-dom";
import {useAppDispatch} from "../store/hooks/redux";
import {showAllProducts} from "../store/reducers/CatalogSlice";
import Divider from "./Divider";

interface BreadCrumbsProps {
    catalogName?: string;
    catalogUrl?: string;
    productName?: string;
    productUrl?: string;
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({
                                                     catalogName = 'Каталог',
                                                     catalogUrl = '/catalog/1',
                                                     productName,
                                                     productUrl
                                                 }) => {
    const dispatch = useAppDispatch();

    return (
        <div className={styles.breadCrumbs}>
            <Link onClick={() => dispatch(showAllProducts())} className={styles.breadCrumbItem} to='/'>
                <span>Главная</span>
            </Link>
            <Divider direction='vertical' heightInPx={16}/>
            <Link onClick={() => dispatch(showAllProducts())} className={styles.breadCrumbItem} to={catalogUrl}>
                <span>{catalogName}</span>
            </Link>
            {productName && productUrl ? <>
                <Divider direction='vertical' heightInPx={16}/>
                <Link className={styles.breadCrumbItem} to={productUrl}><span>{productName}</span></Link>
            </> : null}
        </div>
    );
};

export default BreadCrumbs;