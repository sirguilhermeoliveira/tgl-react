import styled from 'styled-components';
export const Main = styled.div`
  flex-direction: column;
  display: flex;
  max-width: 1366px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 50px;
  min-height: calc(100vh - 166px);
  @media (min-width: 1366px) {
    min-height: calc(100vh - 396px);
    flex-direction: row;
    margin-top: 50px;
    margin-bottom: 200px;
  }
`;

export const BodyLeft = styled.section`
  @media (max-width: 1365px) {
    margin-bottom: 50px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 1366px) {
    margin-left: 140px;
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
  @media (max-width: 1365px) {
    justify-content: center;
  }
`;
export const NewBetLeft = styled.div`
  margin-right: 7px;
  color: #707070;
  font-style: italic;
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
`;
export const NewBetRight = styled.div`
  text-transform: uppercase;
  color: gray;
  font-style: italic;
  font-size: 1.5rem;
`;
export const ChooseGame = styled.p`
  color: #868686;
  font-size: 1.063rem;
  font-style: italic;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Loto = styled.button`
  font-size: 0.875rem;
  font-style: italic;
  font-weight: bold;
  color: ${(props) => props.color};
  padding: 6px 25px;
  background: #ffffff;
  cursor: pointer;
  border-radius: 100px;
  border: 2px solid ${(props) => props.color};
  margin-right: 15px;
  @media (max-width: 400px) {
    margin-right: 0px;
  }
  &.active {
    background-color: ${(props) => props.color};
    color: #ffffff;
  }
`;

export const FillBet = styled.p`
  margin-bottom: 5px;
  color: #868686;
  font-size: 1.063rem;
  font-style: italic;
  font-weight: bold;
`;
export const BetsDescription = styled.p`
  font-size: 1.063rem;
  font-style: italic;
  color: #868686;
  margin: 0 auto;
  @media (min-width: 1366px) {
    max-width: 650px;
  }
`;
export const BetsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const NumbersContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  max-width: 660px;
  @media (max-width: 1365px) {
    margin: 0 auto;
    justify-content: center;
  }
`;
export const Numbers = styled.div`
  color: #ffffff;
  padding: 18px 20px;
  border-radius: 50%;
  margin-right: 15px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  font-size: 1.025rem;
  &.desactive {
    background-color: #adc0c4;
  }
  &.active {
    background: ${(props) => props.color};
  }
`;

export const ArrowIcon = styled.div`
  margin-left: 20px;
`;

export const BetsRange = styled.div`
  padding-top: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  margin-bottom: 30px;
  @media (max-width: 1365px) {
    flex-direction: column;
  } ;
`;
export const CompleteGame = styled.div`
  margin-right: 20px;
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: medium;
  cursor: pointer;
  padding: 15px 22px;
  @media (max-width: 1365px) {
    width: 190px;
    text-align: center;
    margin: 0 auto;
  } ;
`;
export const ClearGame = styled.div`
  margin-right: 20px;
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: medium;
  padding: 15px 22px;
  cursor: pointer;
  @media (max-width: 1365px) {
    width: 190px;
    text-align: center;
    margin: 20px auto;
  } ;
`;
export const AddCart = styled.div`
  border: none;
  margin-left: 158px;
  color: white;
  background-color: ${(props) => props.color};
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  font-weight: bold;
  padding: 15px 37px;
  @media (max-width: 1365px) {
    width: 180px;
    padding-right: 15px;
    margin: 0 auto;
  } ;
`;
export const AddCartRight = styled.div`
  margin-right: 15px;
  margin-left: 5px;
`;

export const BodyRight = styled.section`
  background: #ffffff;
  box-shadow: 0px 3px 25px #00000014;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 14px;
  border: 1px solid #dddddd;

  @media (max-width: 420px) {
    min-width: 300px;
  }

  @media (max-width: 320px) {
    min-width: 200px;
  }
  @media (min-width: 1366px) {
    margin-left: 140px;
    margin-bottom: 250px;
  }
`;

export const Cart = styled.div`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #707070;
  font-style: italic;
  font-weight: bold;
  padding: 30px 0px 0px 30px;
`;
export const Bets = styled.div`
  border-left: 5px solid ${(props) => props.color};
  margin: 20px auto;
  border-radius: 5px;
  max-width: 300px;
`;
export const BetsNumbers = styled.div`
  font-size: 0.875rem;
  font-style: italic;
  font-weight: bold;
  color: #868686;
  margin-left: 10px;
  text-align: left;
  letter-spacing: 0px;
`;
export const BetsTrashCan = styled.div`
  font-size: 1.5rem;
  margin-bottom: -65px;
  color: ${(props) => props.color};
  cursor: pointer;
  @media (max-width: 400px) {
    margin-left: -15px;
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
  margin-top: 7px;
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
  font-size: 1.5rem;
  font-style: italic;
  font-weight: bold;
  margin-right: 7px;
  text-transform: uppercase;
`;
export const BetsTotalRight = styled.div`
  color: #707070;
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-right: 5px;
`;
export const BetsTotalPrice = styled.div`
  color: #707070;
  font-size: 1.5rem;
`;
export const BetsEmpty = styled.div`
  color: red;
  font-size: 1.875rem;
  font-style: italic;
  text-align: left;
  margin-left: 10px;
`;
export const SaveButton = styled.div`
  border: 1px solid #e2e2e2;
  background: #f4f4f4;
  display: flex;
  justify-content: center;
  padding: 30px;
  cursor: pointer;
  font-size: 2.188rem;
  font-style: italic;
  font-weight: bold;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: ${(props) => props.color};
`;
