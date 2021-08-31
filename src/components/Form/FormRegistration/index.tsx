import { FormContainer } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, LogIn } from '../styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form: React.FC = () => {
  const nameInputRef: any = useRef();
  const emailInputRef: any = useRef();
  const passwordInputRef: any = useRef();
  const history = useHistory();

  const submitHandler = (event: any) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;
    if (enteredPassword.length < 6) {
      toast.warn('The password has to be more than 6 digits', {
        autoClose: 3000,
      });
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
          toast.error('Authentication failed', { autoClose: 3000 });
        }
      })
      .then((data) => {
        emailInputRef.current!.value = '';
        passwordInputRef.current!.value = '';
        nameInputRef.current!.value = '';
        toast.success('Congratulations, you are registred!', {
          autoClose: 3000,
        });
        setTimeout(() => {
          history.replace('/login');
        }, 3000);
      })
      .catch((err) => {
        toast.error(err, { autoClose: 3000 });
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
