import { Input, ForgetPassword, LogIn } from './styles';
import { FormContainer } from '../Form/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Form: React.FC = () => {
  return (
    <FormContainer>
      <Input>Email</Input>
      <Input>Password</Input>
      <ForgetPassword>I forget my password</ForgetPassword>
      <LogIn>
        Log In <FontAwesomeIcon icon={faArrowRight} />
      </LogIn>
    </FormContainer>
  );
};

export default Form;
