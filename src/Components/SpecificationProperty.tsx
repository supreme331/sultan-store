import React from "react";
import styles from "../styles/SpecificationProperty.module.scss";

const SpecificationProperty: React.FC<SpecificationPropertyProps> = ({label, text}) => {
    return (
        <div className={styles.specificationProperty}>
            <span className={styles.specificationLabel}>{label}</span> <span className={styles.specificationText}>{text}</span>
        </div>
    )
}

interface SpecificationPropertyProps {
    label: string;
    text: string;
}

export default SpecificationProperty;