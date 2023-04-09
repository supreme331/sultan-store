import {act, render, screen} from '@testing-library/react'
import Spoiler from "../Components/Spoiler";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'

describe('Spoiler component', () => {
    test('should render spoiler component', () => {
        render(<Spoiler title='Тестовый заголовок' children={<div data-testid='content'>Тестовый контент</div>}/>);

        const title = screen.getByTestId('title');

        expect(title).toHaveTextContent('Тестовый заголовок');
    })

    test('should show/hide spoiler content', () => {
        render(<Spoiler title='Тестовый заголовок' children={<div data-testid='content'>Тестовый контент</div>}/>);

        const title = screen.getByTestId('title');

        act(() => {
            userEvent.click(title)
        });

        const content = screen.getByTestId('content');
        expect(content).toBeInTheDocument();
        expect(content).toHaveTextContent('Тестовый контент');

        act(() => {
            userEvent.click(title)
        });

        expect(content).not.toBeInTheDocument();
    })
})