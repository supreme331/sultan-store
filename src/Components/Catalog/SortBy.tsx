import React, {useState} from 'react';
import styles from "../../styles/SortBy.module.scss";
import {ESortByVariants} from "../../store/enums/ECatalog";

const SortBy: React.FC<SortByProps> = ({sortBy, onChangeSort}) => {

    const [isSortListOpen, setIsSortListOpen] = useState<boolean>(false);

    function setSortingValue(sortValue: ESortByVariants) {
        onChangeSort(sortValue);
        setIsSortListOpen(false);
    }

    return (
        <div className={styles.sort}>
            <div className={styles.title}>Сортировка:</div>
            <div data-testid='toggleListOpen'
                 onClick={() => setIsSortListOpen(!isSortListOpen)}
                 className={styles.sortValue}>
                <span>{sortBy}</span>
                <div className={styles.sortTriangle}>
                    <span className={isSortListOpen ? styles.sortTriangleUp : styles.sortTriangleDown}></span>
                </div>
            </div>
            <ul className={isSortListOpen ? styles.sortList : styles.sortListHidden}>
                <li onClick={() => setSortingValue(ESortByVariants.ascendingPrices)}
                    className={styles.sortListValue}>
                    {ESortByVariants.ascendingPrices}
                </li>
                <li data-testid='descendingPrices'
                    onClick={() => setSortingValue(ESortByVariants.descendingPrices)}
                    className={styles.sortListValue}>
                    {ESortByVariants.descendingPrices}
                </li>
                <li onClick={() => setSortingValue(ESortByVariants.nameAZ)}
                    className={styles.sortListValue}>
                    {ESortByVariants.nameAZ}
                </li>
                <li onClick={() => setSortingValue(ESortByVariants.nameZA)}
                    className={styles.sortListValue}>
                    {ESortByVariants.nameZA}
                </li>
            </ul>
        </div>
    );
};

interface SortByProps {
    sortBy: ESortByVariants;
    onChangeSort: (sortValue: ESortByVariants) => void;
}

export default SortBy;