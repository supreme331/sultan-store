import SpecificationProperty from "../Components/SpecificationProperty";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'

describe('SpecificationProperty component', () => {
    test('should render component', () => {
        render(<SpecificationProperty label='Бренд:' text='R.O.C.S.'/>);

        expect(screen.getByTestId('property')).toBeInTheDocument();
    })

    test('should render component with correct props', () => {
        const component = render(<SpecificationProperty label='Бренд:' text='R.O.C.S.'/>);

        expect(component.getByTestId('label')).toHaveTextContent('Бренд:');
        expect(component.getByTestId('text')).toHaveTextContent('R.O.C.S.');
    })
})