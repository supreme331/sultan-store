import React from 'react';
import styles from '../../styles/AsideSection.module.scss';
import {useAppDispatch} from "../../store/hooks/redux";
import {setCurrentSubtypeOfCare, showAllProductsOfType} from "../../store/reducers/ProductsSlice";
import {typeOfCare} from "../../store/models/IProduct";


const AsideSection: React.FC<AsideSectionProps> = ({title, subTypeOfCareEnum}) => {

    const dispatch = useAppDispatch();

    return (
        <div>
            <h3 onClick={() => dispatch(showAllProductsOfType(title))} className={styles.title}>{title}</h3>
            <ul className={styles.sectionList}>
                {
                    Object.values(subTypeOfCareEnum).map((value) => typeof value !== 'number' &&
                        <li onClick={() => dispatch(setCurrentSubtypeOfCare(value))} key={value}>{value}</li>)
                }
            </ul>
        </div>
    );
};

interface AsideSectionProps {
    title: typeOfCare;
    subTypeOfCareEnum: object;
}

export default AsideSection;

//bodyCare | handsCare | footCare | faceCare | hairCare | tanning | shaving | giftSets