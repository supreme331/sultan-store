import React from "react";
import styles from "../../../styles/CatalogAside.module.scss";
import SelectionByParameters from "./SelectionByParameters";
import AsideSection from "./AsideSection";
import {
    EBodyCare,
    EFaceCare,
    EFootCare,
    EGiftSets,
    EHairCare,
    EHandsCare,
    EShaving,
    ETanning,
    ETypeOfCare
} from "../../../store/enums/EProducts";
import Divider from "../../Divider";
import CareTypesBlock from "../CareTypesBlock";
import SortBy from "../SortBy";
import {ESortByVariants} from "../../../store/enums/ECatalog";

const CatalogAside: React.FC<CatalogAsideProps> = ({onFilterApply, sortBy, onChangeSort}) => {

    return (
        <aside className={styles.aside}>
            <div className={styles.selection}>
                <SelectionByParameters onButtonClick={onFilterApply} />
            </div>
            <div className={styles.careTypesBlock}>
                <CareTypesBlock/>
            </div>
            <div className={styles.sortBy}>
                <SortBy sortBy={sortBy} onChangeSort={onChangeSort}/>
            </div>
            <div className={styles.careSubtypesBlock}>
                <AsideSection title={ETypeOfCare.body} subTypeOfCareEnum={EBodyCare}/>
                <Divider widthInPx={238} />
                <AsideSection title={ETypeOfCare.hands} subTypeOfCareEnum={EHandsCare}/>
                <Divider widthInPx={238} />
                <AsideSection title={ETypeOfCare.foot} subTypeOfCareEnum={EFootCare}/>
                <Divider widthInPx={238} />
                <AsideSection title={ETypeOfCare.face} subTypeOfCareEnum={EFaceCare}/>
                <Divider widthInPx={238} />
                <AsideSection title={ETypeOfCare.hair} subTypeOfCareEnum={EHairCare}/>
                <Divider widthInPx={238} />
                <AsideSection title={ETypeOfCare.tanning} subTypeOfCareEnum={ETanning}/>
                <Divider widthInPx={238} />
                <AsideSection title={ETypeOfCare.shaving} subTypeOfCareEnum={EShaving}/>
                <Divider widthInPx={238} />
                <AsideSection title={ETypeOfCare.giftSets} subTypeOfCareEnum={EGiftSets}/>
            </div>
        </aside>
    )
}

interface CatalogAsideProps {
    onFilterApply: (minPrice: number, maxPrice: number) => void;
    sortBy: ESortByVariants;
    onChangeSort: (sortValue: ESortByVariants) => void;
}

export default CatalogAside;