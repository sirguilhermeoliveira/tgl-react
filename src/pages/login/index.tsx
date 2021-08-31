import GreatestApp from '../../components/GreatestApp/index';
import Form from '../../components/Form/FormLogin/index';
import { ButtonLogin } from '../../components/Form/styles';
import {
  SpaceRight,
  SpaceLeft,
  Main,
} from '../../components/RegisterStyle/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
          <Link
            style={{ textDecoration: 'none', color: '#707070' }}
            to='/registration'
          >
            Sign Up <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </ButtonLogin>
      </SpaceLeft>
    </Main>
  );
};

export default Login;
