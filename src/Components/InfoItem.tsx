import React from "react";
import styles from "../styles/InfoBlock.module.scss";

interface MailBlockProps {
    title: string;
    subtitle: string;
    purpose: 'header' | 'footer';
    icon?: string;
    alt?: string;
}

const InfoItem: React.FC<MailBlockProps> = ({
                                                title,
                                                subtitle,
                                                purpose,
                                                icon,
                                                alt
                                            }) => {
    return (
        <div className={styles.infoBlock}>
            {icon && alt ? <img src={icon} alt={alt}/> : null}
            <div>
                <div className={purpose === 'header'
                    ? styles.infoBlock__title
                    : styles.infoBlock__titleWhite}>
                    {title}
                </div>
                <div className={purpose === 'header'
                    ? styles.infoBlock__subtitle
                    : styles.infoBlock__subtitleWhite}>
                    {subtitle}
                </div>
            </div>
        </div>
    )
}

export default InfoItem;