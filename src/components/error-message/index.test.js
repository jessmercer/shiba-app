import React from 'react';

import { setupTestComponent } from '../../setupTests';
import ErrorMessage from '.';

const requiredProps = {
  children: 'hey im an error'
}

const setupTest = setupTestComponent({
  render: () => <ErrorMessage {...requiredProps} />,
});

describe('Components: ErrorMessage', () => {
  it('renders an ErrorMessage with its children', () => {
    const { wrapper } = setupTest();
    expect(wrapper.find('[data-qa="error"]')).toHaveText(requiredProps.children);
  });

  it('renders correct className on ErrorMessage', () => {
    const { wrapper } = setupTest();
    expect(wrapper.find('[data-qa="error"]')).toHaveClassName('error-message');
  });
});
