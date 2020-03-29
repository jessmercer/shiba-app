import { FETCH_SHIBAS, FETCH_SHIBAS_SUCCESS, FETCH_SHIBAS_ERROR } from '../../actions/shibas-actions/types';

export const initialState = {
  isPending: false,
  data: [],
  error: false,
};

function shibas(state = initialState, { type, data }) {
  switch (type) {
    case FETCH_SHIBAS:
      return {
        ...state,
        isPending: true
      };
    case FETCH_SHIBAS_SUCCESS:
      return {
        ...state,
        isPending: false,
        data
      };
    case FETCH_SHIBAS_ERROR:
      return {
        ...state,
        isPending: false,
        error: true
      };
    default:
      return state;
  }
}

export default shibas;
