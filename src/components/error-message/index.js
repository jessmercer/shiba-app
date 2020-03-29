import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const ErrorMessage = ({ children }) => <p className="error-message" data-qa="error">{children}</p>;

ErrorMessage.propTypes = {
  children: PropTypes.string.isRequired
}

export default ErrorMessage;
