import React from 'react';
import styles from "../../styles/AdminPanel.module.scss";

const AdminAside: React.FC<AdminAsideProps> = ({setActiveBlock}) => {
    return (
        <aside className={styles.aside}>
            <ul className={styles.asideMenu}>
                <li onClick={() => setActiveBlock('addProduct')}
                    className={styles.asideMenuItem}>Добавить товар</li>
                <li onClick={() => setActiveBlock('productsList')}
                    className={styles.asideMenuItem}>Список товаров</li>
            </ul>
        </aside>
    );
};

interface AdminAsideProps {
    setActiveBlock: (activeBlock: 'addProduct' | 'productsList') => void;
}

export default AdminAside;