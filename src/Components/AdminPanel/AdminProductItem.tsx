import React, {ChangeEvent} from 'react';
import {IProduct} from "../../store/models/IProduct";
import styles from '../../styles/AdminPanel.module.scss';
import removeIcon from '../../img/remove-icon.svg';
import editIcon from '../../img/edit-icon.svg';
import {useAppDispatch} from "../../store/hooks/redux";
import {deleteProductItem} from "../../store/reducers/CatalogSlice";
import { Link } from 'react-router-dom';

const AdminProductItem: React.FC<AdminProductItemProps> = ({product, editProduct, onChangeSelect}) => {

    const dispatch = useAppDispatch();

    function deleteProduct() {
        const answer = window.confirm('Вы уверены что хотите удалить товар из списка?');

        if (answer) {
            dispatch(deleteProductItem({productId: product.id}))
        }
    }

    return (
        <div className={styles.productListItem}>
            <div className={styles.productListItem__checkbox}>
                <input onChange={(e) => onChangeSelect(e, product.id)}
                       type="checkbox"
                       name={product.barcode}/>
            </div>
            <div className={styles.productListItem__image}>
                <Link to={'/products/' + product.barcode}>
                    <img src={product.url} alt={product.brand}/>
                </Link>
            </div>
            <span className={styles.productListItem__id}>{product.id}</span>
            <span className={styles.productListItem__brand}>{product.brand}</span>
            <span className={styles.productListItem__title}>{product.title}</span>
            <span className={styles.productListItem__price}>{product.price + ' ₽'}</span>
            <div className={styles.productListItem__edit}>
                <div onClick={() => editProduct(product.id)}>
                    <img src={editIcon} alt="изменить"/>
                </div>
                <div onClick={() => deleteProduct()}>
                    <img src={removeIcon} alt="удалить"/>
                </div>
            </div>
        </div>
    );
};

interface AdminProductItemProps {
    product: IProduct;
    editProduct: (productId: number) => void;
    onChangeSelect: (event: ChangeEvent<HTMLInputElement>, productId: number) => void;
}

export default AdminProductItem;