import React, {useEffect, useState} from 'react';
import styles from "../../styles/AddToCart.module.scss";
import Button from "../Button";
import cartIcon from "../../img/cart-small-icon.svg";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import {addToCart} from "../../store/reducers/CartSlice";
import {Link} from "react-router-dom";
import {getCartItems} from "../../store/reducers/selectors/getCartItems";

const AddToCart: React.FC<AddToCartProps> = ({price, id, isFull = false}) => {

    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(getCartItems);
    const [amount, setAmount] = useState(1);
    const [isInCart, setIsInCart] = useState<boolean>(false);

    useEffect(() => {
        if (cartItems) {
            setIsInCart(cartItems.some(item => item.id === id));
        }
    }, [])

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
                    <span data-testid='increaseBtn' onClick={() => increaseAmount()}>+</span>
                </div>}
                <div data-testid='addToCart' onClick={() => onAddToCart()}>
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