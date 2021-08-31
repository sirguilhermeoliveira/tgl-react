import styled from 'styled-components';

export const Main = styled.div`
  @media (min-width: 1366px) {
    margin-bottom: 60px;
  }
`;

export const GreatestAppTop = styled.div`
  font-size: 4.063rem;
  font-style: italic;
  font-weight: bold;
  color: #707070;
  @media (max-width: 350px) {
    font-size: 3.125rem;
  }
`;
export const GreatestAppMiddle = styled.div`
  font-size: 1.375rem;
  color: white;
  font-style: italic;
  font-weight: bold;
  background-color: #b5c401;
  border-radius: 100px;
  width: 144px;
  margin: 30px auto;
  padding: 8px;
`;
export const GreatestAppBottom = styled.div`
  font-size: 5.188rem;
  font-style: italic;
  font-weight: bold;
  color: #707070;
  text-transform: uppercase;
  @media (max-width: 470px) {
    font-size: 4.063rem;
  }
  @media (max-width: 350px) {
    font-size: 3.125rem;
  }
`;
