import React from 'react';

import { setupTestProvider } from '../../setupTests';
import Shibas from '.';
import * as shibasActions from '../../actions/shibas-actions';
import { FETCH_SHIBAS, FETCH_SHIBAS_SUCCESS, FETCH_SHIBAS_ERROR } from '../../actions/shibas-actions/types';

jest.spyOn(shibasActions, 'requestShibas').mockReturnValue(jest.fn());

const data = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

const setupTest = setupTestProvider({
  render: () => <Shibas />,
});

describe('Pages: Shibas', () => {
  it('renders the correct title', () => {
    const { wrapper } = setupTest();
    expect(wrapper.find('[data-qa="title"]')).toHaveText('How many Shibas do you want to see?');
  });

  it('renders the correct form', () => {
    const { wrapper } = setupTest();
    expect(wrapper.find('[data-qa="select"] option').at(0)).toHaveText('Please select a shiba');
    expect(wrapper.find('[data-qa="select"] option')).toHaveLength(51);
    expect(wrapper.find('button[type="submit"]')).toHaveText('Submit');
    expect(wrapper.find('button[type="submit"]')).toHaveProp('disabled', true);
  });

  it('should call the fetch shiba action when the form is submitted', () => {
    const { wrapper } = setupTest();
    wrapper.find('[data-qa="select"]').simulate('change', { target: { value: '2' } });
    expect(wrapper.find('button[type="submit"]')).toHaveProp('disabled', false);

    wrapper.find('button[type="submit"]').simulate('submit');
    expect(shibasActions.requestShibas).toHaveBeenCalledWith('2');
  });

  it('should show loader when fetch shibas is pending', () => {
    const { wrapper } = setupTest({
      prerender: ({ dispatch }) => dispatch({
        type: FETCH_SHIBAS,
        data,

      })
    });
    expect(wrapper.find('[data-qa="loader"]')).toExist();
  });

  it('should show the shiba images when there is a success response', () => {
    const { wrapper } = setupTest({
      prerender: ({ dispatch }) => dispatch({
        type: FETCH_SHIBAS_SUCCESS,
        data,

      })
    });
    data.forEach((shibaImg, index) => {
      expect(wrapper.find('[data-qa="shiba-image"]').at(index)).toHaveProp('src', shibaImg);
    })

  });

  it('renders an error message if there is an error', () => {
    const { wrapper } = setupTest({
      prerender: ({ dispatch }) => dispatch({
        type: FETCH_SHIBAS_ERROR,

      })
    });
    expect(wrapper.find('[data-qa="error"]')).toHaveText('Oops, something went wrong with your Shiba request!');
  });

  it('should have the correct page link', () => {
    const { wrapper } = setupTest();
    expect(wrapper.find('[data-qa="link"] a')).toHaveText('Home');
    expect(wrapper.find('[data-qa="link"] a')).toHaveProp('href', '/');
  });
});
