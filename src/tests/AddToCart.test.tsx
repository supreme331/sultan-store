import '@testing-library/jest-dom';
import {act, render, screen} from '@testing-library/react'
import AddToCart from "../Components/Cart/AddToCart";
import * as reduxHooks from 'react-redux';
import * as actions from '../store/reducers/CartSlice';
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router";

jest.mock('react-redux');

const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector');
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mockedAddToCart = jest.spyOn(actions, 'addToCart');

describe('AddToCart component', () => {

    test('toMatchSnapshot', () => {
        const component = render(<AddToCart price={213} id={4604014005427} isFull={true}/>);
        mockedUseSelector.mockReturnValue([]);
        mockedDispatch.mockReturnValue(jest.fn());
        expect(component).toMatchSnapshot();
    })

    test('should dispatch actions', () => {
        const dispatch = jest.fn();
        mockedDispatch.mockReturnValue(dispatch);

        render(
            <MemoryRouter>
                <AddToCart price={213} id={4604014005427} isFull={true}/>
            </MemoryRouter>
        );

        act(() => {
            userEvent.click(screen.getByTestId('increaseBtn'));
        })

        act(() => {
            userEvent.click(screen.getByTestId('addToCart'));
        })

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(mockedAddToCart).toHaveBeenCalledWith({price: 213, id: 4604014005427, amount: 2});
    })
})