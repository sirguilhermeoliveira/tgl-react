import { ForgetPassword } from './styles';
import { Input, LogIn } from '../styles';
import { FormContainer } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../store/auth';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const emailInputRef: any = useRef();
  const passwordInputRef: any = useRef();
  const submitHandler = (event: any) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;

    if (enteredPassword.length < 6) {
      toast.warn('Password must be 6 or more digits.', { autoClose: 3000 });
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
        } else {
          return res.json().then((data) => {
            toast.error('Login failed!', { autoClose: 3000 });
          });
        }
      })
      .then((data) => {
        toast.success('Congratulations, you are logged in!', {
          autoClose: 3000,
        });
        setTimeout(() => {
          dispatch(authActions.login(data.idToken));
        }, 3000);
      })
      .catch((err) => {
        toast.error(err, { autoClose: 3000 });
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
