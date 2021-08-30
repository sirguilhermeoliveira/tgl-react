import styled from 'styled-components';

export const BetsEmpty = styled.div`
  display: flex;
  justify-content: center;
  color: red;
  font-size: 1.875rem;
  font-style: italic;
  text-align: left;
  margin-left: 10px;
`;

export const Bets = styled.div`
  height: 63px;
  border-left: 5px solid ${(props) => props.color};
  border-radius: 5px;
  margin-top: 50px;
  flex-direction: column;
  display: flex;
`;

export const BetsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const BetsNumbers = styled.div`
  font-size: 0.875rem;
  font-style: italic;
  font-weight: bold;
  text-align: left;
  color: #868686;
  margin-left: 10px;
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
