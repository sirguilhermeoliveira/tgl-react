import styled from 'styled-components';

export const BetsContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  margin-bottom: 20px;
  max-width: 400px;
  background: white;
`;

export const Bets = styled.section`
  border-left: 5px solid ${(props) => props.color};
  border-radius: 5px;
  padding: 10px;
`;

export const BetsNumbers = styled.div`
  word-break: break-all;
  font-size: 0.875rem;
  font-style: italic;
  font-weight: bold;
  color: #868686;
  margin-left: 10px;
  letter-spacing: 0px;
`;

export const BetsRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-top: 2px;
`;

export const BetsColor = styled.div`
  color: ${(props) => props.color};
  font-size: 1rem;
  font-weight: bold;
  font-style: italic;
  margin-right: 10px;
`;

export const BetsPrice = styled.div`
  font-size: 0.875rem;
  color: #868686;
  margin-top: 1px;
`;

export const BetsEmpty = styled.div`
  color: red;
  font-size: 1.875rem;
  font-style: italic;
  text-align: left;
  margin-left: 10px;
`;
