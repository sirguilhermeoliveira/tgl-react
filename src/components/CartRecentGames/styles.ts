import styled from 'styled-components';

export const BetsEmpty = styled.div`
  display: flex;
  justify-content: center;
  color: red;
  font-size: 1.875rem;
  font-style: italic;
  text-align: left;
  margin-left: 10px;
  @media (max-width: 1365px) {
    margin-top: 30px;
  }
  @media (min-width: 1366px) {
    justify-content: flex-start;
    margin-top: 20px;
    margin-left: -0px;
  }
`;

export const Bets = styled.div`
  height: 73px;
  border-left: 5px solid ${(props) => props.color};
  border-radius: 5px;
  margin-top: 20px;
  flex-direction: column;
  display: flex;
`;

export const BetsContainer = styled.div`
  display: flex;
  @media (max-width: 1365px) {
    justify-content: center;
  }
  @media (min-width: 1366px) {
    margin-bottom: 20px;
  }
`;

export const BetsNumbers = styled.div`
  font-size: 0.875rem;
  font-style: italic;
  font-weight: bold;
  text-align: left;
  color: #868686;
  margin-left: 10px;
  word-break: break-all;
  width: 250px;
  @media (max-width: 504px) {
    font-size: 0.625rem;
  }
  @media (max-width: 374px) {
    font-size: 0.563rem;
  }
`;
export const BetsPrice = styled.div`
  font-size: 0.75rem;
  text-align: left;
  margin-left: 10px;
  color: #868686;
  margin: 8px;
`;
export const BetsName = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  font-style: italic;
  color: ${(props) => props.color};
  margin-left: 10px;
  text-align: left;
`;
