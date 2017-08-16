import axios from 'axios';

const ROOT_URL = 'http://michaelsmith.x10host.com/wp'; // Wordpress installation url
const PAGES_END_POINT = `${ROOT_URL}/wp-json/wp/v2/pages`; // Endpoint for getting Wordpress Pages
const POSTS_END_POINT = `${ROOT_URL}/wp-json/wp/v2/posts`; // Endpoint for getting Wordpress Posts
const HEADER_OPTIONS_END_POINT = `${ROOT_URL}/wp-json/acf/v3/options/acf-options-header`;

export function fetchPages() {
  const request = axios.get(PAGES_END_POINT);
  //redux-promise will resolve the promise from the request -- added redux-promise as a middleware in the store configureStore()
  return {
    type: 'FETCH_PAGES',
    payload: request
  };
}
export function fetchPosts() {
  const request = axios.get(POSTS_END_POINT);
  return {
    type: 'FETCH_POSTS',
    payload: request
  };
}
export function fetchHeaderOptions() {
  const request = axios.get(HEADER_OPTIONS_END_POINT);
  return {
    type: 'FETCH_HEADER_OPTIONS',
    payload: request
  };
}
