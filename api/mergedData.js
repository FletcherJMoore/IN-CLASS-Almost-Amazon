// for merged promises
import { getAuthorBooks, getSingleAuthor } from './authorData';
import { getSingleBook } from './bookData';

// TODO: Get data for viewBook
const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(firebaseKey).then((bookObject) => {
    getSingleAuthor(bookObject.author_id)
      .then((authorObject) => resolve({ ...bookObject, authorObject }));
  }).catch(reject);
});

// Get data for viewAuthor
const getAuthorDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(firebaseKey).then((authorObject) => {
    getAuthorBooks(authorObject.firebaseKey)
      .then((booksObject) => resolve({ ...authorObject, booksObject }));
  }).catch(reject);
});

export {
  getBookDetails,
  getAuthorDetails,
};
