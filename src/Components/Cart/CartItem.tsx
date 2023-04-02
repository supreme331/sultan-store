import React from 'react';
import styles from '../../styles/CartItem.module.scss'
import {IProduct} from "../../store/models/IProduct";
import Weight from "../Weight";
import {Link} from "react-router-dom";
import Button from "../Button";
import deleteIcon from "../../img/delete-icon.svg";
import Divider from "../Divider";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import {decreaseAmount, increaseAmount, removeFromCart} from "../../store/reducers/CartSlice";

const CartItem: React.FC<CartItemProps> = ({productItem}) => {

    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(state => state.cartReducer.cartItems);
    const cartItem = cartItems.find(item => item.id === productItem.id);

    function onRemoveFromCart() {
        dispatch(removeFromCart({id: productItem.id}))
    }

    return (
        <li>
            <div className={styles.cartItem}>
                <Link to={'/products/' + productItem.barcode}>
                    <div className={styles.image}>
                        <img src={productItem.url} alt={productItem.brand}/>
                    </div>
                </Link>
                <div className={styles.description}>
                    <Weight typeOfSize={productItem.typeOfSize} size={productItem.size} />
                    <Link to={'/products/' + productItem.barcode}>
                        <h2 className={styles.title}><span>{productItem.brand}</span> {productItem.title}</h2>
                    </Link>
                    <p className={styles.descriptionText}>
                        {productItem.description.slice(0, 170) + '...'}
                    </p>
                </div>
                <div  className={styles.edit}>
                    <Divider direction='vertical' heightInPx={49}/>
                    <div className={styles.counter}>
                        <span onClick={() => dispatch(decreaseAmount({id: productItem.id}))}>-</span>
                        <span>{cartItem?.amount}</span>
                        <span onClick={() => dispatch(increaseAmount({id: productItem.id}))}>+</span>
                    </div>
                    <Divider direction='vertical' heightInPx={49}/>
                    <div className={styles.price}>
                        {cartItem ? productItem.price * cartItem?.amount : productItem.price}
                        <span> ₽</span>
                    </div>
                    <Divider direction='vertical' heightInPx={49}/>
                    <div onClick={() => onRemoveFromCart()}>
                        <Button icon={deleteIcon} alt='Удалить'/>
                    </div>
                </div>
            </div>
            <Divider />
        </li>
    );
};

interface CartItemProps {
    productItem: IProduct;
}

export default CartItem;