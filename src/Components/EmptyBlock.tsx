import React from 'react';
import styles from '../styles/EmptyBlock.module.scss';
import emptyIcon from '../img/empty-icon.png'

const EmptyBlock:React.FC<EmptyBlockProps> = ({title}) => {
    return (
        <div className={styles.empty}>
            <h2  className={styles.emptyTitle}>{title}</h2>
            <img src={emptyIcon} alt="пусто"/>
        </div>
    );
};

interface EmptyBlockProps {
    title: string;
}

export default EmptyBlock;