import authorReducer, { initialState } from '.';
import { FETCH_AUTHORS, FETCH_AUTHORS_SUCCESS, FETCH_AUTHORS_ERROR } from '../../actions/authors-actions/types';

describe('Reducers: Authors', () => {
  it('should return the initial state', () => {
    expect(authorReducer(undefined, {})).toEqual((initialState))
  })

  it('should handle FETCH_AUTHORS', () => {
    expect(
      authorReducer(undefined, {
        type: FETCH_AUTHORS,
      })
    ).toEqual((
      {
        ...initialState,
        isPending: true
      }
    ));
  })

  it('should handle FETCH_AUTHORS_SUCCESS', () => {
    expect(
      authorReducer(undefined, {
        type: FETCH_AUTHORS_SUCCESS,
        data: 'test'
      })
    ).toEqual((
      {
        ...initialState,
        isPending: false,
        data: 'test'
      }
    ));
  })

  it('should handle FETCH_AUTHORS_ERROR', () => {
    expect(
      authorReducer(undefined, {
        type: FETCH_AUTHORS_ERROR,
      })
    ).toEqual((
      {
        ...initialState,
        isPending: false,
        error: true
      }
    ));
  })
})