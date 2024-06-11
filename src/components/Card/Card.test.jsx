import { render, screen } from '@testing-library/react'
import Card from './Card';

const mockData = [
    {
        "adult": false,
        "backdrop_path": "/z121dSTR7PY9KxKuvwiIFSYW8cf.jpg",
        "genre_ids": [
            10752,
            28,
            18
        ],
        "id": 929590,
        "original_language": "en",
        "original_title": "Civil War",
        "overview": "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.",
        "popularity": 2241.454,
        "poster_path": "/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
        "release_date": "2024-04-10",
        "title": "Civil War",
        "video": false,
        "vote_average": 7.029,
        "vote_count": 1436
    },
]

test("Movie title renders successfully", () => {
    render(<Card data={mockData[0]}/>);
    const title = screen.getByText(/Civil War/i);
    expect(title).toBeInTheDocument();
})

test("Movie release date renders successfully", () => {
    render(<Card data={mockData[0]}/>);
    const dateString = new Date(mockData[0].release_date).toDateString()
    const releaseDate = screen.getByText(dateString);
    expect(releaseDate).toBeInTheDocument();
})