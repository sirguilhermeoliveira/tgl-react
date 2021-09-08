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
          <AccountDetail>Username: Guilherme </AccountDetail>
          <AccountDetail> Password: ******</AccountDetail>
        </AccountRow>
      </AccountBorderDetails>
    </Main>
  );
};

export default Login;
