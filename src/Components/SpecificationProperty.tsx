import React from "react";
import styles from "../styles/SpecificationProperty.module.scss";

const SpecificationProperty: React.FC<SpecificationPropertyProps> = ({label, text}) => {
    return (
        <div data-testid='property' className={styles.specificationProperty}>
            <span data-testid='label' className={styles.specificationLabel}>{label} </span>
            <span data-testid='text' className={styles.specificationText}>{text}</span>
        </div>
    )
}

interface SpecificationPropertyProps {
    label: string;
    text: string;
}

export default SpecificationProperty;