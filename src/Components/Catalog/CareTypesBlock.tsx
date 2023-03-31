import React from 'react';
import styles from "../../styles/CareTypesBlock.module.scss";

import {showAllProductsOfType} from "../../store/reducers/CatalogSlice";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import {ETypeOfCare} from "../../store/enums/EProducts";

const CareTypesBlock = () => {

    const dispatch = useAppDispatch();
    const currentTypeOfCare = useAppSelector(state => state.catalogReducer.currentTypeOfCare);

    return (
        <ul className={styles.typeOfCare}>
            {
                Object.values(ETypeOfCare)
                    .map((value) =>
                        <li key={value}
                            className={currentTypeOfCare === value
                                ? styles.typeOfCareActiveItem
                                : styles.typeOfCareItem}
                        onClick={() => dispatch(showAllProductsOfType(value))}>
                            {value}
                        </li>)
            }
        </ul>
    );
};

export default CareTypesBlock;