import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Field } from 'react-final-form';

import ErrorMessage from '../../components/error-message';
import Loader from '../../components/loader';
import PageLink from '../../components/link';
import Select from '../../components/select';
import Title from '../../components/title';
import Wrapper from '../../components/wrapper';
import { requestShibas } from '../../actions/shibas-actions';

import './index.css';

const numberOfShibasOptions = ['Please select a shiba', ...Array(50 + 1).keys()].filter(item => item !== 0);

export default () => {
  const dispatch = useDispatch();
  const { isPending, data, error } = useSelector((state) => state.shibas);

  if (isPending) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage>Oops, something went wrong with your Shiba request!</ErrorMessage>
  }

  return (
    <Wrapper>
      <Title color="blue">How many Shibas do you want to see?</Title>
      <Form
        onSubmit={({ numberOfShibas }) => dispatch(requestShibas(numberOfShibas))}
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            <Field name="numberOfShibas">{({ input }) => <Select options={numberOfShibasOptions} {...input} />}</Field>
            <button type="submit" disabled={pristine || invalid}>
              Submit
            </button>
          </form>
        )}
      />
      <div className="shiba-images">
        {data.map((image) => (
          <img src={image} key={image} data-qa="shiba-image" alt="shiba image" />
        ))}
      </div>
      <PageLink to="/">Home</PageLink>
    </Wrapper>
  );
};
