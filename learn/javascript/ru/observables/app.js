const favoriteMovies = [
    {
        'title': 'A1',
        'year': 1986,
        'director': 'Director A',
        'cast': ['Actor A', 'Actor B', 'Actor C']
    },
    {
        'title': 'A2',
        'year': 1984,
        'director': 'Director B',
        'cast': ['Actor B', 'Actor D']
    },
    {
        'title': 'A3',
        'year': 1987,
        'director': 'Director A',
        'cast': ['Actor E', 'Actor F', 'Actor G']
    },
    {
        'title': 'A4',
        'year': 1983,
        'director': 'Director C',
        'cast': ['Actor E', 'Actor H']
    }
];

const filteredArr = favoriteMovies
    .filter(movie => movie.director === 'Director A')
    .map(movie => ({name: movie.name, year: movie.year}));
console.log(filteredArr);









