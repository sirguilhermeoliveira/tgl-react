import { FormContainer } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, LogIn } from '../styles';

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
      alert('The password has to be more than 6 digits');
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
          alert('Email already exists in our database.');
        }
      })
      .then((data) => {
        if (data) {
          emailInputRef.current!.value = '';
          passwordInputRef.current!.value = '';
          nameInputRef.current!.value = '';
          alert('Congratulations, you are registred!');
          history.replace('/login');
        }
      })
      .catch((err) => {
        alert('Error in registration:' + err);
      });
  };

  return (
    <FormContainer onSubmit={submitHandler}>
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
