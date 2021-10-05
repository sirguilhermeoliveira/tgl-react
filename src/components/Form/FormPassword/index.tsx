import { FormContainer } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { Input, LogIn } from '../styles';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Form: React.FC = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  const submitHandler = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current!.value;

    let url = 'http://192.168.56.1:3333/passwords';

    axios
      .post(url, {
        email: enteredEmail,
        redirect_url: `http://192.168.56.1:3000/recoveryPassword/`,
      })
      .then((res: any) => {
        if (res.status === 200) {
          console.log(res);
          toast.success('Email send to:' + enteredEmail, {
            position: 'bottom-center',
            hideProgressBar: true,
          });
          emailInputRef.current!.value = '';
          setTimeout(() => {
            history.replace('/login');
          }, 3000);
        }
      })
      .catch((err: any) => {
        toast.error('Email doesnt exist on our database');
      });
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <ToastContainer />
      <div>
        <Input type='email' placeholder='Email' required ref={emailInputRef} />
      </div>
      <button
        style={{ border: 'none', backgroundColor: 'white' }}
        type='submit'
      >
        <LogIn>
          Send link <FontAwesomeIcon icon={faArrowRight} />
        </LogIn>
      </button>
    </FormContainer>
  );
};

export default Form;
