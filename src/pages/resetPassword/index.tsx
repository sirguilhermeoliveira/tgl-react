import GreatestApp from '../../components/GreatestApp/index';
import FormPassword from '../../components/Form/FormPassword/index';
import { ButtonLogin } from '../../components/Form/styles';
import {
  SpaceRight,
  SpaceLeftResetPassword,
  Main,
} from '../../components/RegisterStyle/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ResetPassword: React.FC = () => {
  return (
    <Main>
      <SpaceRight>
        <GreatestApp />
      </SpaceRight>
      <SpaceLeftResetPassword>
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
      </SpaceLeftResetPassword>
    </Main>
  );
};

export default ResetPassword;
