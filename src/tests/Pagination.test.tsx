import Pagination from "../Components/Pagination";
import {act, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import {MemoryRouter, Route, Routes} from "react-router";
import userEvent from "@testing-library/user-event";

jest.spyOn(window, 'scrollTo');

describe('Pagination component', () => {

    test('should render component', () => {
        render(
            <MemoryRouter initialEntries={['/catalog/1']}>
                <Pagination totalCount={50} perPage={15}/>
            </MemoryRouter>
        );

        expect(screen.getByTestId('pagination')).toBeInTheDocument();
    })

    test('should change page', async () => {

        const component = render(
            <MemoryRouter initialEntries={['/catalog/1']}>
                <Routes>
                    <Route path='/catalog/:currentPage' element={<Pagination totalCount={50} perPage={15}/>}/>
                </Routes>
            </MemoryRouter>
        );

        const nextBtn = component.getByTestId('nextBtn');
        const prevBtn = component.getByTestId('prevBtn');

        act(() => {
            userEvent.click(nextBtn);
        })

        expect(await component.findByTestId('currentPage')).toHaveTextContent('2');

        act(() => {
            userEvent.click(prevBtn);
        })

        expect(await component.findByTestId('currentPage')).toHaveTextContent('1');
    })
})