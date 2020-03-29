import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { FETCH_SHIBAS, FETCH_SHIBAS_SUCCESS, FETCH_SHIBAS_ERROR } from './types';
import { requestShibas, requestShibasApi } from '.'

describe('shiba actions', () => {
  describe('requestShibas', () => {
    afterEach(() => {
      fetchMock.restore()
    });

    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    it('creates FETCH_SHIBAS_SUCCESS when fetching shibas is a success', () => {
      const numberOfShibas = 3;
      fetchMock.getOnce(requestShibasApi + numberOfShibas, {
        body: { test: 'test' },
        headers: { 'content-type': 'application/json' }
      });
      const store = mockStore({ shibas: [] });

      return store.dispatch(requestShibas(numberOfShibas)).then(() => {
        expect(store.getActions()).toEqual([
          { type: FETCH_SHIBAS },
          { type: FETCH_SHIBAS_SUCCESS, data: { test: 'test' } }
        ])
      })
    })

    it('creates FETCH_SHIBAS_ERROR when fetching shibas is a failure', () => {
      const numberOfShibas = 5;
      fetchMock.getOnce(requestShibasApi + numberOfShibas, {
        headers: { 'content-type': 'application/json' }
      });
      const store = mockStore({ shibas: [] });

      return store.dispatch(requestShibas(numberOfShibas)).then(() => {
        expect(store.getActions()).toEqual([
          { type: FETCH_SHIBAS },
          { type: FETCH_SHIBAS_ERROR }
        ])
      })
    })
  })
});
