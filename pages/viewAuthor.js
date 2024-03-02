import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  console.warn(obj);
  clearDom();
  let domString = '';

  domString += `
  <div class="view-authors"></div>
  <div class="text-white ms-5 details">
     <h5>${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
     Author Email: <a href="mailto:${obj.email}">${obj.email}</a>
     </div>
       <div class="mt-5">
         <i id="update-author--${obj.firebaseKey}" class="btn btn-info"><span class="fas fa-edit"></span></i>
         <i id="delete-author-btn--${obj.firebaseKey}" class="btn btn-danger"><span class="fas fa-trash-alt"></span></i>
       </div>`;

  // Adding books.js to allow the book cards to appear on author delails

  obj.books.forEach((item) => {
    domString += `<div class="card" style="width: 300px;">
    <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px; width: 300px;">
    <div class="card-body" style="height: 180px; width: 300px;">
      <h5 class="card-title">${item.title}</h5>
        <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
        <hr>
        <i class="btn btn-success" id="view-book-btn--${item.firebaseKey}"><span class="fas fa-eye"></span></i>
        <i id="edit-book-btn--${item.firebaseKey}" class="btn btn-info"><span class="fas fa-edit"></span></i>
        <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger"><span class="fas fa-trash-alt"></span></i>
    </div>
  </div>`;
  });

  renderToDOM('#view', domString);
};
export default viewAuthor;
