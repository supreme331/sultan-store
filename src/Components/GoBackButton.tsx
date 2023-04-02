import React from 'react';
import styles from '../styles/GoBackButton.module.scss';
import goBackIcon from '../img/go-back-icon.png';
import {Link} from "react-router-dom";

const GoBackButton: React.FC<GoBackButtonProps> = ({redirectTo}) => {
        return (
        <Link to={redirectTo} className={styles.goBack}>
            <div className={styles.goBackImage}>
                <img src={goBackIcon} alt="назад"/>
            </div>
            <span className={styles.goBackTitle}>Назад</span>
        </Link>
    );
};

interface GoBackButtonProps {
    redirectTo: string;
}

export default GoBackButton;