import styled from 'styled-components';

export const Main = styled.div`
  @media (min-width: 1366px) {
    padding-top: 70px;
    flex-direction: row;
    display: flex;
    margin: 0 auto;
    max-width: 1366px;
    min-height: 753px;
  }
  @media (max-width: 1365px) {
    margin-top: 50px;
  }
`;

export const BodyLeft = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (min-width: 1366px) {
    padding-right: 90px;
  }
`;

export const RecentGamesContainer = styled.div`
  margin: 0 auto;
  @media (min-width: 1366px) {
    display: flex;
    flex-direction: row;
  }
`;

export const BodyRight = styled.section`
  font-size: 1.5rem;
  font-style: italic;
  font-weight: bold;
  cursor: pointer;
  color: #b5c401;
  height: 30px;
  @media (max-width: 1365px) {
    margin-top: 60px;
  }
  @media (min-width: 1366px) {
    margin-right: 160px;
  }
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const RecentGamesDiv = styled.div`
  font-size: 1.5rem;
  font-style: italic;
  font-weight: bold;
  color: #707070;
  @media (max-width: 1365px) {
    margin-bottom: 20px;
  }
`;
export const Filters = styled.p`
  font-size: 1.063rem;
  font-style: italic;
  color: #868686;
  margin: 4px 20px;
`;
export const Loto = styled.div`
  font-size: 0.875rem;
  text-align: center;
  font-style: italic;
  font-weight: bold;
  color: ${(props) => props.color};
  padding: 6px 12px;
  min-width: 80px;
  cursor: pointer;
  border-radius: 100px;
  border: 2px solid ${(props) => props.color};
  @media (max-width: 1365px) {
    width: 200px;
    margin: 20px auto;
  }
  @media (min-width: 1366px) {
    margin-right: 20px;
  }
  &.active {
    background-color: ${(props) => props.color};
    color: #ffffff;
  }
`;
