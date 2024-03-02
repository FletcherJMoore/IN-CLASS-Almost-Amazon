// for merged promises
import {
  getAuthorBooks, getSingleAuthor, deleteSingleAuthor
} from './authorData';
import { getSingleBook, deleteBook } from './bookData';

const deleteAuthorBooksRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getAuthorBooks(firebaseKey).then((authorBooksArray) => {
    const deleteBookPromises = authorBooksArray.map((book) => deleteBook(book.firebaseKey));

    Promise.all(deleteBookPromises).then(() => {
      deleteSingleAuthor(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

const deleteBooksAuthorRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getAuthorBooks(firebaseKey).then((authorBooksArray) => {
    const deleteAuthorPromises = authorBooksArray.map((author) => deleteSingleAuthor(author.firebaseKey));
    Promise.all(deleteAuthorPromises).then(() => {
      deleteSingleAuthor(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

// TODO: Get data for viewBook
const getBookDetails = async (firebaseKey) => {
  const bookObject = await getSingleBook(firebaseKey);
  const authorObject = await getSingleAuthor(bookObject.author_id);
  return { ...bookObject, authorObject };
};

// Get data for viewAuthor
const getAuthorDetails = async (firebaseKey) => {
  const authorObject = await getSingleAuthor(firebaseKey);
  const authorBooks = await getAuthorBooks(firebaseKey);
  return { ...authorObject, books: authorBooks };
};

export {
  getBookDetails,
  getAuthorDetails,
  deleteAuthorBooksRelationship,
  deleteBooksAuthorRelationship,
};
