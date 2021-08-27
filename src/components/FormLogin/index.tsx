import { ForgetPassword } from './styles';
import { Input } from '../Input/styles';
import { FormContainer } from '../Form/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { LogIn } from './styles';
import { useHistory } from 'react-router-dom';

const Form: React.FC = () => {
  const emailInputRef: any = useRef();
  const passwordInputRef: any = useRef();
  const history = useHistory();

  const submitHandler = (event: any) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;

    if (enteredPassword.length < 6) {
      alert('Password must be 6 or more digits.');
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
            let errorMessage = 'Login failed!';
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        // dispatch
        console.log(data);
        console.log(data.idToken);
        alert('Congratulations, you are logged in!');
        history.replace('/home');
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <FormContainer>
      <form onSubmit={submitHandler}>
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
      </form>
    </FormContainer>
  );
};

export default Form;
