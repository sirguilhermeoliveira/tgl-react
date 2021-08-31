import styled from 'styled-components';

export const FormContainer = styled.form`
  background: #ffffff;
  box-shadow: 0px 3px 25px #00000014;
  max-width: 337px;
  border-radius: 14px;
  border: 1px solid #dddddd;
  margin: 15px auto;
  padding-top: 5px;
  @media (max-width: 439px) {
    max-width: 200px;
  }
`;

export const LogIn = styled.div`
  color: #b5c401;
  text-align: center;
  font-weight: bold;
  font-style: italic;
  margin: 30px;
  font-size: 2.188rem;
  cursor: pointer;
`;

export const Input = styled.input`
  font-style: italic;
  font-weight: bold;
  font-size: 17px;
  color: #9d9d9d;
  border: none;
  border-bottom: 2px solid #ebebeb;
  outline: none;
  padding: 20px 65px;
  @media (max-width: 439px) {
    padding: 20px 0px;
    width: 200px;
    margin-top: 10px;
  }
  @media (max-width: 306px) {
    padding: 10px 0px;
    width: 150px;
    margin-top: 10px;
  }
  &::placeholder {
    color: #9d9d9d;
  }
`;

export const ButtonLogin = styled.div`
  color: #707070;
  font-size: 2.25rem;
  font-style: italic;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;
