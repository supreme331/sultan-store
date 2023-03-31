import React from 'react';
import styles from "../styles/Weight.module.scss";
import boxOpenIcon from "../img/box-open.svg";
import bottleIcon from "../img/bottle.svg";

const Weight: React.FC<WeightProps> = ({typeOfSize, size}) => {
    return (
        <div className={styles.weight}>
            <img src={typeOfSize === 'weight' ? boxOpenIcon : bottleIcon} alt="вес"/>
            <span>{size} {typeOfSize === 'weight' ? 'г' : 'мл'}</span>
        </div>
    );
};

interface WeightProps {
    typeOfSize: 'weight' | 'volume';
    size: string;
}

export default Weight;