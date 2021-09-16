import { FormContainer } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { Input, LogIn } from '../styles';
import { useHistory, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Form: React.FC = () => {
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const submitHandler = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    const enteredPassword = passwordInputRef.current!.value;
    if (enteredPassword.length < 6) {
      toast.error('The username has to be more than 6 digits');
      return;
    }
    let token_url = query.get('token');
    console.log(token_url);
    let url = 'http://127.0.0.1:3333/passwords';

    axios
      .put(url, {
        token: token_url,
        password: enteredPassword,
      })
      .then((res: any) => {
        if (res.status === 200) {
          toast.success('Password changed.', {
            position: 'bottom-center',
            hideProgressBar: true,
          });

          setTimeout(() => {
            history.replace('/login');
          }, 3000);
        }
      })
      .catch((err: any) => {
        toast.error('Something is wrong with your new password.');
      });
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <ToastContainer />
      <div>
        <Input
          type='password'
          placeholder='Password'
          required
          ref={passwordInputRef}
        />
      </div>
      <button
        style={{ border: 'none', backgroundColor: 'white' }}
        type='submit'
      >
        <LogIn>
          Change Password <FontAwesomeIcon icon={faArrowRight} />
        </LogIn>
      </button>
    </FormContainer>
  );
};

export default Form;
