import React, {useEffect, useState} from 'react';
import styles from "../../styles/CatalogPage.module.scss";
import ProductCard from "./ProductCard";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import {
    bodyCare,
    faceCare,
    footCare, giftSets,
    hairCare,
    handsCare,
    IProduct,
    shaving,
    tanning,
    typeOfCare
} from "../../store/models/IProduct";
import {setCurrentSubtypeOfCare, setCurrentTypeOfCare, showAllProductsOfType} from "../../store/reducers/ProductsSlice";

const CardsBlock: React.FC<CardsBlockProps> = ({cardItems}) => {



    return (
        <div>
            <ul className={styles.cardsList}>
                {cardItems.map(product => <ProductCard key={product.id} product={product}/>)}
            </ul>
        </div>
    );
};

interface CardsBlockProps {
    cardItems: IProduct[]
}

export default CardsBlock;