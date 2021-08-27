import { FormContainer } from '../Form/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Input } from '../Input/styles';
import { LogIn } from './styles';

const Form: React.FC = () => {
  const nameInputRef: any = useRef();
  const emailInputRef: any = useRef();
  const passwordInputRef: any = useRef();
  const history = useHistory();

  const submitHandler = (event: any) => {
    event.preventDefault();
    const enteredName = nameInputRef.current!.value;
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
        name: enteredName,
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
            let errorMessage = 'Registration failed!';
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        emailInputRef.current!.value = '';
        passwordInputRef.current!.value = '';
        nameInputRef.current!.value = '';
        alert('Congratulations, you are registred!');
        history.replace('/login');
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <form onSubmit={submitHandler}>
        <div>
          <Input type='name' placeholder='Name' required ref={nameInputRef} />
        </div>
        <div>
          <Input
            type='email'
            placeholder='Email'
            required
            ref={emailInputRef}
          />
        </div>
        <div>
          <Input
            placeholder='Password'
            type='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <button
          style={{ border: 'none', backgroundColor: 'white' }}
          type='submit'
        >
          <LogIn>
            Register <FontAwesomeIcon icon={faArrowRight} />
          </LogIn>
        </button>
      </form>
    </FormContainer>
  );
};

export default Form;
