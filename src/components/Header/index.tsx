import {
  HeaderTGL,
  HeaderTGLSub,
  HeaderItemContainer,
  HeaderItemAccount,
  HeaderItemLeave,
  HeaderUppercase,
  HeaderBorder,
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

const Header: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const alertMaintenance: any = () => {
    toast.info('This area is in Maintenance', { autoClose: 3000 });
  };
  const Loggout: any = () => {
    console.log(location);
    dispatch(authActions.logout(''));
    toast.success('Logout success!', { autoClose: 3000 });
    history.replace('/login');
  };
  return (
    <HeaderBorder>
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
            Sair <FontAwesomeIcon icon={faArrowRight} />
          </HeaderItemLeave>
        </HeaderItemContainer>
      </Main>
    </HeaderBorder>
  );
};

export default Header;
