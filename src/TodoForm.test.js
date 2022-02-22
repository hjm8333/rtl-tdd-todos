import React from 'react';
import { render, fireEvent } from '@testing-library/react'; // react-testing-library;
import TodoForm from './TodoForm';

describe('<TodoForm />', () => {
    it('has input and a button', () => {
        const { getByText, getByPlaceholderText } = render(<TodoForm />);
        getByPlaceholderText('할 일을 입력하십쇼'); // input 있는지 없는지
        getByText('등록'); // button이 있는지 없는지
    });
    it('change input', () => {
        const { getByPlaceholderText } = render(<TodoForm />);
        const input = getByPlaceholderText('할 일을 입력하십쇼');
        fireEvent.change(input, { target: { value: 'TDD 배우기' } });
        expect(input).toHaveAttribute('value', 'TDD 배우기');
    });
});
