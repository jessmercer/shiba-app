import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './index.css';

const Title = ({ children, color }) =>
<h1 className={cx('title', `title--${color}`)} data-qa="title">{children}</h1>;

Title.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default Title;
