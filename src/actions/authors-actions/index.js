import { FETCH_AUTHORS, FETCH_AUTHORS_SUCCESS, FETCH_AUTHORS_ERROR, SET_ACTIVE_AUTHOR } from './types';

function fetchAuthors() {
  return {
    type: FETCH_AUTHORS,
  };
}

function fetchAuthorsSuccess(data) {
  return {
    type: FETCH_AUTHORS_SUCCESS,
    data,
  };
}

function fetchAuthorsError() {
  return {
      type: FETCH_AUTHORS_ERROR,
  };
}

export const requestAuthorsApi = 'https://picsum.photos/v2/list';

export function requestAuthors() {
  return (dispatch) => {
    dispatch(fetchAuthors())
    return fetch(requestAuthorsApi)
      .then(response => response.json()).then(
        (data) => dispatch(fetchAuthorsSuccess(data)),
        () => dispatch(fetchAuthorsError()),
      )
  };
}

export function setActiveAuthor(id) {
  return {
    type: SET_ACTIVE_AUTHOR,
    id,
  };
}
