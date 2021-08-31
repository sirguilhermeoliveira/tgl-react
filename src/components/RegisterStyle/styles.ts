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
export const SpaceRight = styled.section`
  @media (min-width: 1366px) {
    margin-right: 50px;
  }
`;
export const SpaceLeftLoginRegister = styled.section`
  @media (min-width: 1366px) {
    margin-left: 50px;
    margin-top: -62px;
  }
  @media (max-width: 1365px) {
    margin: 50px;
  }
`;
export const SpaceLeftResetPassword = styled.section`
  @media (min-width: 1366px) {
    margin-left: 50px;
    margin-top: -176px;
  }
  @media (max-width: 1365px) {
    margin: 50px;
  }
`;
export const Text = styled.p`
  @media (min-width: 1366px) {
    margin-right: 50px;
  }
`;
