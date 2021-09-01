import {
  AccountBorderDetails,
  AccountTitle,
  AccountTitleSub,
  AccountRow,
  AccountDetail,
  Main,
} from './styles';
const Login: React.FC = () => {
  return (
    <Main>
      <AccountBorderDetails>
        <AccountTitle>Account Details</AccountTitle>
        <AccountTitleSub>This is your Account Details</AccountTitleSub>
        <AccountRow>
          <AccountDetail>User name: Guilherme </AccountDetail>
          <AccountDetail> Password: 123456</AccountDetail>
        </AccountRow>
      </AccountBorderDetails>
    </Main>
  );
};

export default Login;
