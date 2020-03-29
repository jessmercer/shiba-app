import React from 'react';

import { setupTestComponent } from '../../setupTests';
import Loader from '.';

const setupTest = setupTestComponent({
  render: () => <Loader />,
});

describe('Components: Loader', () => {
  it('renders an Loader', () => {
    const { wrapper } = setupTest();
    expect(wrapper.find('[data-qa="loader"]')).toHaveText('Loading...');
  });

  it('renders correct className on Loader', () => {
    const { wrapper } = setupTest();
    expect(wrapper.find('[data-qa="loader"]')).toHaveClassName('loader');
  });
});
