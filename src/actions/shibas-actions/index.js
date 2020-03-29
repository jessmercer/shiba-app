import { FETCH_SHIBAS, FETCH_SHIBAS_SUCCESS, FETCH_SHIBAS_ERROR } from './types';

function fetchShibas() {
  return {
    type: FETCH_SHIBAS,
  };
}

function fetchShibasSuccess(data) {
  return {
    type: FETCH_SHIBAS_SUCCESS,
    data,
  };
}

function fetchShibasError() {
  return {
    type: FETCH_SHIBAS_ERROR,
  };
}

export const requestShibasApi = 'http://shibe.online/api/shibes?count=';

export function requestShibas(numberOfShibas) {
  return (dispatch) => {
    dispatch(fetchShibas())
    return fetch(requestShibasApi + numberOfShibas)
      .then(response => response.json()).then(
        (data) => dispatch(fetchShibasSuccess(data)),
        () => dispatch(fetchShibasError()),
      )
  };
}
