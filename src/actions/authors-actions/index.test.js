import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { SET_ACTIVE_AUTHOR, FETCH_AUTHORS, FETCH_AUTHORS_SUCCESS, FETCH_AUTHORS_ERROR } from './types';
import { requestAuthors, requestAuthorsApi, setActiveAuthor } from '.'

describe('author actions', () => {
  describe('setActiveAuthor', () => {
      it('should create action', () => {
        const expectedAction = {
          type: SET_ACTIVE_AUTHOR,
          id: 2,
        };
        expect(setActiveAuthor(2)).toEqual(expectedAction);
      });
  });

  describe('requestAuthors', () => {
    afterEach(() => {
      fetchMock.restore()
    });

    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    it('creates FETCH_AUTHORS_SUCCESS when fetching authors is a success', () => {
      fetchMock.getOnce(requestAuthorsApi, {
        body: { test: 'test' },
        headers: { 'content-type': 'application/json' }
      });
      const store = mockStore({ authors: [] });

      return store.dispatch(requestAuthors()).then(() => {
        expect(store.getActions()).toEqual([
          { type: FETCH_AUTHORS },
          { type: FETCH_AUTHORS_SUCCESS, data: { test: 'test' } }
        ])
      })
    })

    it('creates FETCH_AUTHORS_ERROR when fetching authors is a failure', () => {
      fetchMock.getOnce(requestAuthorsApi, {
        headers: { 'content-type': 'application/json' }
      });
      const store = mockStore({ authors: [] });

      return store.dispatch(requestAuthors()).then(() => {
        expect(store.getActions()).toEqual([
          { type: FETCH_AUTHORS },
          { type: FETCH_AUTHORS_ERROR }
        ])
      })
    })
  })
});
