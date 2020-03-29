import shibaReducer, { initialState } from '.';
import { FETCH_SHIBAS, FETCH_SHIBAS_SUCCESS, FETCH_SHIBAS_ERROR } from '../../actions/shibas-actions/types';

describe('Reducers: Shibas', () => {
  it('should return the initial state', () => {
    expect(shibaReducer(undefined, {})).toEqual((initialState))
  })

  it('should handle FETCH_SHIBAS', () => {
    expect(
      shibaReducer(undefined, {
        type: FETCH_SHIBAS,
      })
    ).toEqual((
      {
        ...initialState,
        isPending: true
      }
    ));
  })

  it('should handle FETCH_SHIBAS_SUCCESS', () => {
    expect(
      shibaReducer(undefined, {
        type: FETCH_SHIBAS_SUCCESS,
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

  it('should handle FETCH_SHIBAS_ERROR', () => {
    expect(
      shibaReducer(undefined, {
        type: FETCH_SHIBAS_ERROR,
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