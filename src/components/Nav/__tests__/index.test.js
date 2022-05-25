import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../index';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('render', () => {
        render(<Nav />);
    });

    // snapshot test
    it('matches shanpshot', () => {
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    });
})
