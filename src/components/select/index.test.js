import React from 'react';

import { setupTestComponent } from '../../setupTests';
import Select from '.';

const requiredProps = {
  value: 'number',
  options: [1, 2, 3, 4, 5],
  onChange: () => {}
}

const setupTest = setupTestComponent({
  render: () => <Select {...requiredProps} />,
});

describe('Components: Select', () => {
  it('should render Select with a value', () => {
    const { wrapper } = setupTest();
    expect(wrapper.find('[data-qa="select"]')).toHaveProp('value', requiredProps.value);
  });

  it('renders an option for each item in options', () => {
    const { wrapper } = setupTest();
    requiredProps.options.forEach((option, index) => {
      expect(wrapper.find('option').at(index)).toHaveText(String(option));
    })
  });

  it('renders onChange on select', () => {
    const { wrapper } = setupTest();
    expect(wrapper.find('[data-qa="select"]')).toHaveProp('onChange', requiredProps.onChange);
  });
});
