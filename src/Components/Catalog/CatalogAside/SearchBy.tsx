import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from "../../../styles/SearchBy.module.scss";
import Input, {InputTypes} from "../../Input";
import {useAppDispatch, useAppSelector} from "../../../store/hooks/redux";
import {IProduct} from "../../../store/models/IProduct";
import {
    addSelectedManufacturer,
    clearSelectedManufacturer,
    deleteSelectedManufacturer
} from "../../../store/reducers/CatalogSlice";

const SearchBy: React.FC<SearchByProps> = ({title, filteringParameter}) => {

    const dispatch = useAppDispatch();
    const parameterItems: { [index: string]: { itemsCount: number, isChecked: boolean } } = {};
    const selectedManufacturers = useAppSelector(state => state.catalogReducer.selectedManufacturers);
    const initialProductItems = useAppSelector(state => state.catalogReducer.productItems);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [productItems, setProductItems] = useState<IProduct[]>(initialProductItems);

    useEffect(() => {
        setProductItems(initialProductItems);
    }, [initialProductItems])

    // Калькуляция количества товаров по конкретному параметру, установка значения checkbox
    for (let i = 0; i < productItems.length; i++) {
        if (parameterItems[productItems[i][filteringParameter]]) {
            parameterItems[productItems[i][filteringParameter]].itemsCount++
        } else {
            let isChecked = false;

            if (filteringParameter === 'manufacturer') {
                isChecked = selectedManufacturers.includes(productItems[i][filteringParameter])
            }

            parameterItems[productItems[i][filteringParameter]] = {
                itemsCount: 1,
                isChecked: isChecked
            }
        }
    }

    const itemsToRender = Object.entries(parameterItems)
        .sort((a, b) => {
            if (a[0] > b[0]) {
                return 1
            } else {
                return -1
            }
        })

    function onCheckboxInputChange(e: ChangeEvent<HTMLInputElement>) {
        if (filteringParameter === 'manufacturer') {
            if (e.target.checked) {
                dispatch(addSelectedManufacturer(e.target.value))
            }
            if (!e.target.checked) {
                dispatch(deleteSelectedManufacturer(e.target.value))
            }
        }
    }

    function onFilterParameters(value: string) {
        dispatch(clearSelectedManufacturer())
        setProductItems(initialProductItems.filter(item => item[filteringParameter].toLowerCase().includes(value)))
    }

    return (
        <div>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.searchInput}>
                <Input
                    inputType={InputTypes.search}
                    placeholder={filteringParameter === 'manufacturer'
                        ? 'Поиск производителя...' : ''}
                    onButtonClick={onFilterParameters}/>
            </div>
            <ul className={styles.itemsList}>
                {
                    !isOpen && itemsToRender.slice(0, 4).map(arr => <li key={arr[0]}>
                        <label>
                            <input
                                onChange={(e) => onCheckboxInputChange(e)}
                                type="checkbox"
                                name={filteringParameter}
                                value={arr[0]}
                                checked={arr[1].isChecked}/>
                            <span className={styles.manufacturer}>{arr[0]}</span>
                            <div className={styles.itemsCount}>({arr[1].itemsCount})</div>
                        </label></li>)
                }
                {
                    isOpen && itemsToRender.map(arr => <li key={arr[0]}><label>
                        <input
                            onChange={(e) => onCheckboxInputChange(e)}
                            type="checkbox"
                            name={filteringParameter}
                            value={arr[0]}
                            checked={arr[1].isChecked}/>
                        {
                            arr[0].length > 20 ?
                                <div className={styles.manufacturerCropped}>
                                    <span>{arr[0].slice(0, 20) + '...'}</span>
                                    <span className={styles.tooltip}>{arr[0]}</span>
                                </div>
                                : <div className={styles.manufacturer}>{arr[0]}</div>
                        }
                        <div className={styles.itemsCount}>({arr[1].itemsCount})</div>
                    </label></li>)
                }
            </ul>
            <div className={styles.isOpen} onClick={() => setIsOpen(!isOpen)}>
                <div className={styles.isOpenTitle}>{isOpen ? 'Скрыть' : 'Показать все'}</div>
                <div className={styles.isOpenTriangle}>
                    <span className={isOpen ? styles.isOpenTriangleUp : styles.isOpenTriangleDown}></span>
                </div>
            </div>
        </div>
    );
};

interface SearchByProps {
    title: string;
    filteringParameter: 'manufacturer';
}

export default SearchBy;