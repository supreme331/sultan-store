import React, {useEffect, useState} from 'react';
import BreadCrumbs from "../Components/BreadCrumbs";
import PageContainer from "../Components/PageContainer";
import styles from '../styles/CatalogPage.module.scss';
import {
    EBodyCare,
    EFaceCare,
    EFootCare,
    EGiftSets,
    EHairCare,
    EHandsCare,
    EShaving,
    ETanning,
    ETypeOfCare
} from "../store/enums/EProducts";
import {useAppDispatch, useAppSelector} from "../store/hooks/redux";
import CatalogAside from "../Components/Catalog/CatalogAside/CatalogAside";
import CardsBlock from "../Components/Catalog/CardsBlock/CardsBlock";
import CareTypesBlock from "../Components/Catalog/CareTypesBlock";
import {setCurrentTypeOfCare} from "../store/reducers/CatalogSlice";
import SortBy from "../Components/Catalog/SortBy";
import {ESortByVariants} from "../store/enums/ECatalog";
import {IProduct} from "../store/models/IProduct";
import {useNavigate, useParams} from "react-router";
import {fetchProductItems} from "../store/reducers/ActionCreators";
import Loader from "../Components/Loader";
import GoBackButton from "../Components/GoBackButton";

const CatalogPage: React.FC<CatalogProps> = () => {

    const isLoading = useAppSelector(state => state.catalogReducer.isLoading);
    const {currentPage} = useParams();
    const navigate = useNavigate();
    const productItems = useAppSelector(state => state.catalogReducer.productItems);
    const currentSubtypeOfCare = useAppSelector(state => state.catalogReducer.currentSubtypeOfCare);
    const currentTypeOfCare = useAppSelector(state => state.catalogReducer.currentTypeOfCare);
    const selectedManufacturers = useAppSelector(state => state.catalogReducer.selectedManufacturers);
    const dispatch = useAppDispatch();
    const [cardItems, setCardItems] = useState<IProduct[]>(productItems);
    const [sortBy, setSortBy] = useState<ESortByVariants>(ESortByVariants.ascendingPrices);

    useEffect(() => {
        dispatch(fetchProductItems());
    }, [dispatch])

    useEffect(() => {
        setCardItems(productItems);
    }, [productItems])

    useEffect(() => {
        if (!currentPage) {
            navigate('/catalog/1')
        }
    }, [currentPage, navigate])

    useEffect(() => {
        if (currentSubtypeOfCare) {
            // @ts-ignore
            if (Object.values(EBodyCare).includes(currentSubtypeOfCare)) {
                dispatch(setCurrentTypeOfCare(ETypeOfCare.body));
            }
            // @ts-ignore
            if (Object.values(EHandsCare).includes(currentSubtypeOfCare)) {
                dispatch(setCurrentTypeOfCare(ETypeOfCare.hands));
            }
            // @ts-ignore
            if (Object.values(EFootCare).includes(currentSubtypeOfCare)) {
                dispatch(setCurrentTypeOfCare(ETypeOfCare.foot));
            }
            // @ts-ignore
            if (Object.values(EFaceCare).includes(currentSubtypeOfCare)) {
                dispatch(setCurrentTypeOfCare(ETypeOfCare.face));
            }
            // @ts-ignore
            if (Object.values(EHairCare).includes(currentSubtypeOfCare)) {
                dispatch(setCurrentTypeOfCare(ETypeOfCare.hair));
            }
            // @ts-ignore
            if (Object.values(ETanning).includes(currentSubtypeOfCare)) {
                dispatch(setCurrentTypeOfCare(ETypeOfCare.tanning));
            }
            // @ts-ignore
            if (Object.values(EShaving).includes(currentSubtypeOfCare)) {
                dispatch(setCurrentTypeOfCare(ETypeOfCare.shaving));
            }
            // @ts-ignore
            if (Object.values(EGiftSets).includes(currentSubtypeOfCare)) {
                dispatch(setCurrentTypeOfCare(ETypeOfCare.giftSets));
            }
        }
    }, [currentSubtypeOfCare, dispatch])

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
    }, [currentTypeOfCare, currentSubtypeOfCare, productItems])

    useEffect(() => {
        if (sortBy === ESortByVariants.ascendingPrices) {
            setCardItems([...cardItems].sort((a, b) => a.price - b.price));
        }

        if (sortBy === ESortByVariants.descendingPrices) {
            setCardItems([...cardItems].sort((a, b) => b.price - a.price));
        }

        if (sortBy === ESortByVariants.nameAZ) {
            setCardItems([...cardItems].sort((a, b) => {
                if (a.title > b.title) {
                    return 1;
                } else {
                    return -1;
                }
            }));
        }

        if (sortBy === ESortByVariants.nameZA) {
            setCardItems([...cardItems].sort((a, b) => {
                if (a.title < b.title) {
                    return 1;
                } else {
                    return -1;
                }
            }));
        }
    }, [sortBy])

    function onFilterApply(minPrice: number, maxPrice: number) {
        let items = productItems.filter(item => item.price > minPrice && item.price < maxPrice)

        if (selectedManufacturers.length) {
            items = items.filter(item => selectedManufacturers.includes(item.manufacturer));
        }

        setCardItems(items);
    }

    function onChangeSort(sortValue: ESortByVariants) {
        setSortBy(sortValue);
    }

    return (
        <PageContainer>
            <BreadCrumbs/>
            <GoBackButton redirectTo='/' />
            <div className={styles.content}>
                <div className={styles.head}>
                    <h1 className={styles.title}>Каталог</h1>
                    <div className={styles.sortBy}>
                        <SortBy sortBy={sortBy} onChangeSort={onChangeSort}/>
                    </div>
                </div>
                <div className={styles.careTypesBlock}>
                    <CareTypesBlock/>
                </div>
                <main className={styles.main}>
                    <CatalogAside onFilterApply={onFilterApply} sortBy={sortBy} onChangeSort={onChangeSort}/>
                    {isLoading ? <Loader /> : <CardsBlock cardItems={cardItems}/>}
                </main>
            </div>
        </PageContainer>
    );
};

interface CatalogProps {

}

export default CatalogPage;