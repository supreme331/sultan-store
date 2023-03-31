import React from 'react';
import styles from "../../styles/PageContainer.module.scss";

interface PagesContainerProps {
    children: React.ReactElement | React.ReactNode;
}

const PageContainer: React.FC<PagesContainerProps> = ({children}) => {
    return (
        <div  className={styles.root}>
            {children}
        </div>
    );
};

export default PageContainer;