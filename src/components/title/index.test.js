import React from 'react';

import { setupTestComponent } from '../../setupTests';
import Title from '.';

const requiredProps = {
  color: 'red',
  children: 'hey I am a title',
}

const setupTest = setupTestComponent({
  render: () => <Title {...requiredProps} />,
});

describe('Components: Title', () => {
  it('renders correct className on Title', () => {
    const { wrapper } = setupTest();
    expect(wrapper.find('[data-qa="title"]')).toHaveClassName('title');
  });

  it('renders correct className modifier on Title', () => {
    const { wrapper } = setupTest();
    expect(wrapper.find('[data-qa="title"]')).toHaveClassName(`title--${requiredProps.color}`);
  });

  it('renders Title with its children', () => {
    const { wrapper } = setupTest();
    expect(wrapper.find('[data-qa="title"]')).toHaveText(requiredProps.children);
  });
});
