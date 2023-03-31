import React from "react";
import styles from "../../styles/CatalogAside.module.scss";
import SelectionByParameters from "./SelectionByParameters";
import AsideSection from "./AsideSection";
import {
    bodyCare,
    faceCare,
    footCare,
    giftSets,
    hairCare,
    handsCare,
    shaving,
    tanning, typeOfCare
} from "../../store/models/IProduct";
import Divider from "../Divider";
import {useAppSelector} from "../../store/hooks/redux";

const CatalogAside: React.FC<CatalogAsideProps> = ({onFilterApply}) => {


    return (
        <div className={styles.aside}>
            <div className={styles.selection}>
                <SelectionByParameters onButtonClick={onFilterApply} />
            </div>
            <AsideSection title={typeOfCare.body} subTypeOfCareEnum={bodyCare}/>
            <Divider widthInPx={238} />
            <AsideSection title={typeOfCare.hands} subTypeOfCareEnum={handsCare}/>
            <Divider widthInPx={238} />
            <AsideSection title={typeOfCare.foot} subTypeOfCareEnum={footCare}/>
            <Divider widthInPx={238} />
            <AsideSection title={typeOfCare.face} subTypeOfCareEnum={faceCare}/>
            <Divider widthInPx={238} />
            <AsideSection title={typeOfCare.hair} subTypeOfCareEnum={hairCare}/>
            <Divider widthInPx={238} />
            <AsideSection title={typeOfCare.tanning} subTypeOfCareEnum={tanning}/>
            <Divider widthInPx={238} />
            <AsideSection title={typeOfCare.shaving} subTypeOfCareEnum={shaving}/>
            <Divider widthInPx={238} />
            <AsideSection title={typeOfCare.giftSets} subTypeOfCareEnum={giftSets}/>
        </div>
    )
}

interface CatalogAsideProps {
    onFilterApply: (minPrice: number, maxPrice: number) => void;
}

export default CatalogAside;