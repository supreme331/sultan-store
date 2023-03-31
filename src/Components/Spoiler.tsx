import React, {useState} from "react";
import styles from "../styles/Spoiler.module.scss";

const Spoiler: React.FC<SpoilerProps> = ({title, children}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div>
            <h2 onClick={() => setIsOpen(!isOpen)} className={styles.spoilerTitle}>
                {title}
                <div className={styles.spoilerTriangle}>
                    <span className={isOpen ? styles.spoilerTriangleUp : styles.spoilerTriangleDown}></span>
                </div>
            </h2>
            <div>
                {isOpen && children}
            </div>
        </div>
    )
}


interface SpoilerProps {
    title: string;
    children: React.ReactElement | React.ReactNode;
}

export default Spoiler;