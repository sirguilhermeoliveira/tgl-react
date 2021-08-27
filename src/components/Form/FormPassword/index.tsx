import { FormContainer } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { Input } from '../styles';
import { LogIn } from './styles';

const Form: React.FC = () => {
  const emailInputRef: any = useRef();

  const submitHandler = (event: any) => {
    const enteredEmail = emailInputRef.current!.value;
    alert('Email send to: ' + enteredEmail);
  };

  return (
    <FormContainer>
      <form onSubmit={submitHandler}>
        <div>
          <Input
            type='email'
            placeholder='Email'
            required
            ref={emailInputRef}
          />
        </div>
        <button
          style={{ border: 'none', backgroundColor: 'white' }}
          type='submit'
        >
          <LogIn>
            Send link <FontAwesomeIcon icon={faArrowRight} />
          </LogIn>
        </button>
      </form>
    </FormContainer>
  );
};

export default Form;
