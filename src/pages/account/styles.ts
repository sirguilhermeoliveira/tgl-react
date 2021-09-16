import styled from 'styled-components';

export const AccountTitle = styled.h1`
  color: #707070;
  font-style: italic;
  font-weight: bold;
`;
export const AccountTitleSub = styled.h4`
  color: #707070;
  margin-top: -25px;
`;
export const AccountDetailModal = styled.h4`
  margin-left: 5px;
  margin-right: 5px;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`;
export const AccountRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Main = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 146px);
`;
export const AccountBorderDetails = styled.div`
  border: 2px solid #b5c401;
  border-radius: 50px;
  width: 300px;
  height: 240px;
  background: white;
`;
