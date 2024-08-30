import {render, screen} from '@testing-library/react'
import Persons from './Persons';

describe('Persons', () => {
    it('should render', async () => {
        render(<Persons />)
    });
});