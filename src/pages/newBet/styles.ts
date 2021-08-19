import styled from 'styled-components';

export const Main = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 10px;
  @media (min-width: 1366px) {
    justify-content: center;
    flex-direction: row;
    margin-bottom: 200px;
    margin-top: 50px;
  }
`;

export const BodyLeft = styled.div`
  @media (max-width: 1365px) {
    margin-bottom: 50px;
    margin: 0 auto;
  }
  @media (min-width: 1366px) {
    margin-left: 90px;
    margin-right: 20px;
  }
`;

export const AllBets = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;
export const NewBetContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;
export const NewBetLeft = styled.div`
  margin-right: 7px;
  color: #707070;
  font-style: italic;
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
`;
export const NewBetRight = styled.div`
  text-transform: uppercase;
  color: gray;
  font-style: italic;
  font-size: 24px;
`;
export const ChooseGame = styled.div`
  color: #868686;
  font-size: 17px;
  font-style: italic;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const LotoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  @media (max-width: 410px) {
    flex-direction: column;
    text-align: center;
  }
`;
export const Loto = styled.div`
  font-size: 14px;
  font-style: italic;
  font-weight: bold;
  color: #707070;
  padding: 6px 25px;
  background: #ffffff;
  cursor: pointer;
  border-radius: 100px;
  border: 2px solid #707070;
  margin-right: 15px;
  @media (max-width: 400px) {
    margin-right: 0px;
  }
`;
export const FillBet = styled.div`
  margin-bottom: 5px;
  color: #868686;
  font-size: 17px;
  font-style: italic;
  font-weight: bold;
`;
export const BetsDescription = styled.div`
  font-size: 17px;
  font-style: italic;
  color: #868686;
  margin: 0 auto;
`;
export const NumbersContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  width: 100%;
  @media (max-width: 563px) {
    justify-content: center;
  }
`;
export const Numbers = styled.div`
  color: #ffffff;
  padding: 21px 20px;
  border-radius: 50%;
  background-color: #adc0c4;
  margin-right: 15px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  font-size: 1.025rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  @media (max-width: 894px) {
    flex-direction: column;
  } ;
`;
export const CompleteGame = styled.div`
  margin-right: 20px;
  border: 1px solid #27c383;
  color: #27c383;
  border-radius: 10px;
  font-size: 12px;
  font-weight: medium;
  cursor: pointer;
  padding: 15px 22px;
  @media (max-width: 894px) {
    width: 200px;
    text-align: center;
    margin: 0 auto;
  } ;
`;
export const ClearGame = styled.div`
  margin-right: 20px;
  border: 1px solid #27c383;
  color: #27c383;
  border-radius: 10px;
  font-size: 12px;
  font-weight: medium;
  padding: 15px 22px;
  cursor: pointer;
  @media (max-width: 894px) {
    width: 200px;
    text-align: center;
    margin: 0 auto;
  } ;
`;
export const AddCart = styled.div`
  border: none;
  margin-left: 148px;
  color: white;
  background-color: #27c383;
  padding-right: 50px;
  padding-left: 10px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  font-weight: bold;
  padding: 15px 25px;
  @media (max-width: 894px) {
    width: 190px;
    margin: 0 auto;
  } ;
`;
export const AddCartRight = styled.div`
  margin-right: 25px;
  margin-left: 15px;
`;

export const BodyRight = styled.div`
  background: #ffffff;
  box-shadow: 0px 3px 25px #00000014;
  min-width: 400px;

  border-radius: 14px;
  border: 1px solid #dddddd;
  @media (max-width: 1365px) {
    margin: 15px auto;
    margin-bottom: 50px;
  }
  @media (max-width: 640px) {
    min-width: 200px;
    justify-content: center;
  }
  @media (max-width: 400px) {
    width: 200px;
  }
  @media (min-width: 1366px) {
    margin-right: 80px;
    margin-left: 20px;
  }
`;

export const Cart = styled.div`
  font-size: 24px;
  text-transform: uppercase;
  color: #707070;
  font-style: italic;
  font-weight: bold;
  padding: 30px 0px 0px 30px;
`;
export const Bets = styled.div`
  height: 63px;
  border-left: 5px solid #707070;
  width: 300px;
  margin: 20px auto;
  border-radius: 5px;
  @media (max-width: 400px) {
    width: 150px;
  }
`;
export const BetsNumbers = styled.div`
  font-size: 14px;
  font-style: italic;
  font-weight: bold;
  color: #868686;
  margin-left: 10px;
  @media (max-width: 400px) {
    margin-left: 20px;
  }
  @media (max-width: 640px) {
    font-size: 10px;
    display: flex;
    flex-wrap: wrap;
  }
`;
export const BetsTrashCan = styled.div`
  font-size: 24px;
  margin-bottom: -65px;
  color: #888888;
  @media (max-width: 400px) {
    margin-left: -15px;
  }
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

export const BetsTotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;
export const BetsTotalLeft = styled.div`
  color: #707070;
  font-size: 24px;
  font-style: italic;
  font-weight: bold;
  margin-right: 7px;
  text-transform: uppercase;
`;
export const BetsTotalRight = styled.div`
  color: #707070;
  font-size: 24px;
  text-transform: uppercase;
  margin-right: 5px;
`;
export const BetsTotalPrice = styled.div`
  color: #707070;
  font-size: 24px;
`;
export const BetsEmpty = styled.div`
  color: red;
  font-size: 30px;
  padding: 30px;
  font-style: italic;
`;
export const SaveButton = styled.div`
  border: 1px solid #e2e2e2;
  background: #f4f4f4;
  display: flex;
  justify-content: center;
  padding: 30px;
  color: #27c383;
  cursor: pointer;
  font-size: 35px;
  font-style: italic;
  font-weight: bold;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
