import { FETCH_AUTHORS, FETCH_AUTHORS_SUCCESS, FETCH_AUTHORS_ERROR, SET_ACTIVE_AUTHOR } from '../../actions/authors-actions/types';

export const initialState = {
  isPending: false,
  data: [],
  error: false,
  activeAuthor: null,
};

function authors(state = initialState, { type, data, id }) {
  switch (type) {
    case FETCH_AUTHORS:
      return {
        ...state,
        isPending: true
      };
    case FETCH_AUTHORS_SUCCESS:
      return {
        ...state,
        isPending: false,
        data
      };
    case FETCH_AUTHORS_ERROR:
      return {
        ...state,
        isPending: false,
        error: true
      };
    case SET_ACTIVE_AUTHOR:
      return {
        ...state,
        activeAuthor: state.data.find((author) => author.id === id)
      }
    default:
      return state;
  }
}

export default authors;
