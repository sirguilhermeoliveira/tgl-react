import { ForgetPassword } from './styles';
import { Input, LogIn, FormContainer } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import type { AppDispatch } from '../../../store';
import { authActions } from '../../../store/auth';
import { useDispatch } from 'react-redux';

const Form: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: any) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;

    if (enteredPassword.length < 6) {
      toast.warn('Password must be 6 or more digits.');
      return;
    }
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCeLbZ9hIaeLGDQn8mkdpPYTITSuaYihFg';
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
        }
      })
      .then((data) => {
        if (data.idToken) {
          alert('Logged In with sucess!');
          dispatch(authActions.login(data.idToken));
          return;
        }
      })
      .catch((err) => {
        alert('Email or Password wrong.');
      });
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <ToastContainer />
      <Input type='email' placeholder='Email' required ref={emailInputRef} />
      <Input
        placeholder='Password'
        type='password'
        required
        ref={passwordInputRef}
      />
      <Link style={{ textDecoration: 'none' }} to='/resetPassword'>
        <ForgetPassword>I forget my password</ForgetPassword>
      </Link>
      <button
        style={{ border: 'none', backgroundColor: 'white' }}
        type='submit'
      >
        <LogIn>
          Log In <FontAwesomeIcon icon={faArrowRight} />
        </LogIn>
      </button>
    </FormContainer>
  );
};

export default Form;
