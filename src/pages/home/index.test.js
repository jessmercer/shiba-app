import React from 'react';

import { setupTestComponent } from '../../setupTests';
import Home from '.';
import { routes } from '../../lib/constants';

const setupTest = setupTestComponent({
  render: () => <Home />,
});

describe('Pages: Home', () => {
  it('renders the title', () => {
    const { wrapper } = setupTest();
    expect(wrapper.find('[data-qa="title"]')).toHaveText('Photo App');
  });

  it('renders the page link to shibas', () => {
    const { wrapper } = setupTest();
    expect(wrapper.find('[data-id="shibas-link"] a')).toHaveText('How many Shibas do you want to see?');
    expect(wrapper.find('[data-id="shibas-link"] a')).toHaveProp('href', routes.shibas);
  });

  it('renders the page link to authors', () => {
    const { wrapper } = setupTest();
    expect(wrapper.find('[data-id="authors-link"] a')).toHaveText('Choose an author');
    expect(wrapper.find('[data-id="authors-link"] a')).toHaveProp('href', routes.authors);
  });
});
