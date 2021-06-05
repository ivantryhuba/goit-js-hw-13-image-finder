// import './sass/main.scss';
// import { refs } from './js/refs'

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
        return
    }

    pixApiService.query = evt.currentTarget.elements.query.value.trim();
    pixApiService.fetchArticles();
}
function onLoadMore() {
  pixApiService.fetchArticles();
    };
