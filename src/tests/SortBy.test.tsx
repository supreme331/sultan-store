import {act, render, screen} from "@testing-library/react";
import SortBy from "../Components/Catalog/SortBy";
import {ESortByVariants} from "../store/enums/ECatalog";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

const mockedOnChangeSort = jest.fn();

describe('SortBy component', () => {
    test('', async () => {
        render(<SortBy sortBy={ESortByVariants.ascendingPrices} onChangeSort={mockedOnChangeSort}/>);

        const toggleListOpen = await screen.findByTestId('toggleListOpen');

        act(() => {
            userEvent.click(toggleListOpen);
        })

        expect(screen.getByRole('list')).toHaveClass('sortList');

        act(() => {
            userEvent.click(screen.getByTestId('descendingPrices'));
        })

        expect(mockedOnChangeSort).toHaveBeenCalledWith('По убыванию цены');
    })
})