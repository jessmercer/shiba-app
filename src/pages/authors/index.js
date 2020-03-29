import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Field } from 'react-final-form';

import ErrorMessage from '../../components/error-message';
import Loader from '../../components/loader';
import PageLink from '../../components/link';
import Title from '../../components/title';
import Wrapper from '../../components/wrapper';
import { requestAuthors, setActiveAuthor } from '../../actions/authors-actions';

import './index.css';

export default () => {
  const dispatch = useDispatch();
  const { isPending, error, data: authors, activeAuthor } = useSelector((state) => state.authors);

  useEffect(() => {
    if (!authors.length) {
      dispatch(requestAuthors());
    }
  }, [dispatch, authors]);

  if (isPending) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage>Oops, something went wrong with your Authors request!</ErrorMessage>
  }

  return (
    <Wrapper>
      <Title color="green">Choose an author</Title>
      <Form
          onSubmit={({ author }) => dispatch(setActiveAuthor(author))}
          render={({ handleSubmit, pristine }) => (
            <form onSubmit={handleSubmit}>
              <ul className="author-list">
                {authors.map(item => (
                  <li className="author-list__item" key={item.id} data-id={item.id}>
                    <div data-qa="author-id">{item.id}</div>
                    <div data-qa="author-name">{item.author}</div>
                    <Field name="author" type="radio" value={item.id}>
                      {({ input }) => <input {...input} />}
                    </Field>
                  </li>
                ))}
              </ul>
              <button type="submit" disabled={pristine}>
                Make your choice
              </button>
            </form>
        )}
      />
        {activeAuthor && (
        <div className="author-image" data-qa="author-image">
          <img src={activeAuthor.download_url} alt={activeAuthor.author} />
        </div>
      )}
      <PageLink to="/">Home</PageLink>
    </Wrapper>
  );
};
