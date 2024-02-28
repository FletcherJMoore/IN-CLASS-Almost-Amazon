// for merged promises
import { getAuthorBooks, getSingleAuthor } from './authorData';
import { getSingleBook } from './bookData';

// TODO: Get data for viewBook
const getBookDetails = async (firebaseKey) => {
  const bookObject = await getSingleBook(firebaseKey);
  const authorObject = await getSingleAuthor(bookObject.author_id);
  return { ...bookObject, authorObject };
};

// const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
// getSingleBook(firebaseKey).then((bookObject) => {
// getSingleAuthor(bookObject.author_id)
//  .then((authorObject) => resolve({ ...bookObject, authorObject }));
// }).catch(reject);
// });

// Get data for viewAuthor
const getAuthorDetails = async (firebaseKey) => {
  const authorObject = await getSingleAuthor(firebaseKey);
  const authorBooks = await getAuthorBooks(firebaseKey);
  return { ...authorObject, books: authorBooks };
};

export {
  getBookDetails,
  getAuthorDetails,
};
