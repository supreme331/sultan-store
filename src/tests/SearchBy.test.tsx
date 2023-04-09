import {act, render, screen} from "@testing-library/react";
import SearchBy from "../Components/Catalog/CatalogAside/SearchBy";
import * as reduxHooks from "react-redux";
import {getSelectedManufacturers} from "../store/reducers/selectors/getSelectedManufacturers";
import {getProductItems} from "../store/reducers/selectors/getProductItems";
import {initialProducts} from "../store/initialProducts";
import {MemoryRouter} from "react-router";
import {EBodyCare, EFaceCare, EFootCare, EHandsCare, ETypeOfCare} from "../store/enums/EProducts";
import userEvent from "@testing-library/user-event";
import * as actions from '../store/reducers/CatalogSlice';

jest.mock('react-redux');

const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector');
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mockedAddSelectedManufacturer = jest.spyOn(actions, 'addSelectedManufacturer');

describe('SearchBy', () => {

    test('should render component', async () => {

        mockedUseSelector.mockImplementation(selector => {
            if (selector === getSelectedManufacturers) {
                return [];
            }
            if (selector === getProductItems) {
                return initialProducts;
            }
        });

        mockedDispatch.mockReturnValue(jest.fn());

        render(
            <MemoryRouter>
                <SearchBy title='Производитель' filteringParameter='manufacturer'/>
            </MemoryRouter>
        )
        expect(mockedUseSelector).toHaveBeenCalledTimes(2);
        const filteringItems = await screen.findAllByTestId('filteringItem');
        expect(filteringItems.length).toBeGreaterThan(0);
    })

    test('should select parameter', async () => {

        mockedUseSelector.mockImplementation(selector => {
            if (selector === getSelectedManufacturers) {
                return [];
            }
            if (selector === getProductItems) {
                return [
                    {
                        id: 4670008496752,
                        url: 'https://basket-03.wb.ru/vol366/part36623/36623682/images/big/1.jpg',
                        title: 'Крем для рук Love Forever с маслом малины и овсяным молочком',
                        description: 'Крем для рук легкой тающей текстуры с натуральными компонентами для моментального увлажнения кожи на всех уровнях. Масло малиновых косточек, богатое витаминами, оказывает мощный антиоксидантный эффект, способствует выработке коллагена и предотвращает преждевременное старение кожи. Овсяное молочко нежно обволакивает кожу рук, смягчая и успокаивая ее. Обволакивающая текстура легко впитывается, восстанавливая сухую кожу рук и оставляя длительное ощущение комфорта.Крем мгновенно устраняет шелушения, чувство стянутости и делает кожу рук невероятно нежной. Приятный аромат малинового десерта повысит настроение и зарядит энергией на весь день. Способ применения: Нанесите крем на очищенную сухую кожу рук массирующими движениями до полного впитывания, уделяя особое внимание ногтям и кутикуле.',
                        barcode: '4670008496752',
                        brand: 'ARAVIA Professional',
                        manufacturer: 'ООО "Лаборатория эксперт"',
                        price: 574,
                        typeOfSize: 'volume',
                        size: '100',
                        typeOfCare: [ETypeOfCare.body],
                        subtypeOfCare: [EHandsCare.handCream, EHandsCare.handProtection],
                    }, {
                        id: 3337875696548,
                        url: 'https://basket-01.wb.ru/vol120/part12096/12096815/images/big/1.jpg',
                        title: 'Увлажняющий крем для тела и лица',
                        description: 'Липидовосстанавливающий питательный увлажняющий атопик крем для тела и лица Lipikar AP+M от La Roche-Posay (400 мл) с усовершенствованной формулой тройного действия предназначен для ежедневного ухода за сухой, очень сухой и склонной к атопии кожи взрослых, подростков (мальчиков и девочек), детей и новорожденных 0+. Моментально обеспечивает увлажнение, питание и успокаивает сухую кожу, способствуя уменьшению зуда и раздражения. Комплекс Aqua Posae Filiformis + Microresyl регулирует микробиом кожи и укрепляет ее защитные функции. Масло ши обеспечивает интенсивное восполнение липидов, способствуя уменьшению сухости и ощущения стянутости. Ниацинамид оказывает противовоспалительное действие и снижает интенсивность зуда. Термальная вода из французского источника La Roche-Posay смягчает и успокаивает кожу. Активная формула дермокосметики обеспечивает моментальный увлажняющий эффект, способствует восстановлению кожи, возвращает ей мягкость и красоту, заметно продлевая ремиссию при атопии. Восстанавливающий эмолент для лица и/или тела против атопического дерматита, экземы, зуда, покраснений и шелушения подходит для ежедневного применения на взрослой, детской и подростковой коже тела, рук и лица (наносить один раз в день на чистую кожу). В качестве дополнения для купания ребенка можно использовать другие средства гаммы Lipikar от La Roche-Posay (Франция): детский липидовосполняющий крем-гель Lipikar Syndet AP+ или липидовосполняющее смягчающее масло Lipikar AP+ Oil, локально - Lipikar стик AP+, который помогает успокоить атопичную кожу. Уходовая аптечная косметика Lipikar Baume AP+M не содержит отдушек и парабенов, легко наносится и быстро впитывается, не оставляя на коже ощущения липкости и дискомфорта. Подходит в качестве подарка для женщины и мужчины, ребенка, девушки или парня, жены, мамы и папы, бабушки или коллеги на день рождения, Новый год (НГ), 8 марта, 23 февраля. La Roche-Posay Lipikar AP+M - Ля Рош-Позе Липикар АП+М.',
                        barcode: '3337875696548',
                        brand: 'LIPIKAR AP+M',
                        manufacturer: 'La Roche-Posay',
                        price: 2130,
                        typeOfSize: 'volume',
                        size: '400',
                        typeOfCare: [ETypeOfCare.body, ETypeOfCare.hands, ETypeOfCare.foot, ETypeOfCare.face],
                        subtypeOfCare: [EBodyCare.creamsLotionsOils, EHandsCare.handCream, EFootCare.footCream, EFaceCare.faceCream],
                    }
                ];
            }
        });

        mockedDispatch.mockReturnValue(jest.fn());

        render(
            <MemoryRouter>
                <SearchBy title='Производитель' filteringParameter='manufacturer'/>
            </MemoryRouter>
        )

        await act(async () => {
            userEvent.click(await screen.findByTestId('La Roche-Posay'));
        })

        expect(mockedAddSelectedManufacturer).toHaveBeenCalledWith('La Roche-Posay');
    })
})