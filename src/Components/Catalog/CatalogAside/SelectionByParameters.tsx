import React, {useState} from 'react';
import styles from "../../../styles/SelectionByParameters.module.scss";
import SearchBy from "./SearchBy";
import Button from "../../Button";
import deleteIcon from "../../../img/delete-icon.svg";
import {useAppDispatch} from "../../../store/hooks/redux";
import {clearSelectedManufacturer} from "../../../store/reducers/CatalogSlice";

const SelectionByParameters: React.FC<SelectionByParametersProps> = ({onButtonClick}) => {

    const dispatch = useAppDispatch();
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(10000);

    function resetForm() {
        setMinPrice(0);
        setMaxPrice(10000);
        dispatch(clearSelectedManufacturer());
    }

    return (
        <div>
            <h3 className={styles.title}>ПОДБОР ПО ПАРАМЕТРАМ</h3>
            <div className={styles.setCostBlock}>
                <div className={styles.setCostBlock__subtitle}>Цена <span>₽</span></div>
                <div className={styles.setCost}>
                    <input type="text"
                           name='minPrice'
                           onChange={(e) => setMinPrice(+e.target.value)}
                           value={minPrice}/>
                    <span>-</span>
                    <input type="text"
                           name='maxPrice'
                           onChange={(e) => setMaxPrice(+e.target.value)}
                           value={maxPrice}/>
                </div>
            </div>
            <div>
                <SearchBy title='Производитель'
                          filteringParameter='manufacturer'/>
            </div>
            <div className={styles.buttons}>
                <div onClick={() => onButtonClick(minPrice, maxPrice)} className={styles.btn}>
                    <Button text='Показать'/>
                </div>
                <div onClick={() => resetForm()} className={styles.btn}>
                    <Button icon={deleteIcon} alt='Очистить'/>
                </div>
            </div>
        </div>
    );
};

interface SelectionByParametersProps {
    onButtonClick: (minPrice: number, maxPrice: number) => void;
}

export default SelectionByParameters;