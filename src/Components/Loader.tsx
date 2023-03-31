import React from 'react';
import styles from '../styles/Loader.module.scss';

const Loader = () => {
    return (
        <div className={styles.loaderWrapper}>
            <span  className={styles.loader}></span>
        </div>
    );
};

export default Loader;