import styled from 'styled-components';

export const BodyLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BodyRight = styled.div`
  font-size: 24px;
  font-style: italic;
  font-weight: bold;
  cursor: pointer;
  color: #b5c401;
  @media (max-width: 1365px) {
    margin-top: 20px;
  }
`;
export const Main = styled.div`
  padding: 0px 130px;
  margin-top: 50px;
`;
export const RecentGames = styled.div`
  font-size: 24px;
  font-style: italic;
  font-weight: bold;
  color: #707070;
  @media (max-width: 1365px) {
    margin-bottom: 20px;
  }
`;
export const Filters = styled.div`
  font-size: 17px;
  font-style: italic;
  color: #868686;
  margin: 4px 20px;
`;
export const Loto = styled.div`
  font-size: 14px;
  font-style: italic;
  font-weight: bold;
  color: #707070;
  padding: 6px 12px;
  background: #ffffff;
  cursor: pointer;
  border-radius: 100px;
  border: 2px solid #707070;
  margin-right: 15px;
  @media (max-width: 1365px) {
    margin-top: 20px;
  }
`;
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
