import { Main } from './styles';
import GreatestApp from '../../components/GreatestApp/index';
import Form from '../../components/FormLogin/index';
import { ButtonLogin } from '../../components/ButtonLogin/styles';
import { SpaceRight, SpaceLeft } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Login: React.FC = () => {
  return (
    <Main>
      <SpaceRight>
        <GreatestApp />
      </SpaceRight>
      <SpaceLeft>
        <ButtonLogin>Authentication</ButtonLogin>
        <Form />
        <ButtonLogin>
          Sign Up <FontAwesomeIcon icon={faArrowRight} />
        </ButtonLogin>
      </SpaceLeft>
    </Main>
  );
};

export default Login;
