import React, {useState} from 'react';
import styles from '../../styles/CartPage.module.scss';
import PageContainer from "../../Components/PageContainer/PageContainer";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import CartItems from "../../Components/Cart/CartItems";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import {IProduct} from "../../store/models/IProduct";
import Button from "../../Components/Button/Button";
import Divider from "../../Components/Divider/Divider";
import doubleCheckIcon from '../../img/double-check-icon.svg';
import closeIcon from '../../img/close-icon.svg';
import {clearCart} from "../../store/reducers/CartSlice";



const CartPage = () => {
    const cartItems = useAppSelector(state => state.cartReducer.cartItems);
    const totalPrice = useAppSelector(state => state.cartReducer.totalPrice);
    const productItems = useAppSelector(state => state.productReducer.productItems);
    const items: IProduct[] = [];
    const dispatch = useAppDispatch();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    for (let i = 0; i < cartItems.length; i++) {
        const product = productItems.find(product => product.id === cartItems[i].id);
        product && items.push(product);
    }

    function onPlaceOrder() {
        setIsModalOpen(true);
        dispatch(clearCart());
    }

    return (
        <PageContainer>
            <BreadCrumbs catalogName='Корзина' catalogUrl='/cart'/>
            <div className={styles.content}>
                <div className={styles.head}>
                    <h1 className={styles.title}>Корзина</h1>
                </div>
                <Divider />
                {items.length
                    ? <CartItems items={items}/>
                    : <div className={styles.emptyCart}>
                        <div>Корзина пуста</div>
                        <Divider />
                    </div>}

                <div className={styles.footer}>
                    <div onClick={onPlaceOrder}>
                        <Button text='Оформить заказ'/>
                    </div>
                    <div className={styles.totalPrice}>{totalPrice}<span> ₽</span></div>
                </div>
            </div>
            <div className={isModalOpen ? styles.overlayVisible : styles.overlayHidden}>
                <div className={styles.modal}>
                    <div onClick={() => setIsModalOpen(false)} className={styles.modalCloseBtn}>
                        <img src={closeIcon} alt="Закрыть"/>
                    </div>
                    <div className={styles.modalIcon}>
                        <img src={doubleCheckIcon} alt="Ok"/>
                    </div>
                    <h2 className={styles.modalTitle}>Спасибо за заказ</h2>
                    <p className={styles.modalText}>Наш менеджер свяжется с вами в ближайшее время</p>
                </div>
            </div>
        </PageContainer>
    );
};



export default CartPage;