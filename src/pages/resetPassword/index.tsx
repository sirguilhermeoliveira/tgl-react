import { Main } from './styles';
import GreatestApp from '../../components/GreatestApp/index';
import Form from '../../components/FormPassword/index';
import { ButtonLogin } from '../../components/ButtonLogin/styles';
import { SpaceRight, SpaceLeft } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <Main>
      <SpaceRight>
        <GreatestApp />
      </SpaceRight>
      <SpaceLeft>
        <ButtonLogin>Reset password</ButtonLogin>
        <Form />
        <ButtonLogin>
          <Link
            style={{ textDecoration: 'none', color: '#707070' }}
            to='/login'
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Link>
        </ButtonLogin>
      </SpaceLeft>
    </Main>
  );
};

export default Login;
