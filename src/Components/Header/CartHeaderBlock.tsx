import React from 'react';
import cartIcon from "../../img/cart-icon.svg";
import styles from '../../styles/CartHeaderBlock.module.scss';
import {Link} from "react-router-dom";
import {useAppSelector} from "../../store/hooks/redux";


const CartHeaderBlock: React.FC<CartHeaderBlockProps> = ({isMobile = false}) => {

    const totalPrice = useAppSelector(state => state.cartReducer.totalPrice);
    const cartItems = useAppSelector(state => state.cartReducer.cartItems);

    return (
        <Link to='/cart' className={styles.cartBlock}>
            <div className={isMobile ? styles.cartBlock__iconMobile : styles.cartBlock__icon}>
                <img src={cartIcon} alt="корзина"/>
                {
                    cartItems.length
                        ? <span className={styles.cartBlock__itemsCount}>{cartItems.length}</span>
                        : null
                }
            </div>
            {
                !isMobile ? <div>
                <div>Корзина</div>
                <div className={styles.cartBlock__totalPrice}>{totalPrice}<span> ₽</span></div>
            </div> : null
            }
        </Link>
    );
};

interface CartHeaderBlockProps {
    isMobile?: boolean;
}

export default CartHeaderBlock;