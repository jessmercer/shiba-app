import React from 'react';

import { setupTestComponent } from '../../setupTests';
import Wrapper from '.';

const setupTest = setupTestComponent({
  render: () => <Wrapper><span>Text</span></Wrapper>,
});

describe('Components: Wrapper', () => {
  it('renders app components and content', () => {
    const { wrapper } = setupTest();
    expect(wrapper.find('[data-qa="wrapper"]')).toHaveText('Text');
  });
});
