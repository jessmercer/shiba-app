import React from 'react';

import { setupTestProvider } from '../../setupTests';
import Authors from '.';
import * as authorsActions from '../../actions/authors-actions';
import { FETCH_AUTHORS, FETCH_AUTHORS_SUCCESS, FETCH_AUTHORS_ERROR } from '../../actions/authors-actions/types';

jest.spyOn(authorsActions, 'requestAuthors').mockReturnValue(jest.fn());

const data = [{ 'id': '0', 'author': 'Alejandro Escamilla', 'width': 5616, 'height': 3744, 'url': 'https://unsplash.com/photos/yC-Yzbqy7PY', 'download_url': 'https://picsum.photos/id/0/5616/3744' }];

const setupTest = setupTestProvider({
  render: () => <Authors />,
});

describe('Pages: Authors', () => {
  it('renders a loader initially', () => {
    const { wrapper } = setupTest({
      prerender: ({ dispatch }) => dispatch({
        type: FETCH_AUTHORS,
      })
    });
    expect(wrapper.find('[data-qa="loader"]')).toHaveLength(1);
  });

  it('does not render a loader when there are authors', () => {
    const { wrapper } = setupTest({
      prerender: ({ dispatch }) => dispatch({
        type: FETCH_AUTHORS_SUCCESS,
        data,

      })
    });
    expect(wrapper.find('[data-qa="loader"]')).toHaveLength(0);
  });

  it('renders an error message if there is an error', () => {
    const { wrapper } = setupTest({
      prerender: ({ dispatch }) => dispatch({
        type: FETCH_AUTHORS_ERROR,

      })
    });
    expect(wrapper.find('[data-qa="error"]')).toHaveText('Oops, something went wrong with your Authors request!');
  });

  it('renders the correct title', () => {
    const { wrapper } = setupTest({
      prerender: ({ dispatch }) => dispatch({
        type: FETCH_AUTHORS_SUCCESS,
        data,

      })
    });
    expect(wrapper.find('[data-qa="title"]')).toHaveText('Choose an author');
  });

  it('renders the correct form', () => {
    const { wrapper } = setupTest({
      prerender: ({ dispatch }) => dispatch({
        type: FETCH_AUTHORS_SUCCESS,
        data,

      })
    });
    data.forEach(({ id, author }) => {
      const listItem = wrapper.find(`[data-id="${id}"]`);
      expect(listItem.find('[data-qa="author-id"]')).toHaveText(id);
      expect(listItem.find('[data-qa="author-name"]')).toHaveText(author);
      expect(listItem.find('input[type="radio"]')).toHaveValue(id);
    })
    expect(wrapper.find('button[type="submit"]')).toHaveText('Make your choice');
    expect(wrapper.find('button[type="submit"]')).toHaveProp('disabled', true);
  });

  it('should update the author', () => {
    const { wrapper } = setupTest({
      prerender: ({ dispatch }) => dispatch({
        type: FETCH_AUTHORS_SUCCESS,
        data,

      })
    });
    wrapper.find('[data-id="0"] input[type="radio"]').simulate('change', { currentTarget: { checked: true } });
    expect(wrapper.find('button[type="submit"]')).toHaveProp('disabled', false);

    wrapper.find('button[type="submit"]').simulate('submit');
    expect(wrapper.find('[data-qa="author-image"] img')).toHaveProp('src', data[0].download_url);
    expect(wrapper.find('[data-qa="author-image"] img')).toHaveProp('alt', data[0].author);
  });

  it('should have the correct page link', () => {
    const { wrapper } = setupTest({
      prerender: ({ dispatch }) => dispatch({
        type: FETCH_AUTHORS_SUCCESS,
        data,

      })
    });
    expect(wrapper.find('[data-qa="link"] a')).toHaveText('Home');
    expect(wrapper.find('[data-qa="link"] a')).toHaveProp('href', '/');
  });
});
