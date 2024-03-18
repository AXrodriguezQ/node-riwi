const { Router } = require('express')
const { getBooks, getBook, createBook, updateBook, deleteBook } = require('../controllers/books.controllers')

const router = Router()

router.get('/api/books', getBooks)

router.get('/api/books/:ref', getBook)

router.post('/api/books/', createBook)

router.put('/api/books/:ref', updateBook)

router.delete('/api/books/:ref', deleteBook)

module.exports = router