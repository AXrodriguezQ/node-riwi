const Book = require("../models/booksModel")

const booksController = {}

booksController.getBooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json(error)
    }
}

booksController.getBook = async (req, res) => {
    try {
        const book = await Book.findOne({referencia: req.params.ref})
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json(error)
    }
}

booksController.createBook = async (req, res) => {
         const bookData = req.body
         console.log(bookData)
    try {
        const newBook = new Book(bookData)
        const book = await newBook.save()
        res.status(201).json(book)
    } catch (error) {
        res.status(500).json(error)
    }
}

booksController.updateBook = async (req, res) => {
    try {
        const book = await Book.findOneAndUpdate({id: req.params.id}, req.body, {new: true})
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json(error)
    }
}

booksController.deleteBook = async (req, res) => {
    try {
        const book = await Book.findOneAndDelete({referencia: req.params.ref})
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = booksController