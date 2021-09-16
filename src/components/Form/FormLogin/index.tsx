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
import axios from 'axios';

const Form: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;

    if (enteredPassword.length < 6) {
      toast.warn('Password must be 6 or more digits.');
      return;
    }
    let url = 'http://127.0.0.1:3333/login';

    axios
      .post(url, {
        email: enteredEmail,
        password: enteredPassword,
      })
      .then((res: any) => {
        if (res.status === 200) {
          if (res.data.token) {
            toast.success('Logged In with sucess!', {
              position: 'bottom-center',
              hideProgressBar: true,
            });
            setTimeout(() => {
              console.log(res.data.token);
              console.log(res.data.user_id);
              dispatch(authActions.login(res.data.token));
              dispatch(authActions.loginEmail(res.data.user_id));
            }, 1000);
            return;
          }
        }
      })
      .catch((err: any) => {
        toast.error('Email or Password wrong.');
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
