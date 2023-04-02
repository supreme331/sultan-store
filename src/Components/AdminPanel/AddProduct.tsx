import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import styles from "../../styles/AdminPanel.module.scss";
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
} from "../../store/enums/EProducts";
import {useAppDispatch} from "../../store/hooks/redux";
import {IProduct} from "../../store/models/IProduct";
import {addProductItem, editProductItem} from "../../store/reducers/CatalogSlice";

const AddProduct: React.FC<AddProductProps> = ({editingProduct, finishEditing}) => {

    const isEditing = Boolean(editingProduct);
    const dispatch = useAppDispatch();
    const [typesOfCare, setTypesOfCare] = useState<Array<'' | ETypeOfCare>>([]);
    const [subtypesOfCare, setSubtypesOfCare] = useState<Array<''
        | EBodyCare
        | EHandsCare
        | EFootCare
        | EFaceCare
        | EHairCare
        | ETanning
        | EShaving
        | EGiftSets>>([]);
    const [title, setTitle] = useState<string>('');
    const [brand, setBrand] = useState<string>('');
    const [barcode, setBarcode] = useState<string>('');
    const [manufacturer, setManufacturer] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [url, setUrl] = useState<string>('');
    const [typeOfSize, setTypeOfSize] = useState<'volume' | 'weight'>('volume');
    const [size, setSize] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    // Странный момент, не происходит ререндер чекбоксов subtypesOfCare при снятии чекбокса,
    // пришлось использовать костыль с дополнительным пропсом, чтобы заставить их ререндериться
    const [changeProp, setChangeProp] = useState<boolean>(false)

    useEffect(() => {
        if (editingProduct) {
            setTitle(editingProduct.title);
            setBrand(editingProduct.brand);
            setBarcode(editingProduct.barcode);
            setManufacturer(editingProduct.manufacturer);
            setPrice(editingProduct.price);
            setUrl(editingProduct.url);
            setTypeOfSize(editingProduct.typeOfSize);
            setSize(editingProduct.size);
            setDescription(editingProduct.description);
            setTypesOfCare(editingProduct.typeOfCare);

            if (editingProduct.subtypeOfCare) {
                setSubtypesOfCare(editingProduct.subtypeOfCare);
            }
        }
    }, [])

    function addTypesAndSubtypesValues(typeValue: '' | ETypeOfCare,
                                       subtypeValue?: ""
                                           | EBodyCare
                                           | EHandsCare
                                           | EFootCare
                                           | EFaceCare
                                           | EHairCare
                                           | ETanning
                                           | EShaving
                                           | EGiftSets) {
        setTypesOfCare([...typesOfCare, typeValue]);

        if (subtypeValue) {
            setSubtypesOfCare([...subtypesOfCare, subtypeValue]);
        }
    }

    function removeTypesAndSubtypesValues(typeValue: '' | ETypeOfCare,
                                          subtypeValue?: ""
                                              | EBodyCare
                                              | EHandsCare
                                              | EFootCare
                                              | EFaceCare
                                              | EHairCare
                                              | ETanning
                                              | EShaving
                                              | EGiftSets) {
        const typeValueIndex = typesOfCare.findIndex(type => type === typeValue);
        const types = typesOfCare;

        if (typeValueIndex !== -1) {
            types.splice(typeValueIndex, 1)
        }

        setTypesOfCare(types);

        if (subtypeValue) {
            console.log(subtypeValue)
            const subtypeValueIndex = subtypesOfCare.findIndex(type => type === subtypeValue);
            const subtypes = subtypesOfCare;

            if (subtypeValueIndex !== -1) {
                subtypes.splice(subtypeValueIndex, 1)
            }

            setSubtypesOfCare(subtypes);
        }
        setChangeProp(!changeProp);
    }

    function onChangeTypeOfCare(e: ChangeEvent<HTMLInputElement>) {
        // @ts-ignore
        const typeValue: '' | ETypeOfCare = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            if (typeValue === 'Гигиеническая продукция') {
                addTypesAndSubtypesValues(ETypeOfCare.hygienic);
            }
            if (typeValue === 'Гигиена полости рта') {
                addTypesAndSubtypesValues(ETypeOfCare.oralHygiene);
            }
            if (typeValue === 'Бумажная продукция') {
                addTypesAndSubtypesValues(ETypeOfCare.paper);
            }
        }
        if (!isChecked) {
            if (typeValue === 'Гигиеническая продукция') {
                removeTypesAndSubtypesValues(ETypeOfCare.hygienic);
            }
            if (typeValue === 'Гигиена полости рта') {
                removeTypesAndSubtypesValues(ETypeOfCare.oralHygiene);
            }
            if (typeValue === 'Бумажная продукция') {
                removeTypesAndSubtypesValues(ETypeOfCare.paper);
            }
        }
    }

    function onChangeSubtypeOfCare(e: ChangeEvent<HTMLInputElement>) {
        // @ts-ignore
        const subtypeValue: EBodyCare
            | EHandsCare
            | EFootCare
            | EFaceCare
            | EHairCare
            | ETanning
            | EShaving
            | EGiftSets = e.target.value;
        const isChecked = e.target.checked;

        // Добавление типов и подтипов ухода при отметке чекбокса
        if (isChecked) {
            console.log('check')
            // @ts-ignore
            if (Object.values(EBodyCare).includes(subtypeValue)) {
                addTypesAndSubtypesValues(ETypeOfCare.body, subtypeValue);
            }
            // @ts-ignore
            if (Object.values(EHandsCare).includes(subtypeValue)) {
                addTypesAndSubtypesValues(ETypeOfCare.hands, subtypeValue);
            }
            // @ts-ignore
            if (Object.values(EFootCare).includes(subtypeValue)) {
                addTypesAndSubtypesValues(ETypeOfCare.foot, subtypeValue);
            }
            // @ts-ignore
            if (Object.values(EFaceCare).includes(subtypeValue)) {
                addTypesAndSubtypesValues(ETypeOfCare.face, subtypeValue);
            }
            // @ts-ignore
            if (Object.values(EHairCare).includes(subtypeValue)) {
                addTypesAndSubtypesValues(ETypeOfCare.hair, subtypeValue);
            }
            // @ts-ignore
            if (Object.values(ETanning).includes(subtypeValue)) {
                addTypesAndSubtypesValues(ETypeOfCare.tanning, subtypeValue);
            }
            // @ts-ignore
            if (Object.values(EShaving).includes(subtypeValue)) {
                addTypesAndSubtypesValues(ETypeOfCare.shaving, subtypeValue);
            }
            // @ts-ignore
            if (Object.values(EGiftSets).includes(subtypeValue)) {
                addTypesAndSubtypesValues(ETypeOfCare.giftSets, subtypeValue);
            }
        }

        // Удаление типов и подтипов ухода при снятии отметки чекбокса
        if (!isChecked) {
            console.log('uncheck')
            // @ts-ignore
            if (Object.values(EBodyCare).includes(subtypeValue)) {
                removeTypesAndSubtypesValues(ETypeOfCare.body, subtypeValue);
            }
            // @ts-ignore
            if (Object.values(EHandsCare).includes(subtypeValue)) {
                removeTypesAndSubtypesValues(ETypeOfCare.hands, subtypeValue);
            }
            // @ts-ignore
            if (Object.values(EFootCare).includes(subtypeValue)) {
                removeTypesAndSubtypesValues(ETypeOfCare.foot, subtypeValue);
            }
            // @ts-ignore
            if (Object.values(EFaceCare).includes(subtypeValue)) {
                removeTypesAndSubtypesValues(ETypeOfCare.face, subtypeValue);
            }
            // @ts-ignore
            if (Object.values(EHairCare).includes(subtypeValue)) {
                removeTypesAndSubtypesValues(ETypeOfCare.hair, subtypeValue);
            }
            // @ts-ignore
            if (Object.values(ETanning).includes(subtypeValue)) {
                removeTypesAndSubtypesValues(ETypeOfCare.tanning, subtypeValue);
            }
            // @ts-ignore
            if (Object.values(EShaving).includes(subtypeValue)) {
                removeTypesAndSubtypesValues(ETypeOfCare.shaving, subtypeValue);
            }
            // @ts-ignore
            if (Object.values(EGiftSets).includes(subtypeValue)) {
                removeTypesAndSubtypesValues(ETypeOfCare.giftSets, subtypeValue);
            }
        }
    }

    function onHandleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const product: IProduct = {
            id: +barcode,
            title: title,
            brand: brand,
            manufacturer: manufacturer,
            barcode: barcode,
            price: price,
            url: url,
            typeOfSize: typeOfSize,
            size: size,
            typeOfCare: Array.from(new Set(typesOfCare)),
            subtypeOfCare: subtypesOfCare,
            description: description,
        };

        if (isEditing) {
            dispatch(editProductItem(product));
        }
        if (!isEditing) {
            dispatch(addProductItem(product));
        }

        finishEditing();
    }

    return (
        <div className={styles.addProduct}>
            <form action="#"
                  onSubmit={(e) => onHandleSubmit(e)}
                  className={styles.addProductForm}>
                <div className={styles.inputItem}>
                    <label className={styles.inputLabel}>
                        <span className={styles.inputTitle}>Заголовок:</span>
                        <input onChange={(e) => setTitle(e.target.value)}
                               className={styles.textInput}
                               name="title"
                               type="text"
                               value={title}/>
                    </label>
                </div>
                <div className={styles.inputItem}>
                    <label className={styles.inputLabel}>
                        <span className={styles.inputTitle}>Бренд:</span>
                        <input onChange={(e) => setBrand(e.target.value)}
                               className={styles.textInput}
                               name="brand"
                               type="text"
                               value={brand}/>
                    </label>
                </div>
                <div className={styles.inputItem}>
                    <label className={styles.inputLabel}>
                        <span className={styles.inputTitle}>Производитель:</span>
                        <input onChange={(e) => setManufacturer(e.target.value)}
                               className={styles.textInput}
                               name="manufacturer"
                               type="text"
                               value={manufacturer}/>
                    </label>
                </div>
                <div className={styles.inputItem}>
                    <label className={styles.inputLabel}>
                        <span className={styles.inputTitle}>Штрихкод:</span>
                        <input onChange={(e) => setBarcode(e.target.value)}
                               className={styles.textInput}
                               name="barcode"
                               type="text"
                               value={barcode}/>
                    </label>
                </div>
                <div className={styles.inputItem}>
                    <label className={styles.inputLabel}>
                        <span className={styles.inputTitle}>Цена:</span>
                        <input onChange={(e) => setPrice(+e.target.value)}
                               className={styles.textInput}
                               name="price"
                               type="text"
                               value={price}/>
                    </label>
                </div>
                <div className={styles.inputItem}>
                    <label className={styles.inputLabel}>
                        <span className={styles.inputTitle}>Ссылка на изображение:</span>
                        <input onChange={(e) => setUrl(e.target.value)}
                               className={styles.textInput}
                               name="url"
                               type="text"
                               value={url}/>
                    </label>
                </div>
                <div className={styles.inputItem}>
                    <div className={styles.typeOfSizeInput}>
                        <div className={styles.inputTitle}>Тип размера:</div>
                        <label>
                            <div className={styles.radioElem}>
                                <input onChange={() => setTypeOfSize("volume")}
                                       name="typeOfSize"
                                       type="radio"
                                       value="volume"
                                       checked={typeOfSize === "volume"}/>
                                <span>Объем</span>
                            </div>
                        </label>
                        <label>
                            <div className={styles.radioElem}>
                                <input onChange={() => setTypeOfSize("weight")}
                                       name="typeOfSize"
                                       type="radio"
                                       value="weight"
                                       checked={typeOfSize === "weight"}/>
                                <span>Вес</span>
                            </div>
                        </label>
                    </div>
                </div>
                <div className={styles.inputItem}>
                    <label className={styles.inputLabel}>
                        <span className={styles.inputTitle}>Размер:</span>
                        <input onChange={(e) => setSize(e.target.value)}
                               className={styles.textInput}
                               name="size"
                               type="text"
                               value={size}/>
                    </label>
                </div>
                <div className={styles.inputItem}>
                    <div className={styles.inputTitle}>Тип ухода:</div>
                    <div className={styles.typesOfCare}>
                        {
                            Object.values(ETypeOfCare).map(type =>
                                <TypeOfCareInputBlock
                                    key={type}
                                    title={type}
                                    typesOfCare={typesOfCare}
                                    subtypesOfCare={subtypesOfCare}
                                    onChangeSubtype={onChangeSubtypeOfCare}
                                    onChangeType={onChangeTypeOfCare}
                                    changeProp={changeProp}/>)
                        }
                    </div>
                </div>
                <div className={styles.inputItem}>
                    <div className={styles.inputTitle}>Описание:</div>
                    <label>
                        <textarea className={styles.descriptionInput}
                                  onChange={(e) => setDescription(e.target.value)}
                                  name="description"
                                  value={description}></textarea>
                    </label>
                </div>
                <button type='submit' className={styles.submitBtn}>
                    {isEditing ? 'Сохранить изменения' : 'Добавить товар'}
                </button>
            </form>
        </div>
    );
};

const TypeOfCareInputBlock: React.FC<TypeOfCareInputBlockProps> = ({
                                                                       title,
                                                                       typesOfCare,
                                                                       subtypesOfCare,
                                                                       onChangeSubtype,
                                                                       onChangeType,
                                                                       changeProp,
                                                                   }) => {
    let subtypeValues: Array<''
        | EBodyCare
        | EHandsCare
        | EFootCare
        | EFaceCare
        | EHairCare
        | ETanning
        | EShaving
        | EGiftSets> = [];

    if (title === ETypeOfCare.body) subtypeValues = Object.values(EBodyCare);
    if (title === ETypeOfCare.hands) subtypeValues = Object.values(EHandsCare);
    if (title === ETypeOfCare.foot) subtypeValues = Object.values(EFootCare);
    if (title === ETypeOfCare.face) subtypeValues = Object.values(EFaceCare);
    if (title === ETypeOfCare.hair) subtypeValues = Object.values(EHairCare);
    if (title === ETypeOfCare.tanning) subtypeValues = Object.values(ETanning);
    if (title === ETypeOfCare.shaving) subtypeValues = Object.values(EShaving);
    if (title === ETypeOfCare.giftSets) subtypeValues = Object.values(EGiftSets);

    return (<>
            {
                subtypeValues.length ?
                    <div className={styles.typeOfCareInput}>
                        <div className={styles.careTypeTitle}>{title}</div>
                        {
                            subtypeValues.map((careType) => <label key={careType}
                                                                   className={styles.typeOfCareLabel}>
                                <div className={styles.checkBoxElem}>
                                    <input onChange={(e) => onChangeSubtype(e)}
                                           name="subtypeOfCare"
                                           type="checkbox"
                                           value={careType}
                                           checked={subtypesOfCare.includes(careType)}/>
                                    <span>{careType}</span>
                                </div>
                            </label>)
                        }</div>
                    : title === ETypeOfCare.hygienic ? <div className={styles.typeOfCareInput}>
                            <div className={styles.careTypeTitle}>{title}</div>
                            <label>
                                <div className={styles.checkBoxElem}>
                                    <input onChange={(e) => onChangeType(e)}
                                           name="typeOfCare"
                                           type="checkbox"
                                           value={ETypeOfCare.hygienic}
                                           checked={typesOfCare.includes(ETypeOfCare.hygienic)}/>
                                    <span>{ETypeOfCare.hygienic}</span>
                                </div>
                            </label>
                        </div>
                        : title === ETypeOfCare.oralHygiene ? <div className={styles.typeOfCareInput}>
                                <div className={styles.careTypeTitle}>{title}</div>
                                <label>
                                    <div className={styles.checkBoxElem}>
                                        <input onChange={(e) => onChangeType(e)}
                                               name="typeOfCare"
                                               type="checkbox"
                                               value={ETypeOfCare.oralHygiene}
                                               checked={typesOfCare.includes(ETypeOfCare.oralHygiene)}/>
                                        <span>{ETypeOfCare.oralHygiene}</span>
                                    </div>
                                </label>
                            </div>
                            : title === ETypeOfCare.paper ? <div className={styles.typeOfCareInput}>
                                <div className={styles.careTypeTitle}>{title}</div>
                                <label>
                                    <div className={styles.checkBoxElem}>
                                        <input onChange={(e) => onChangeType(e)}
                                               name="typeOfCare"
                                               type="checkbox"
                                               value={ETypeOfCare.paper}
                                               checked={typesOfCare.includes(ETypeOfCare.paper)}/>
                                        <span>{ETypeOfCare.paper}</span>
                                    </div>
                                </label>
                            </div> : null
            }
        </>
    )
}

interface TypeOfCareInputBlockProps {
    title: '' | ETypeOfCare;
    typesOfCare: Array<'' | ETypeOfCare>;
    subtypesOfCare: Array<''
        | EBodyCare
        | EHandsCare
        | EFootCare
        | EFaceCare
        | EHairCare
        | ETanning
        | EShaving
        | EGiftSets>;
    onChangeSubtype: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangeType: (e: ChangeEvent<HTMLInputElement>) => void;
    changeProp: boolean;
}

interface AddProductProps {
    editingProduct?: IProduct;
    finishEditing: () => void;
}

export default AddProduct;
