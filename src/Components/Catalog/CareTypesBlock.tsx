import React from 'react';
import styles from "../styles/CareTypesBlock.module.scss";
import {typeOfCare} from "../store/models/IProduct";
import {showAllProductsOfType} from "../store/reducers/ProductsSlice";
import {useAppDispatch} from "../store/hooks/redux";

const CareTypesBlock = () => {

    const dispatch = useAppDispatch()

    return (
        <ul className={styles.typeOfCare}>
            {
                Object.values(typeOfCare)
                    .map((value) =>
                        <li key={value}
                            className={styles.typeOfCare__item}
                        onClick={() => dispatch(showAllProductsOfType(value))}>
                            {value}
                        </li>)
            }
        </ul>
    );
};

export default CareTypesBlock;