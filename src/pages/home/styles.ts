import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 20px;
  min-height: calc(100vh - 166px);
  @media (min-width: 1366px) {
    margin-bottom: 200px;
    min-height: calc(100vh - 366px);
  }
`;
