import React from 'react';
import styles from "../../styles/CareTypesBlock.module.scss";
import {showAllProductsOfType} from "../../store/reducers/CatalogSlice";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import {ETypeOfCare} from "../../store/enums/EProducts";
import {useNavigate} from "react-router";
import {getCurrentTypeOfCare} from "../../store/reducers/selectors/getCurrentTypeOfCare";

const CareTypesBlock = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const currentTypeOfCare = useAppSelector(getCurrentTypeOfCare);

    function onChangeTypeOfCare(value: ETypeOfCare) {
        dispatch(showAllProductsOfType(value));
        navigate('/catalog/1');
    }

    return (
        <ul className={styles.typeOfCare}>
            {
                Object.values(ETypeOfCare)
                    .map((value) =>
                        <li key={value}
                            data-testid={value}
                            className={currentTypeOfCare === value
                                ? styles.typeOfCareActiveItem
                                : styles.typeOfCareItem}
                        onClick={() => onChangeTypeOfCare(value)}>
                            {value}
                        </li>)
            }
        </ul>
    );
};

export default CareTypesBlock;