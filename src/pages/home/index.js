import React from 'react';

import Title from '../../components/title';
import PageLink from '../../components/link';

import { routes } from '../../lib/constants';
import './index.css';

export default () => (
  <div className="page-1">
    <Title color="purple">Photo App</Title>
    <PageLink to={routes.shibas} dataId="shibas-link">How many Shibas do you want to see?</PageLink>
    <PageLink to={routes.authors} dataId="authors-link">Choose an author</PageLink>
  </div>
);
