import { FormContainer } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { Input, LogIn } from '../styles';
import { useHistory } from 'react-router-dom';

const Form: React.FC = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  const submitHandler = (event: any) => {
    const enteredEmail = emailInputRef.current!.value;
    alert('Email send to: ' + enteredEmail);
    history.replace('/login');
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <div>
        <Input type='email' placeholder='Email' required ref={emailInputRef} />
      </div>
      <button
        style={{ border: 'none', backgroundColor: 'white' }}
        type='submit'
      >
        <LogIn>
          Send link <FontAwesomeIcon icon={faArrowRight} />
        </LogIn>
      </button>
    </FormContainer>
  );
};

export default Form;
