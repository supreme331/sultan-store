import React from "react";
import styles from "../../../styles/ProductCard.module.scss";
import Weight from "../../Weight";
import SpecificationProperty from "../../SpecificationProperty";
import AddToCart from "../../Cart/AddToCart";
import {IProduct} from "../../../store/models/IProduct";
import {Link} from "react-router-dom";

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    return (
        <li className={styles.cardContainer}>
            <Link to={'/products/' + product.barcode}>
                <div className={styles.image}>
                    <img src={product.url} alt={product.brand}/>
                </div>
            </Link>
            <div className={styles.weight}>
                <Weight typeOfSize={product.typeOfSize} size={product.size}/>
            </div>
            <Link to={'/products/' + product.barcode}>
                <h2 className={styles.title}><span>{product.brand}</span> {product.title}</h2>
            </Link>
            <SpecificationProperty label='Штрихкод:' text={product.barcode}/>
            <SpecificationProperty label='Производитель:' text={product.manufacturer}/>
            <SpecificationProperty label='Бренд:' text={product.brand}/>
            <div className={styles.addToCart}>
                <AddToCart price={product.price} id={product.id}/>
            </div>
        </li>
    )
}

interface ProductCardProps {
    product: IProduct;
}

export default ProductCard;