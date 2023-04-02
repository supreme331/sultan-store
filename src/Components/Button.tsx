import React from 'react';
import styles from '../styles/Button.module.scss';

interface ButtonProps {
    text?: string;
    icon?: string;
    alt?: string;
    size?: 'Big' | 'Medium' | 'Small';
}

const Button: React.FC<ButtonProps> = ({
                                           text,
                                           icon,
                                           alt,
                                           size= 'Big'
}) => {
    return (
        <div>
            {!text && icon ? <div className={styles.iconOnly}>
                {icon && alt ? <img src={icon} alt={alt}/> : null}
            </div> : !icon && text ? <div className={size === 'Big' ? styles.buttonBigText
                : size === 'Medium' ? styles.buttonMediumText
                    : styles.buttonSmallText}>
                {text && <span>{text}</span>}
            </div> : text && icon ? <div className={size === 'Big' ? styles.buttonBig
                : size === 'Medium' ? styles.buttonMedium
            : styles.buttonSmall}>
                {text && <span>{text}</span>}
                {icon && alt ? <img src={icon} alt={alt}/> : null}
            </div> : null}
        </div>
    );
};

export default Button;