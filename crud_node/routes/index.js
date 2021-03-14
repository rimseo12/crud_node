module.exports = function(app, Book) {
//GET ALL BOOKS
app.get('/books', function(req, res) {
    Book.find(function(err, books){
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(books.name);
        res.end();
    })
});

}
