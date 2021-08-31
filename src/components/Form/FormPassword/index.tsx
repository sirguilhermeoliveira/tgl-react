import { FormContainer } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { Input, LogIn } from '../styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form: React.FC = () => {
  const emailInputRef: any = useRef();

  const submitHandler = (event: any) => {
    const enteredEmail = emailInputRef.current!.value;
    toast.success('Email send to: ' + enteredEmail, { autoClose: 3000 });
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
