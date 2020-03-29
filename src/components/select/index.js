import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ value, options, onChange }) => (
  <select value={value} onChange={onChange} data-qa="select">
    {options.map(option => (
      <option key={option}>{option}</option>
    ))}
  </select>
);

Select.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
  onChange: PropTypes.func.isRequired
}

export default Select;