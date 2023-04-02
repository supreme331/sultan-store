import React from 'react';
import styles from "../../styles/AdminPanel.module.scss";

const AdminAside: React.FC<AdminAsideProps> = ({setActiveBlock, deleteSelectedProducts}) => {
    return (
        <aside className={styles.aside}>
            <ul className={styles.asideMenu}>
                <li onClick={() => setActiveBlock('addProduct')}
                    className={styles.asideMenuItem}>Добавить товар</li>
                <li onClick={() => setActiveBlock('productsList')}
                    className={styles.asideMenuItem}>Список товаров</li>
                <li onClick={() => deleteSelectedProducts()}
                    className={styles.asideMenuItem}>Удалить отмеченные</li>
            </ul>
        </aside>
    );
};

interface AdminAsideProps {
    setActiveBlock: (activeBlock: 'addProduct' | 'productsList') => void;
    deleteSelectedProducts: () => void;
}

export default AdminAside;