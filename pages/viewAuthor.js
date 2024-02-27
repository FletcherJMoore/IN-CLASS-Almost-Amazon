import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  console.warn(obj);
  clearDom();

  const domString = `
  <div class="view-authors"></div>
  <div class="text-white ms-5 details">
     <h5>${obj.authorObject.first_name} ${obj.authorObject.last_name} ${obj.authorObject.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
     Author Email: <a href="mailto:${obj.authorObject.email}">${obj.authorObject.email}</a>
     </div>
       <div class="mt-5">
         <i id="edit-book-btn--${obj.authorObject.firebaseKey}" class="btn btn-info"><span class="fas fa-edit"></span></i>
         <i id="delete-book--${obj.authorObject.firebaseKey}" class="btn btn-danger"><span class="fas fa-trash-alt"></span></i>
       </div>`;

  // Adding books.js div to allow the book cards to appear on author delails
  // let booksDomstring = '';
  // obj.booksArray.forEach((item) => {
  // booksDomstring = `
  //   <div class="card">
  // <div class="card-body" style="height: 180px;">
  //    <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
  // <hr>
  // <i class="btn btn-success" id="view-book-btn--${item.firebaseKey}"><span class="fas fa-eye"></span></i>
  // <i id="edit-book-btn--${item.firebaseKey}" class="btn btn-info"><span class="fas fa-edit"></span></i>
  // <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger"><span class="fas fa-trash-alt"></span></i>
  //  </div>
  // </div>`;
  //  });

  renderToDOM('#view', domString);
};
export default viewAuthor;
