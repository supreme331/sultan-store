import React, {useEffect, useState} from 'react';
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import PageContainer from "../../Components/PageContainer/PageContainer";
import styles from '../../styles/CatalogPage.module.scss';
import {
    bodyCare,
    faceCare,
    footCare, giftSets,
    hairCare,
    handsCare,
    IProduct, shaving,
    tanning,
    typeOfCare
} from "../../store/models/IProduct";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import Weight from "../../Components/Weight/Weight";
import SpecificationProperty from "../../Components/SpecificationProperty/SpecificationProperty";
import AddToCart from "../../Components/Cart/AddToCart";
import ProductCard from "../../Components/CardsBlock/ProductCard";
import CatalogAside from "../../Components/CatalogAside/CatalogAside";
import CardsBlock from "../../Components/CardsBlock/CardsBlock";
import CareTypesBlock from "../../Components/CareTypesBlock/CareTypesBlock";
import {setCurrentTypeOfCare} from "../../store/reducers/ProductsSlice";

interface CatalogProps {

}

const CatalogPage: React.FC<CatalogProps> = () => {

    const productItems = useAppSelector(state => state.productReducer.productItems);
    const currentSubtypeOfCare = useAppSelector(state => state.productReducer.currentSubtypeOfCare);
    const currentTypeOfCare = useAppSelector(state => state.productReducer.currentTypeOfCare);
    const selectedManufacturers = useAppSelector(state => state.productReducer.selectedManufacturers);
    const dispatch = useAppDispatch();
    // let cardItems: IProduct[] = [];
    const [cardItems, setCardItems] = useState<IProduct[]>(productItems);
    const [isSortListOpen, setIsSortListOpen] = useState<boolean>(false);

    useEffect(() => {
        if (currentSubtypeOfCare) {
            // @ts-ignore
            if (Object.values(bodyCare).includes(currentSubtypeOfCare)) {
                dispatch(setCurrentTypeOfCare(typeOfCare.body))
            }
            // @ts-ignore
            if (Object.values(handsCare).includes(currentSubtypeOfCare)) {
                dispatch(setCurrentTypeOfCare(typeOfCare.hands))
            }
            // @ts-ignore
            if (Object.values(footCare).includes(currentSubtypeOfCare)) {
                dispatch(setCurrentTypeOfCare(typeOfCare.foot))
            }
            // @ts-ignore
            if (Object.values(faceCare).includes(currentSubtypeOfCare)) {
                dispatch(setCurrentTypeOfCare(typeOfCare.face))
            }
            // @ts-ignore
            if (Object.values(hairCare).includes(currentSubtypeOfCare)) {
                dispatch(setCurrentTypeOfCare(typeOfCare.hair))
            }
            // @ts-ignore
            if (Object.values(tanning).includes(currentSubtypeOfCare)) {
                dispatch(setCurrentTypeOfCare(typeOfCare.tanning))
            }
            // @ts-ignore
            if (Object.values(shaving).includes(currentSubtypeOfCare)) {
                dispatch(setCurrentTypeOfCare(typeOfCare.shaving))
            }
            // @ts-ignore
            if (Object.values(giftSets).includes(currentSubtypeOfCare)) {
                dispatch(setCurrentTypeOfCare(typeOfCare.giftSets))
            }
        }
    }, [currentSubtypeOfCare])



    useEffect(() => {
        if (!currentTypeOfCare && !currentSubtypeOfCare) {
            setCardItems(productItems);
        }
        if (currentTypeOfCare && !currentSubtypeOfCare) {
            setCardItems(productItems.filter(item => item.typeOfCare.includes(currentTypeOfCare)));
        }
        if (currentTypeOfCare && currentSubtypeOfCare) {
            setCardItems(productItems.filter(item => item.subtypeOfCare?.includes(currentSubtypeOfCare)))
        }
    },[currentTypeOfCare, currentSubtypeOfCare])


    function onFilterApply(minPrice: number, maxPrice: number) {
        let items = productItems.filter(item => item.price > minPrice && item.price < maxPrice)

        if (selectedManufacturers.length) {
            items = items.filter(item => selectedManufacturers.includes(item.manufacturer));
        }
        setCardItems(items);
    }

    function onChangeSort() {

    }

    return (
        <PageContainer>
            <BreadCrumbs/>
            <div className={styles.content}>
                <div className={styles.head}>
                    <h1>Каталог</h1>
                    <div className={styles.sort}>
                        <div>Сортировка:</div> <span>Название</span> <div className={styles.spoilerTriangle}>
                        <span className={isSortListOpen ? styles.sortTriangleUp : styles.sortTriangleDown}></span>
                    </div>
                    </div>
                </div>
                <CareTypesBlock />
                <main className={styles.main}>
                    <CatalogAside onFilterApply={onFilterApply}/>
                    <CardsBlock cardItems={cardItems} />
                </main>
            </div>
        </PageContainer>
    );
};






export default CatalogPage;