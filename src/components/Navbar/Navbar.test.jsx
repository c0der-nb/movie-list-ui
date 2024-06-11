import { render, screen } from '@testing-library/react'
import Navbar from './Navbar';

test("Input box renders successfully", () => {
    render(<Navbar />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
})

test("Input text box has placeholder", () => {
    render(<Navbar />);
    const searchInput = screen.getByPlaceholderText(/Search for your favourite movies/i);
    expect(searchInput).toBeInTheDocument();
})