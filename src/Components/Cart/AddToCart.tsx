import React, {useState} from 'react';
import styles from "../../styles/AddToCart.module.scss";
import Button from "../Button";
import cartIcon from "../../img/cart-small-icon.svg";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import {addToCart} from "../../store/reducers/CartSlice";
import {Link} from "react-router-dom";

const AddToCart: React.FC<AddToCartProps> = ({price, id, isFull = false}) => {

    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(state => state.cartReducer.cartItems);
    const initialIsInCart = cartItems.some(item => item.id === id);
    const [amount, setAmount] = useState(1);
    const [isInCart, setIsInCart] = useState<boolean>(initialIsInCart);

    function onAddToCart() {
        dispatch(addToCart({price, id, amount}));
        setIsInCart(true);
    }

    function increaseAmount() {
        setAmount(prev => prev + 1);
    }

    function decreaseAmount() {
        if (amount > 1) {
            setAmount(prev => prev - 1);
        }
    }

    if (!isInCart) {
        return (
            <div className={isFull ? styles.addToCartFull : styles.addToCart}>
                <div className={isFull ? styles.priceFull : styles.price}>{price} ₽</div>
                {isFull && <div className={styles.counter}>
                    <span onClick={() => decreaseAmount()}>-</span>
                    <span>{amount}</span>
                    <span onClick={() => increaseAmount()}>+</span>
                </div>}
                <div onClick={() => onAddToCart()}>
                    <Button text='В корзину' icon={cartIcon} alt='корзина' size='Medium'/>
                </div>
            </div>
        );
    } else {
        return (
            <div className={isFull ? styles.addToCartFull : styles.addToCart}>
                <div className={isFull ? styles.priceFull : styles.price}>{price} ₽</div>

                <Link to='/cart'>
                    <Button text='Перейти в корзину' size='Medium'/>
                </Link>
            </div>
        );
    }
};

interface AddToCartProps {
    price: number;
    id: number;
    isFull?: boolean;
}

export default AddToCart;