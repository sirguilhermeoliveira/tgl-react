import GreatestApp from '../../components/GreatestApp/index';
import FormRecoveryPassword from '../../components/Form/FormRecoveryPassword/index';
import { ButtonLogin } from '../../components/Form/styles';
import {
  SpaceRight,
  SpaceLeftLoginRegister,
  Main,
} from '../../components/RegisterStyle/styles';

const RecoveryPassword: React.FC = () => {
  return (
    <Main>
      <SpaceRight>
        <GreatestApp />
      </SpaceRight>
      <SpaceLeftLoginRegister>
        <ButtonLogin>Registration</ButtonLogin>
        <FormRecoveryPassword />
      </SpaceLeftLoginRegister>
    </Main>
  );
};

export default RecoveryPassword;
