import catalogReducer, {addProductItem, addSelectedManufacturer, CatalogState} from '../store/reducers/CatalogSlice';
import {IProduct} from "../store/models/IProduct";
import {EBodyCare, ETypeOfCare} from "../store/enums/EProducts";

describe('catalogReducer', () => {
    let initialState: CatalogState;

    beforeEach(() => {
        initialState = {
            productItems: [],
            selectedManufacturers: [],
            currentTypeOfCare: '',
            currentSubtypeOfCare: '',
            isInitialization: true,
            isLoading: true,
            error: '',
        }
    })

    test('should return the initial state', () => {
        expect(catalogReducer(undefined, {type: undefined})).toEqual(initialState);
    })

    test('should add manufacturer', () => {

        expect(catalogReducer(initialState, addSelectedManufacturer('Nivea'))).toEqual({
            productItems: [],
            selectedManufacturers: ['Nivea'],
            currentTypeOfCare: '',
            currentSubtypeOfCare: '',
            isInitialization: true,
            isLoading: true,
            error: '',
        })
    })

    test('should add product', () => {
        const product: IProduct = {
            id: 1234567890,
            title: 'Заголовок',
            brand: 'Бренд',
            manufacturer: 'Производитель',
            barcode: '1234567890',
            price: 500,
            url: 'https://google.com/',
            typeOfSize: 'weight',
            size: '100',
            typeOfCare: [ETypeOfCare.body],
            subtypeOfCare: [EBodyCare.showerGels],
            description: 'Описание',
        }

        expect(catalogReducer(initialState, addProductItem(product))).toEqual({
            productItems: [{
                id: 1234567890,
                title: 'Заголовок',
                brand: 'Бренд',
                manufacturer: 'Производитель',
                barcode: '1234567890',
                price: 500,
                url: 'https://google.com/',
                typeOfSize: 'weight',
                size: '100',
                typeOfCare: [ETypeOfCare.body],
                subtypeOfCare: [EBodyCare.showerGels],
                description: 'Описание',
            }],
            selectedManufacturers: [],
            currentTypeOfCare: '',
            currentSubtypeOfCare: '',
            isInitialization: true,
            isLoading: true,
            error: '',
        })
    })
})