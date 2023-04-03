import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from '../styles/AdminPanel.module.scss';
import AdminAside from "../Components/AdminPanel/AdminAside";
import AddProduct from "../Components/AdminPanel/AddProduct";
import AdminProductList from "../Components/AdminPanel/AdminProductList";
import PageContainer from "../Components/PageContainer";
import {useAppDispatch, useAppSelector} from "../store/hooks/redux";
import {fetchProductItems} from "../store/reducers/ActionCreators";
import {IProduct} from "../store/models/IProduct";
import {deleteProductItem} from "../store/reducers/CatalogSlice";

const AdminPanelPage = () => {

    const dispatch = useAppDispatch();
    const productItems = useAppSelector(state => state.catalogReducer.productItems);
    const [activeBlock, setActiveBlock] = useState<'addProduct' | 'productsList' | 'editProduct'>('productsList');
    const [editingProductId, setEditingProductId] = useState<number | null>(null);
    const [editingProduct, setEditingProduct] = useState<IProduct | null>(null);
    const [selectedProductsId, setSelectedProductsId] = useState<Array<number>>([]);

    function editProduct(productId: number) {
        setEditingProductId(productId);
    }

    function finishEditing() {
        setEditingProduct(null);
        setEditingProductId(null);
        setActiveBlock('productsList');
    }

    function onChangeSelect(event: ChangeEvent<HTMLInputElement>, productId: number) {
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedProductsId([...selectedProductsId, productId]);
        }
        if (!isChecked) {
            const index = selectedProductsId.findIndex(id => id === productId);
            const arr = selectedProductsId;
            arr.splice(index, 1)
            setSelectedProductsId(arr);
        }
    }

    function deleteSelectedProducts() {
        const answer = window.confirm('Вы уверены что хотите удалить товар(ы) из списка?');

        if (answer) {
            selectedProductsId.forEach(id => dispatch(deleteProductItem({productId: id})));
        }
    }

    useEffect(() => {
        dispatch(fetchProductItems());
    }, [dispatch])

    useEffect(() => {
        const editingProduct = productItems.find(product => product.id === editingProductId);
        if (editingProduct) {
            setEditingProduct(editingProduct);
            setActiveBlock('editProduct');
        }
    }, [editingProductId])

    return (
        <PageContainer>
            <div className={styles.adminPanel}>
                <AdminAside setActiveBlock={setActiveBlock} deleteSelectedProducts={deleteSelectedProducts}/>
                <main className={styles.main}>
                    {activeBlock === 'productsList' &&
                        <AdminProductList
                            productItems={productItems}
                            editProduct={editProduct}
                            onChangeSelect={onChangeSelect}/>}
                    {activeBlock === 'addProduct' && <AddProduct finishEditing={finishEditing}/>}
                    {activeBlock === 'editProduct' && editingProduct && <AddProduct finishEditing={finishEditing}
                                                                                    editingProduct={editingProduct}/>}
                </main>
            </div>
        </PageContainer>
    );
};

export default AdminPanelPage;