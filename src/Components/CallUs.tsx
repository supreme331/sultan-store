import React from "react";
import styles from "../../styles/CallUs.module.scss";

interface CallUsProps {
    textAlign?: 'right' | 'left'
}

const CallUs: React.FC<CallUsProps> = ({textAlign = 'left'}) => {
    return (
        <div className={textAlign === 'right' ? styles.callUs : styles.callUsLeft}>
            <a href='tel:+77774900091'>+7 (777) 490-00-91</a>
            <div>время работы: 9:00-20:00</div>
            <div className={styles.underline}>Заказать звонок</div>
        </div>
    )
}

export default CallUs;