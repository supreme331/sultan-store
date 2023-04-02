import React, {ChangeEvent} from 'react';
import {IProduct} from "../../store/models/IProduct";
import AdminProductItem from "./AdminProductItem";
import styles from "../../styles/AdminPanel.module.scss";

const AdminProductList: React.FC<AdminProductListProps> = ({
                                                               productItems,
                                                               editProduct,
                                                               onChangeSelect
                                                           }) => {

    return (
        <div className={styles.productListBlock}>
            <ul className={styles.productList}>
                {productItems.length ? productItems.map(product =>
                    <AdminProductItem
                        key={product.id}
                        product={product}
                        editProduct={editProduct}
                        onChangeSelect={onChangeSelect}/>) : null}
            </ul>
        </div>

    );
};

interface AdminProductListProps {
    productItems: IProduct[];
    editProduct: (productId: number) => void;
    onChangeSelect: (event: ChangeEvent<HTMLInputElement>, productId: number) => void;
}

export default AdminProductList;