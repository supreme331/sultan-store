import React from 'react';
import cartIcon from "../../img/cart-icon.svg";
import styles from './CartBlock.module.scss';
import {Link} from "react-router-dom";

interface CartBlockProps {
    cartItemsCount: number;
    totalPrice: number;
}

const CartBlock: React.FC<CartBlockProps> = ({cartItemsCount, totalPrice}) => {
    return (
        <Link to='/cart' className={styles.cartBlock}>
            <div className={styles.cartBlock__icon}>
                <img src={cartIcon} alt="корзина"/>
                <span className={styles.cartBlock__itemsCount}>{cartItemsCount}</span>
            </div>
            <div>
                <div>Корзина</div>
                <div className={styles.cartBlock__totalPrice}>{totalPrice}<span> ₽</span></div>
            </div>
        </Link>
    );
};

export default CartBlock;