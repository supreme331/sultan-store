import React, {useEffect, useState} from 'react';
import styles from '../styles/CartPage.module.scss';
import PageContainer from "../Components/PageContainer";
import BreadCrumbs from "../Components/BreadCrumbs";
import CartItems from "../Components/Cart/CartItems";
import {useAppDispatch, useAppSelector} from "../store/hooks/redux";
import {IProduct} from "../store/models/IProduct";
import Button from "../Components/Button";
import Divider from "../Components/Divider";
import doubleCheckIcon from '../img/double-check-icon.svg';
import closeIcon from '../img/close-icon.svg';
import {clearCart} from "../store/reducers/CartSlice";
import {scrollToUp} from "../utils/utils";
import GoBackButton from "../Components/GoBackButton";

const CartPage = () => {

    const cartItems = useAppSelector(state => state.cartReducer.cartItems);
    const totalPrice = useAppSelector(state => state.cartReducer.totalPrice);
    const productItems = useAppSelector(state => state.catalogReducer.productItems);
    const items: IProduct[] = [];
    const dispatch = useAppDispatch();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
        scrollToUp();
    }, [])

    for (let i = 0; i < cartItems.length; i++) {
        const product = productItems.find(product => product.id === cartItems[i].id);
        product && items.push(product);
    }

    function onPlaceOrder() {
        if (items.length) {
            setIsModalOpen(true);
            dispatch(clearCart());
        }
    }

    return (
        <PageContainer>
            <BreadCrumbs catalogName='Корзина' catalogUrl='/cart'/>
            <GoBackButton redirectTo='/catalog/' />
            <div className={styles.content}>
                <div className={styles.head}>
                    <h1 className={styles.title}>Корзина</h1>
                </div>
                <Divider/>
                {items.length
                    ? <CartItems items={items}/>
                    : <div className={styles.emptyCart}>
                        <div>Корзина пуста</div>
                        <Divider/>
                    </div>}

                <div className={styles.footer}>
                    <div  className={styles.placeOrderBtn} onClick={onPlaceOrder}>
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