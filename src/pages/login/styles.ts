import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 81px);
  @media (min-width: 1366px) {
    flex-direction: row;
    align-items: center;
  }
`;
export const SpaceRight = styled.div`
  @media (min-width: 1366px) {
    margin-right: 50px;
  }
`;
export const SpaceLeft = styled.div`
  @media (min-width: 1366px) {
    margin-left: 50px;
    margin-top: 40px;
  }
`;
