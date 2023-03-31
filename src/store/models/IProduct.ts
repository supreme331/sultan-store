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
} from "../enums/EProducts";

export interface IProduct {
    id: number;
    title: string;
    url: string;
    typeOfSize: 'weight' | 'volume';
    size: string;
    barcode: string;
    manufacturer: string;
    brand: string;
    description: string;
    price: number;
    typeOfCare: Array<'' | ETypeOfCare>;
    subtypeOfCare?: Array<''
        | EBodyCare
        | EHandsCare
        | EFootCare
        | EFaceCare
        | EHairCare
        | ETanning
        | EShaving
        | EGiftSets>;
}


















