import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReactRouterLink } from 'react-router-dom';

import './index.css';

const Link = ({ children, to, dataId }) => (
  <span className="link" data-qa="link" data-id={dataId}>
    <ReactRouterLink to={to}>
      {children}
    </ReactRouterLink>
  </span>
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  dataId: PropTypes.string
}

Link.defaultProps = {
  dataId: ''
}

export default Link;
