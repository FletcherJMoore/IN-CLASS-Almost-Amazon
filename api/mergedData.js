// for merged promises
import { getAuthorBooks, getSingleAuthor } from './authorData';
import { getSingleBook } from './bookData';

// TODO: Get data for viewBook
const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE BOOK
  getSingleBook(firebaseKey).then((bookObject) => { // returns single book object
    getSingleAuthor(bookObject.author_id) // we nest this promise so that we can use the book object
      .then((authorObject) => resolve({ ...bookObject, authorObject }));
  }).catch(reject);
});
// Get data for viewAuthor
const getAuthorDetails = (firebaseKey) => new Promise((resolve, reject) => {
// GET AUTHOR
  getAuthorBooks(firebaseKey).then((authorObject) => {
    getSingleBook(authorObject.book_id)
      .then((bookObject) => resolve({ ...bookObject, authorObject }));
  }).catch(reject);
});

// Create an object that has book data and an object named authorObject

export default { getBookDetails, getAuthorDetails };
