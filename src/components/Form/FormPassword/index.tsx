import { FormContainer } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { Input, LogIn } from '../styles';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form: React.FC = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  const submitHandler = (event: React.FormEvent<HTMLElement>) => {
    const enteredEmail = emailInputRef.current!.value;
    toast.success('Email send to: ' + enteredEmail, {
      position: 'bottom-center',
      hideProgressBar: true,
    });
    setTimeout(() => {
      history.replace('/login');
    }, 1000);
    return;
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <ToastContainer />
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
