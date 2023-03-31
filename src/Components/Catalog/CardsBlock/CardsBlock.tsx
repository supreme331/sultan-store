import React, {useEffect, useState} from 'react';
import styles from "../../../styles/CardsBlock.module.scss";
import ProductCard from "./ProductCard";
import {IProduct} from "../../../store/models/IProduct";
import Pagination from "../../Pagination";
import {useParams} from "react-router";

const CardsBlock: React.FC<CardsBlockProps> = ({cardItems}) => {

    const {currentPage} = useParams();
    const [itemsToRender, setItemsToRender] = useState<IProduct[]>([]);

    useEffect(() => {

        if (currentPage && cardItems.length) {
            const items = [];
            for (let i = (+currentPage - 1) * 15; i < +currentPage * 15; i++) {
                if (cardItems[i]) {
                    items.push(cardItems[i]);
                }
            }
            setItemsToRender(items)
        }
    }, [currentPage, cardItems])

    return (
        <div className={styles.cardsBlock}>
            <ul className={styles.cardsList}>
                {itemsToRender.map(product => <ProductCard key={product.id} product={product}/>)}
            </ul>
            <Pagination totalCount={cardItems.length} perPage={15}/>
        </div>

    );
};

interface CardsBlockProps {
    cardItems: IProduct[]
}

export default CardsBlock;