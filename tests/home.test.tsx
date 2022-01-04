// it should test the home page
import Home from '@/pages/index';
import { render, screen } from '@testing-library/react'
describe('it loads successfully', () => {
    it('loads properly', () => {
        render(<Home />)
        expect(screen.getByText('Welcome to UI Template app')).toBeInTheDocument()
    })
});