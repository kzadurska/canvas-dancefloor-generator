import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { queries } from 'styles';

Header.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  validationMessage: PropTypes.string.isRequired,
};

export default function Header({ onSubmit, validationMessage }) {
  return (
    <HeaderWrapper>
      <Form onSubmit={onSubmit}>
        <Input name="rowsNumber" placeholder="Enter number of rows" />
        <Input name="columnsNumber" placeholder="Enter number of columns" />
        <Button type="submit">Generate!</Button>
      </Form>
      <div css="color: tomato; margin: 8px; height: 30px;">{validationMessage}</div>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex; 
  flex-direction: column; 
  align-items:center; box-shadow: 
  rgba(0, 0, 0, 0.2) 0px 2px 13px 0px; 
  width: 100%; margin 0 auto;
`;

const Form = styled.form`
  display: flex;

  @media ${queries.mobile} {
    flex-direction: column;
    justify-content: center;
    margin: 8px;
  }

  @media ${queries.desktop} {
    justify-content: space-between;
    width: 50%;
    margin: 16px 0;
  }
`;

const formElementStyles = css`
  width: 250px;
  margin: 8px;
  box-sizing: border-box;
  height: 30px;

  @media ${queries.desktop} {
    width: 200px;
    margin: 0;
    height: 40px;
  }
`;

const Input = styled.input.attrs({
  type: 'number',
  min: 1,
  max: 20,
  inputMode: 'numeric',
})`
  ${formElementStyles}
`;

const Button = styled.button`
  ${formElementStyles}
`;
