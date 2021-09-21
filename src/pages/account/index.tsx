import {
  AccountBorderDetails,
  AccountTitle,
  AccountTitleSub,
  AccountRow,
  AccountDetailModal,
  Main,
} from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Modal from 'react-modal';
import { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Account: React.FC = () => {
  const userId = useSelector((state: RootState) => state.auth.user_id);
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  let subtitle: any;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [usernameOrPassword, setusernameOrPassword] = useState('');

  function openModalUsername() {
    setusernameOrPassword('username');
    setIsOpen(true);
  }

  function openModalPassword() {
    setusernameOrPassword('password');
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
    setusernameOrPassword('');
  }

  const submitUsernameHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredUsername = usernameInputRef.current!.value;

    if (enteredUsername.length < 3) {
      toast.warn('Username must be 3 or more digits.');
      return;
    }
    let url = 'http://127.0.0.1:3333/users/' + userId;

    axios
      .put(url, {
        username: enteredUsername,
      })
      .then((res: any) => {
        if (res.status === 200) {
          toast.success('Username changed with sucess!!', {
            position: 'bottom-center',
            hideProgressBar: true,
          });
          closeModal();
          return;
        }
      })
      .catch((err: any) => {
        toast.error('Something is wrong.');
      });
  };

  const submitPasswordHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredPassword = passwordInputRef.current!.value;

    if (enteredPassword.length < 6) {
      toast.warn('Password must be 6 or more digits.');
      return;
    }
    let url = 'http://127.0.0.1:3333/users/' + userId;

    axios
      .put(url, {
        password: enteredPassword,
      })
      .then((res: any) => {
        if (res.status === 200) {
          toast.success('Password changed with sucess!!', {
            position: 'bottom-center',
            hideProgressBar: true,
          });
          closeModal();
          return;
        }
      })
      .catch((err: any) => {
        toast.error('Something is wrong.');
      });
  };

  return (
    <Main>
      <ToastContainer />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Modal'
      >
        <div
          style={{
            color: '#707070',
            fontSize: '15px',
            cursor: 'pointer',
          }}
          onClick={closeModal}
        >
          X
        </div>
        {usernameOrPassword === 'username' && (
          <div>
            <div
              style={{ color: 'red', fontSize: '20px', margin: '10px' }}
              ref={(_subtitle) => (subtitle = _subtitle)}
            >
              Change Username?
            </div>
            <div style={{ color: '#707070', fontWeight: 'bold' }}>
              Enter your new username
            </div>
            <form onSubmit={submitUsernameHandler}>
              <input
                placeholder='New Username'
                type='name'
                required
                ref={usernameInputRef}
              />
              <button
                style={{
                  border: 'none',
                  color: 'red',
                  padding: '3px',
                  cursor: 'pointer',
                }}
                type='submit'
                onClick={submitUsernameHandler}
              >
                Send
              </button>
            </form>
          </div>
        )}
        {usernameOrPassword === 'password' && (
          <div>
            <div
              style={{ color: 'red', fontSize: '20px', margin: '10px' }}
              ref={(_subtitle) => (subtitle = _subtitle)}
            >
              Change Password?
            </div>
            <div style={{ color: '#707070', fontWeight: 'bold' }}>
              Enter your new password
            </div>
            <form onSubmit={submitPasswordHandler}>
              <input
                placeholder='New Password'
                type='password'
                required
                ref={passwordInputRef}
              />
              <button
                style={{
                  border: 'none',
                  color: 'red',
                  padding: '3px',
                  cursor: 'pointer',
                }}
                type='submit'
                onClick={submitPasswordHandler}
              >
                Send
              </button>
            </form>
          </div>
        )}
      </Modal>
      <AccountBorderDetails>
        <AccountTitle>Edit Account</AccountTitle>
        <AccountTitleSub>This is your edit account area</AccountTitleSub>
        <AccountRow>
          <AccountDetailModal onClick={openModalUsername}>
            Click here to Edit your Username
          </AccountDetailModal>
          <AccountDetailModal onClick={openModalPassword}>
            Click here to Edit your Password
          </AccountDetailModal>
        </AccountRow>
      </AccountBorderDetails>
    </Main>
  );
};

export default Account;
