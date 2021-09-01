import { Input, LogIn, FormContainer } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form: React.FC = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;
    if (enteredPassword.length < 6) {
      toast.error('The password has to be more than 6 digits');
      return;
    }
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCeLbZ9hIaeLGDQn8mkdpPYTITSuaYihFg';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          toast.error('Email already exists in our database.');
        }
      })
      .then((data) => {
        if (data) {
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
          return;
        }
      })
      .catch((err) => {
        toast.error('Error in registration:' + err);
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
