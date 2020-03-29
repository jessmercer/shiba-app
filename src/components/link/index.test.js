import React from 'react';

import { setupTestComponent } from '../../setupTests';
import Link from '.';

const requiredProps = {
  to: '/foo',
  children: 'hey im an link',
  dataId: 'test'
}

const setupTest = setupTestComponent({
  render: () => <Link {...requiredProps} />,
});

describe('Components: Link', () => {
  it('should render Link with children', () => {
    const { wrapper } = setupTest();
    expect(wrapper.find('[data-qa="link"]')).toHaveText(requiredProps.children);
  });

  it('should render Link with href', () => {
    const { wrapper } = setupTest();
    expect(wrapper.find('a')).toHaveProp('href', requiredProps.to);
  });

  it('should render Link with correct className', () => {
    const { wrapper } = setupTest();
    expect(wrapper.find('span')).toHaveClassName('link');
  });

  it('should render Link with its data id', () => {
    const { wrapper } = setupTest();
    expect(wrapper.find('[data-id="test"]')).toExist();
  });
});
