import styled from 'styled-components';

export const FormContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 3px 25px #00000014;
  max-width: 337px;
  border-radius: 14px;
  border: 1px solid #dddddd;
  margin: 15px auto;
  padding-top: 5px;
  @media (min-width: 1366px) {
    min-width: 337px;
  }
`;

export const Input = styled.input`
  font-style: italic;
  font-weight: bold;
  font-size: 17px;
  color: #9d9d9d;
  border: none;
  border-bottom: 2px solid #ebebeb;
  outline: none;
  padding: 20px;

  &::placeholder {
    color: #9d9d9d;
  }
`;
