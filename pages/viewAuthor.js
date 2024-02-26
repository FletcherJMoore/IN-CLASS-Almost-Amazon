import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();

  const authorDomString = `
  <div class="mt-5 d-flex flex-wrap> 
   <div class="d-flex flex-column">
    <div class="mt-5"> 
      <i id="edit-author-btn--${obj.firebaseKey}" class="btn btn-info"><span class="fas fa-edit"></span></i>
      <i id="delete-author--${obj.firebaseKey}" class="btn btn-danger"><span class="fas fa-trash-alt"></span></i>
    </div>
    <div class="text-white ms-5 details">
     <h5>${obj.title} by ${obj.authorObject.first_name} ${obj.authorObject.last_name} ${obj.authorObject.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
     Author Email: <a href="mailto:${obj.authorObject.email}">${obj.authorObject.email}</a>
     </div>
    </div>
  </div>`;

  renderToDOM('#view', authorDomString);
};

export default viewAuthor;
