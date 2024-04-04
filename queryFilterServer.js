const books = [

    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Novel', year: 1925 },
    
    { id: 2, title: '1984', author: 'George Orwell', genre: 'Dystopian', year: 1949 },
    
    { id: 3, title: 'The Da Vinci Code', author: 'Dan Brown', genre: 'Mystery', year: 1989 },
    
    ];
app.get('/books', (req, res) => {

    const { genre, year } = req.query;
    
    let filteredBooks = books;
    if (genre) {
        filteredBooks = filteredBooks.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
    }
    if (year) {
        filteredBooks = filteredBooks.filter(book => book.year.toString() === year.toString());
    }
    
    res.json(filteredBooks);
});
    
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});