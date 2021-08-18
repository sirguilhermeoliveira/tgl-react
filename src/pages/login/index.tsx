import { Main } from './styles';
import GreatestApp from '../../components/GreatestApp/index';
import Form from '../../components/Form/index';
import { ButtonLogin } from '../../components/ButtonLogin/styles';
import { SpaceRight, SpaceLeft } from './styles';

const Login: React.FC = () => {
  return (
    <Main>
      <SpaceRight>
        <GreatestApp />
      </SpaceRight>
      <SpaceLeft>
        <ButtonLogin>Authentication</ButtonLogin>
        <Form></Form>
        <ButtonLogin>Sign Up</ButtonLogin>
      </SpaceLeft>
    </Main>
  );
};

export default Login;
