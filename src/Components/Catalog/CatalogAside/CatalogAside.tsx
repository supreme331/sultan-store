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

const CatalogAside: React.FC<CatalogAsideProps> = ({onFilterApply}) => {

    return (
        <aside className={styles.aside}>
            <div className={styles.selection}>
                <SelectionByParameters onButtonClick={onFilterApply} />
            </div>
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
        </aside>
    )
}

interface CatalogAsideProps {
    onFilterApply: (minPrice: number, maxPrice: number) => void;
}

export default CatalogAside;