// import './sass/main.scss';
// import { refs } from './js/refs'

import cardImgTpl from './templapes/cardImgTpl.hbs';
import PixApiService from './js/apiService';

const refs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const pixApiService = new PixApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(evt) {
  evt.preventDefault();

  if (evt.currentTarget.elements.query.value.trim() === '') {
    return;
  }

  pixApiService.query = evt.currentTarget.elements.query.value.trim();
  pixApiService.resetPage();
  pixApiService.fetchArticles().then(appendCardMarkup);
}

function onLoadMore() {
  pixApiService.fetchArticles().then(appendCardMarkup);
}

function appendCardMarkup(hits) {
  refs.gallery.insertAdjacentHTML('beforeend', cardImgTpl(hits));
}
