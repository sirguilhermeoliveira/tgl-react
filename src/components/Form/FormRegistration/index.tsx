import { Input, LogIn, FormContainer } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Form: React.FC = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current!.value;
    const enteredEmail = emailInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;
    if (enteredUsername.length < 3) {
      toast.error('The username has to be more than 3 digits');
      return;
    }
    if (enteredPassword.length < 6) {
      toast.error('The password has to be more than 6 digits');
      return;
    }

    let url = 'http://127.0.0.1:3333/users';

    axios
      .post(url, {
        username: enteredUsername,
        email: enteredEmail,
        password: enteredPassword,
      })
      .then((res: any) => {
        emailInputRef.current!.value = '';
        passwordInputRef.current!.value = '';
        nameInputRef.current!.value = '';
        toast.success('Congratulations, you are registred!', {
          position: 'bottom-center',
          hideProgressBar: true,
        });
        setTimeout(() => {
          history.replace('/login');
        }, 1000);
      })
      .catch((err: any) => {
        toast.error('Email already exists on our database');
      });
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <ToastContainer />
      <Input type='name' placeholder='Name' required ref={nameInputRef} />
      <Input type='email' placeholder='Email' required ref={emailInputRef} />
      <Input
        placeholder='Password'
        type='password'
        required
        ref={passwordInputRef}
      />
      <button
        style={{ border: 'none', backgroundColor: 'white' }}
        type='submit'
      >
        <LogIn>
          Register <FontAwesomeIcon icon={faArrowRight} />
        </LogIn>
      </button>
    </FormContainer>
  );
};

export default Form;
