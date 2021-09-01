import {
  HeaderTGL,
  HeaderTGLSub,
  HeaderItemContainer,
  HeaderItemAccount,
  HeaderItemLeave,
  HeaderUppercase,
  HeaderContainer,
  HeaderHome,
  Main,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { AppDispatch } from '../../store';

const Header: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();
  const alertMaintenance: any = () => {
    toast.info('This area is in Maintenance');
  };
  const Loggout: any = () => {
    dispatch(authActions.logout(''));
    alert('Logout success!');
    history.replace('/login');
  };
  return (
    <HeaderContainer>
      <ToastContainer />
      <Main>
        <HeaderTGL>
          <HeaderUppercase>
            tgl
            <HeaderTGLSub />
          </HeaderUppercase>
          {location.pathname !== '/home' && (
            <HeaderHome>
              {' '}
              <Link
                style={{ textDecoration: 'none', color: '#707070' }}
                to='/home'
              >
                Home
              </Link>
            </HeaderHome>
          )}
        </HeaderTGL>
        <HeaderItemContainer>
          <HeaderItemAccount onClick={alertMaintenance}>
            Account
          </HeaderItemAccount>
          <HeaderItemLeave onClick={Loggout}>
            Log out <FontAwesomeIcon icon={faArrowRight} />
          </HeaderItemLeave>
        </HeaderItemContainer>
      </Main>
    </HeaderContainer>
  );
};

export default Header;
