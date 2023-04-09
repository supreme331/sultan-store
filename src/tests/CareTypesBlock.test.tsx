import {act, render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import CareTypesBlock from "../Components/Catalog/CareTypesBlock";
import {MemoryRouter} from "react-router";
import * as reduxHooks from "react-redux";
import * as actions from "../store/reducers/CatalogSlice";

jest.mock('react-redux');

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mockedShowAllProductsOfType = jest.spyOn(actions, 'showAllProductsOfType');

describe('CareTypesBlock component', () => {
    test('toMatchSnapshot', () => {
        const component = render(
            <MemoryRouter>
                <CareTypesBlock />
            </MemoryRouter>
        );
        expect(component).toMatchSnapshot();
    })

    test('should dispatch actions', () => {
        const dispatch = jest.fn();
        mockedDispatch.mockReturnValue(dispatch);

        render(
            <MemoryRouter>
                <CareTypesBlock />
            </MemoryRouter>
        );

        act(() => {
            userEvent.click(screen.getByTestId('Уход за телом'));
        })

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(mockedShowAllProductsOfType).toHaveBeenCalledWith('Уход за телом');
    })
})