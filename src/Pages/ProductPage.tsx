import React, {useEffect} from 'react';
import BreadCrumbs from "../Components/BreadCrumbs";
import PageContainer from "../Components/PageContainer";
import {useAppDispatch, useAppSelector} from "../store/hooks/redux";
import styles from '../styles/ProductPage.module.scss';
import shareIcon from '../img/share.svg';
import priceIcon from '../img/price-dark-icon.svg';
import Weight from "../Components/Weight";
import SpecificationProperty from "../Components/SpecificationProperty";
import AddToCart from "../Components/Cart/AddToCart";
import Divider from "../Components/Divider";
import {useParams} from "react-router";
import Spoiler from '../Components/Spoiler';
import {fetchProductItems} from "../store/reducers/ActionCreators";
import {scrollToUp} from "../utils/utils";
import EmptyBlock from "../Components/EmptyBlock";
import GoBackButton from "../Components/GoBackButton";
import {getIsLoading} from "../store/reducers/selectors/getIsLoading";
import {getProductItems} from "../store/reducers/selectors/getProductItems";
import {IProduct} from "../store/models/IProduct";
import Loader from "../Components/Loader";


const ProductPage: React.FC = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(getIsLoading);
    const productItems = useAppSelector(getProductItems);
    let product: IProduct | undefined;

    if (id) {
        product = productItems?.find(p => p.id === +id);
    }

    useEffect(() => {
        scrollToUp();
        if (!product) {
            dispatch(fetchProductItems());
        }
    }, [product, dispatch])

    return (
        <PageContainer>
            {isLoading && <Loader/>}
            {!isLoading && product && <>
                <BreadCrumbs
                    productName={product.title}
                    productUrl={'/catalog/' + product.barcode}/>
                <GoBackButton redirectTo='/catalog/1'/>
                <div className={styles.content}>
                    <div className={styles.image}>
                        <img src={product.url} alt={product.brand}/>
                    </div>
                    <div className={styles.information}>
                        <div className={styles.inStock}>В наличии</div>
                        <h1 className={styles.title} data-testid='title'>
                            <span>{product.brand}</span> {product.title}
                        </h1>
                        <div className={styles.weightBlock}>
                            <Weight typeOfSize={product.typeOfSize} size={product.size}/>
                        </div>
                        <div className={styles.addToCart}>
                            <AddToCart isFull={true} price={product.price} id={product.id}/>
                        </div>
                        <div className={styles.additional}>
                            <div className={styles.shareBtn}>
                                <img src={shareIcon} alt="поделиться"/>
                            </div>
                            <div className={styles.freeDelivery}>
                                    <span>
                                        При покупке от <span className={styles.bold}> 2 000 ₽ </span> бесплатная доставка по Кокчетаву и области
                                    </span>
                            </div>
                            <div className={styles.priceListBtn}>
                                <span>Прайс-лист</span>
                                <img src={priceIcon} alt="прайс-лист"/>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.specificationBlock}>
                                <SpecificationProperty label='Производитель:' text={product.manufacturer}/>
                                <SpecificationProperty label='Бренд:' text={product.brand}/>
                                <SpecificationProperty label='Артикул:' text={product.barcode.slice(0, 6)}/>
                                <SpecificationProperty label='Штрихкод:' text={product.barcode}/>
                            </div>
                            <div>
                                <Spoiler title='Описание'>
                                    <div className={styles.descriptionText}>
                                        {product.description}
                                    </div>
                                </Spoiler>
                                <Divider widthInPx={270}/>
                                <Spoiler title='Характеристики'>
                                    <div>
                                        <SpecificationProperty label='Тип ухода:'
                                                               text={product.typeOfCare.join(', ')}/>
                                        {product.subtypeOfCare &&
                                            <SpecificationProperty label='Назначение:'
                                                                   text={product.subtypeOfCare.join(', ')}/>}
                                        <SpecificationProperty label='Производитель:' text={product.manufacturer}/>
                                        <SpecificationProperty label='Бренд:' text={product.brand}/>
                                        <SpecificationProperty label='Артикул:' text={product.barcode.slice(0, 6)}/>
                                        <SpecificationProperty label='Штрихкод:' text={product.barcode}/>
                                        <SpecificationProperty
                                            label={product.typeOfSize === 'weight' ? 'Вес:'
                                                : product.typeOfSize === 'volume' ? 'Объем:' : ''}
                                            text={product.typeOfSize === 'weight' ? product.size + ' г'
                                                : product.typeOfSize === 'volume' ? product.size + ' мл' : ''}/>
                                    </div>
                                </Spoiler>
                            </div>
                        </div>
                    </div>
                </div>
            </>}
            {!isLoading && !product && <EmptyBlock title='Товар не найден'/>}
        </PageContainer>
    );
};

export default ProductPage;