import React from 'react';
import styles from "../../styles/Divider.module.scss";

const Divider: React.FC<DividerProps> = ({widthInPx, heightInPx, direction='horizontal'}) => {
    if (direction === 'horizontal') {
        return <span className={styles.horizontal} style={{width: widthInPx ? widthInPx : '100%'}}></span>
    } else {
        return <span className={styles.vertical} style={{height: heightInPx ? heightInPx : '100%'}}></span>
    }
};

interface DividerProps {
    direction?: 'horizontal' | 'vertical';
    widthInPx?: number;
    heightInPx?:number;
}

export default Divider;