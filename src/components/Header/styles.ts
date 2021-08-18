import styled from 'styled-components';

export const HeaderTGL = styled.div`
  color: #707070;
  font-style: italic;
  font-weight: bold;
  font-size: 44px;
  cursor: pointer;
  @media (max-width: 1365px) {
    margin-bottom: 20px;
  }
`;
export const HeaderTGLSub = styled.div`
  background: #b5c401;
  width: 92px;
  height: 7px;
  border-radius: 6px;
  margin-bottom: -5px;
  @media (min-width: 1366px) {
  }
`;

export const HeaderItem = styled.div`
  color: #707070;
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
  @media (min-width: 1366px) {
    margin: 0 auto;
    margin-left: 300px;
  }
`;
export const Main = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-top: 10px;
  border-bottom: 2px solid #ebebeb;
  @media (min-width: 1366px) {
    flex-direction: row;
    padding: 0px 400px;
  }
`;
