import styled from 'styled-components';

export const Main = styled.div`
  margin-top: 73px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 1366px) {
    flex-direction: row;
  }
`;

export const BodyLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecentGamesContainer = styled.div`
  @media (min-width: 1366px) {
    display: flex;
    flex-direction: row;
  }
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
  @media (min-width: 1366px) {
    margin-left: 200px;
  }
`;

export const RecentGamesDiv = styled.div`
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
  min-width: 80px;
  cursor: pointer;
  border-radius: 100px;
  border: 2px solid #707070;
  @media (max-width: 1365px) {
    margin-top: 40px;
    width: 200px;
    margin: 0 auto;
  }
  @media (min-width: 1366px) {
    margin-right: 20px;
  }
`;

export const Bets = styled.div`
  height: 63px;
  border-left: 5px solid #707070;
  min-width: 300px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  @media (min-width: 366px) {
    margin: 20px auto;
  }
  @media (min-width: 1366px) {
    margin-right: 350px;
  }
`;

export const BetsNumbers = styled.div`
  font-size: 14px;
  font-style: italic;
  font-weight: bold;
  text-align: left;
  color: #868686;
  margin-left: 10px;
  @media (max-width: 504px) {
    font-size: 10px;
  }
  @media (max-width: 374px) {
    font-size: 9px;
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
