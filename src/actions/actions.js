import axios from 'axios';

const ROOT_URL = 'http://michaelsmith.x10host.com/wp/wp-json'; // Wordpress installation url
const PAGES = `${ROOT_URL}/wp/v2/pages`; // Endpoint for getting Wordpress Pages
const POSTS = `${ROOT_URL}/wp/v2/posts`; // Endpoint for getting Wordpress Posts
const HEADER_OPTIONS = `${ROOT_URL}/acf/v3/options/acf-options-header`;
const MENUS = `${ROOT_URL}/wp-api-menus/v2/menus/`;

export function fetchPages() {
  const request = axios.get(PAGES);
  //redux-promise will resolve the promise from the request -- added redux-promise as a middleware in the store configureStore()
  return {
    type: 'FETCH_PAGES',
    payload: request
  };
}
export function fetchPosts() {
  const request = axios.get(POSTS);
  return {
    type: 'FETCH_POSTS',
    payload: request
  };
}
export function fetchHeaderOptions() {
  const request = axios.get(HEADER_OPTIONS);
  return {
    type: 'FETCH_HEADER_OPTIONS',
    payload: request
  };
}
export function fetchMenus(location) {
  const request = axios.get(`${MENUS}${location}`);
  // console.log('request in fetchMenus:',request);
  return {
    type: 'FETCH_MENUS',
    payload: request
  }
}
