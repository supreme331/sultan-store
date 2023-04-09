import React from 'react';
import styles from "../styles/DownloadPriceList.module.scss";
import Button from "./Button";
import priceIcon from "../img/price-icon.svg";

const DownloadPriceList: React.FC<DownloadPriceListProps> = ({title, buttonSize = 'Big'}) => {
    return (
        <div>
            {title && <h4 className={styles.subtitle}>{title}</h4>}
            <Button text='Прайс-лист' icon={priceIcon} alt="прайс-лист" size={buttonSize}/>
        </div>
    );
};

interface DownloadPriceListProps {
    title?: string;
    buttonSize?: 'Big' | 'Medium' | 'Small';
}

export default DownloadPriceList;