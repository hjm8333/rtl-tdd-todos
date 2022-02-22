import React from 'react';
import { render } from '@testing-library/react';
import TodoItem from './Todoitem';

describe('<TodoItem />', () => {
    const sampleTodo = {
        id: 1,
        text: 'TDD 배우기',
        done: false,
    };
    const setup = (props = {}) => {
        const initailProps = { todo: sampleTodo };
        const utils = render(<TodoItem {...initailProps} {...props} />);
        const { getByText } = utils;
        const todo = props.todo || initailProps.todo;
        const button = getByText('삭제');
        const span = getByText(todo.text);
        return { ...utils, span, button };
    };
    it('has span and button', () => {
        const { span, button } = setup();
        expect(span).toBeTruthy();
        expect(button).toBeTruthy();
    });
});
