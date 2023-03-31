import React from 'react';
import styles from '../../styles/CartItems.module.scss';
import {IProduct} from "../../store/models/IProduct";
import CartItem from "./CartItem";
import {useAppSelector} from "../../store/hooks/redux";
// import {ICartItem} from "../../store/reducers/CartSlice";

const CartItems: React.FC<CartItemsProps> = ({items}) => {


    return (
        <>
            {items.length ? <ul className={styles.cartItems}>
                {items.map(item => <CartItem key={item.id} productItem={item}/>)}
            </ul> : null}
        </>
    );
};

interface CartItemsProps {
    items: IProduct[];
}

export default CartItems;