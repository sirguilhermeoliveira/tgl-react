import { Input, LogIn } from './styles';
import { FormContainer } from '../Form/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Form: React.FC = () => {
  return (
    <FormContainer>
      <Input>Name</Input>
      <Input>Password</Input>
      <Input>Password</Input>
      <LogIn>
        Register <FontAwesomeIcon icon={faArrowRight} />
      </LogIn>
    </FormContainer>
  );
};

export default Form;
