import styled from 'styled-components';

export const Main = styled.div`
  flex-direction: column;
  display: flex;
  margin: 0 auto;
  align-items: center;
  max-width: 1366px;
  margin-top: 10px;
  @media (min-width: 1366px) {
    flex-direction: row;
  }
`;

export const HeaderContainer = styled.div`
  border-bottom: 2px solid #ebebeb;
`;

export const HeaderTGL = styled.div`
  color: #707070;
  font-style: italic;
  font-weight: bold;
  font-size: 2.75rem;
  cursor: pointer;
  margin: 0 auto;
  @media (max-width: 1365px) {
    margin-bottom: 20px;
  }
  @media (min-width: 1366px) {
    margin-right: 560px;
    display: flex;
    flex-direction: row;
  }
`;
export const HeaderTGLSub = styled.div`
  background: #b5c401;
  width: 92px;
  height: 7px;
  border-radius: 6px;
  margin: 0 auto;
  margin-bottom: -5px;
`;
export const HeaderUppercase = styled.div`
  text-transform: uppercase;
`;
export const HeaderHome = styled.div`
  color: #707070;
  font-size: 1.25rem;
  font-style: italic;
  font-weight: bold;
  @media (max-width: 1365px) {
    margin-top: 15px;
    padding-left: 5px;
  }
  @media (min-width: 1366px) {
    margin-top: 15px;
    margin-left: 60px;
  }
`;

export const HeaderItemContainer = styled.div`
  @media (min-width: 1366px) {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
  }
`;

export const HeaderItemAccount = styled.div`
  color: #707070;
  font-size: 1.25rem;
  font-style: italic;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
  @media (min-width: 1366px) {
    margin: 0 auto;
  }
`;

export const HeaderItemLeave = styled.div`
  color: #707070;
  font-size: 1.25rem;
  font-style: italic;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
  @media (min-width: 1366px) {
    margin: 0 auto;
    margin-left: 60px;
  }
`;
