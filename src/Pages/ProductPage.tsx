import React, {useState} from 'react';
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import PageContainer from "../../Components/PageContainer/PageContainer";
import {useAppSelector} from "../../store/hooks/redux";
import styles from '../../styles/ProductPage.module.scss';
import shareIcon from '../../img/share.svg';
import priceIcon from '../../img/price-dark-icon.svg';
import {Link} from "react-router-dom";
import Weight from "../../Components/Weight/Weight";
import SpecificationProperty from "../../Components/SpecificationProperty/SpecificationProperty";
import AddToCart from "../../Components/Cart/AddToCart";
import Divider from "../../Components/Divider/Divider";
import {useParams} from "react-router";

interface ProductPageProps {

}

const ProductPage: React.FC<ProductPageProps> = ({}) => {
    const params = useParams();
    // @ts-ignore
    const product = useAppSelector(state => state.productReducer.productItems.find(p => p.id === +params.id));





    return (
        <PageContainer>
            {
                product && <>
                    <BreadCrumbs
                        productName={product.title}
                        productUrl={'/catalog/' + product.barcode}/>

                    <div className={styles.content}>
                        <div className={styles.image}>
                            <img src={product.url} alt={product.brand}/>
                        </div>
                        <div className={styles.information}>
                            <div className={styles.inStock}>В наличии</div>
                            <h1 className={styles.title}><span>{product.brand}</span> {product.title}</h1>
                            <Weight typeOfSize={product.typeOfSize} size={product.size}/>
                            <div className={styles.addToCart}>
                                <AddToCart isFull={true} price={product.price} id={product.id}/>
                            </div>
                            <div className={styles.additional}>
                                <Link className={styles.shareBtn} to='/'>
                                    <div>
                                        <img src={shareIcon} alt="поделиться"/>
                                    </div>
                                </Link>
                                <div>
                            <span>
                                При покупке от <span className={styles.bold}> 10 000 ₽ </span> бесплатная доставка по Кокчетаву и области
                            </span>
                                </div>
                                <Link className={styles.priceListBtn} to='/'>
                                    <div>
                                        <span>Прайс-лист</span>
                                        <img src={priceIcon} alt="прайс-лист"/>
                                    </div>
                                </Link>
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
                                    <Divider widthInPx={270} />
                                    <Spoiler title='Характеристики'>
                                        <div>
                                            <SpecificationProperty label='Тип ухода:' text={product.typeOfCare.join(', ')}/>
                                            {product.subtypeOfCare &&
                                                <SpecificationProperty label='Назначение:' text={product.subtypeOfCare.join(', ')}/>}
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
                </>
            }

        </PageContainer>
    );
};


const Spoiler: React.FC<SpoilerProps> = ({title, children}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div>
            <h2 onClick={() => setIsOpen(!isOpen)} className={styles.spoilerTitle}>
                {title}
                <div className={styles.spoilerTriangle}>
                    <span className={isOpen ? styles.spoilerTriangleUp : styles.spoilerTriangleDown}></span>
                </div>
            </h2>
            <div>
                {isOpen && children}
            </div>
        </div>
    )
}


interface SpoilerProps {
    title: string;
    children: React.ReactElement | React.ReactNode;
}

export default ProductPage;