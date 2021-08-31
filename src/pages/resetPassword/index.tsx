import GreatestApp from '../../components/GreatestApp/index';
import FormPassword from '../../components/Form/FormPassword/index';
import { ButtonLogin } from '../../components/Form/styles';
import {
  SpaceRight,
  SpaceLeft,
  Main,
} from '../../components/RegisterStyle/styles';
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
        <FormPassword />
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
