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

// const searchStore = async (searchValue, uid) => {
//   const allBooks = await getBooks(uid);
//   const allAuthors = await getAuthors(uid);
//   const filteredBooks = await allBooks.filter((book) => (
//     book.title.toLowerCase().includes(searchValue)
//     || book.description.toLowerCase().includes(searchValue)
//     || book.price.includes(parseInt(searchValue, 10))
//   ));
//   const filteredAuthors = await allAuthors.filter((author) => (
//     author.first_name.toLowerCase().includes(searchValue)
//     || author.last_name.toLowerCase().includes(searchValue)
//     || author.email.toLowerCase().includes(searchValue)
//   ));
//   return { books: filteredBooks, authors: filteredAuthors };
// };

export {
  getBookDetails,
  getAuthorDetails,
  deleteAuthorBooksRelationship,
  deleteBooksAuthorRelationship,
};
