import React, {useEffect, useState} from 'react';
import styles from '../../../styles/AsideSection.module.scss';
import {useAppDispatch, useAppSelector} from "../../../store/hooks/redux";
import {setCurrentSubtypeOfCare, showAllProductsOfType} from "../../../store/reducers/CatalogSlice";
import {ETypeOfCare} from "../../../store/enums/EProducts";
import {useNavigate} from "react-router";


const AsideSection: React.FC<AsideSectionProps> = ({title, subTypeOfCareEnum}) => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const currentTypeOfCare = useAppSelector(state => state.catalogReducer.currentTypeOfCare);
    const currentSubtypeOfCare = useAppSelector(state => state.catalogReducer.currentSubtypeOfCare);
    const [isActive, setIsActive] = useState<boolean>(false)

    useEffect(() => {
        setIsActive(currentTypeOfCare === title)
    },[currentTypeOfCare, title])

    function onChangeTypeOfCare(value: ETypeOfCare) {
        dispatch(showAllProductsOfType(value));
        navigate('/catalog/1');
    }

    return (
        <div>
            <h3 onClick={() => onChangeTypeOfCare(title)}
                className={isActive ? styles.activeTitle : styles.title}>{title}</h3>
            <ul>
                {
                    Object.values(subTypeOfCareEnum).map((value) => typeof value !== 'number' &&
                        <li  className={currentSubtypeOfCare === value
                            ? styles.subtypeActiveItem
                            : styles.subtypeItem}
                             onClick={() => {
                                 dispatch(setCurrentSubtypeOfCare(value));
                                 navigate('/catalog/1');
                             }}
                             key={value}>{value}</li>)
                }
            </ul>
        </div>
    );
};

interface AsideSectionProps {
    title: ETypeOfCare;
    subTypeOfCareEnum: object;
}

export default AsideSection;