import { render, screen } from '@testing-library/react'
import * as services from '../../api/api';
import Homepage from './Homepage';
import userEvent from '@testing-library/user-event';

const mockFetchData = jest.spyOn(services, 'getMovieList')
        .mockImplementation(async () => {
            return [{
                "adult": false,
                "backdrop_path": "/ga4OLm4qLxPqKLMzjJlqHxVjst3.jpg",
                "genre_ids": [
                    28,
                    80,
                    53
                ],
                "id": 573435,
                "original_language": "en",
                "original_title": "Bad Boys: Ride or Die",
                "overview": "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
                "popularity": 2862.77,
                "poster_path": "/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg",
                "release_date": "2024-06-05",
                "title": "Bad Boys: Ride or Die",
                "video": false,
                "vote_average": 7.491,
                "vote_count": 116
            }];
        })

test("Homepage renders successflly", () => {
    render(<Homepage />)
    const searchBox = screen.getByRole("textbox");
    expect(searchBox).toBeInTheDocument();
})

test("Home page contains Next and Previous button for pagination", () => {
    render(<Homepage />)
    const nextButton = screen.getByRole('button', { name: /Next/i });
    const previousButton = screen.getByRole('button', { name: /Previous/i });
    expect(nextButton).toBeInTheDocument();
    expect(previousButton).toBeInTheDocument();
})

test("On click of next button page num view is increased by 1", async () => {
    render(<Homepage />);
    await userEvent.click(screen.getByText(/Next/i));
    expect(screen.getByText(/2/i)).toBeInTheDocument();
})

test("On click of previous button page num view is decreased by 1", async () => {
    render(<Homepage />);
    await userEvent.click(screen.getByText(/Next/i));
    await userEvent.click(screen.getByText(/Next/i));
    await userEvent.click(screen.getByText(/Previous/i));
    expect(screen.getByText(/2/i)).toBeInTheDocument();
})

test("Get movie list api gets called when Homepage renders", () => {
    render(<Homepage />)
    expect(mockFetchData).toHaveBeenCalled();
})