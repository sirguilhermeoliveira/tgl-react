import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1365px) {
    flex-direction: column;
  }
`;

export const BodyLeft = styled.div`
  @media (max-width: 1365px) {
    margin-bottom: 50px;
  }
`;
export const NewBetContainer = styled.div``;
export const NewBetLeft = styled.div``;
export const NewBetRight = styled.div``;
export const ChooseGame = styled.div``;
export const LotoContainer = styled.div``;
export const Loto = styled.div``;
export const FillBet = styled.div``;
export const BetsDescription = styled.div``;
export const NumbersContainer = styled.div``;
export const Numbers = styled.div``;
export const ButtonContainer = styled.div``;
export const CompleteGame = styled.div``;
export const ClearGame = styled.div``;
export const AddCart = styled.div``;

export const BodyRight = styled.div`
  background: #ffffff;
  box-shadow: 0px 3px 25px #00000014;
  max-width: 337px;
  border-radius: 14px;
  border: 1px solid #dddddd;
  margin: 15px auto;
  @media (min-width: 1366px) {
    min-width: 337px;
  }
  @media (max-width: 1365px) {
    margin-bottom: 50px;
  }
`;

export const Cart = styled.div``;
export const Bets = styled.div`
  height: 63px;
  border-left: 5px solid #707070;
  width: 300px;
  margin: 20px auto;
  border-radius: 5px;
`;
export const BetsNumbers = styled.div`
  font-size: 14px;
  font-style: italic;
  font-weight: bold;
  color: #868686;
  margin-left: 10px;
`;
export const BetsPrice = styled.div`
  font-size: 12px;
  text-align: left;
  margin-left: 10px;
  color: #868686;
  margin: 8px;
`;
export const BetsName = styled.div`
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  color: #707070;
  margin-left: 10px;
  text-align: left;
`;

export const BetsTotalContainer = styled.div``;
export const BetsTotalLeft = styled.div``;
export const BetsTotalRight = styled.div``;
export const BetsTotalPrice = styled.div``;
export const SaveButton = styled.div``;
