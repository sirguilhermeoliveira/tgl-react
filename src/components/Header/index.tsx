import {
  HeaderTGL,
  HeaderTGLSub,
  HeaderItemContainer,
  HeaderItemAccount,
  HeaderItemLeave,
  HeaderHome,
  Main,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  return (
    <Main>
      <HeaderTGL>
        <div>
          TGL
          <HeaderTGLSub />
        </div>
        <HeaderHome>Home</HeaderHome>
      </HeaderTGL>
      <HeaderItemContainer>
        <HeaderItemAccount>Account</HeaderItemAccount>
        <HeaderItemLeave>
          Sair <FontAwesomeIcon icon={faArrowRight} />
        </HeaderItemLeave>
      </HeaderItemContainer>
    </Main>
  );
};

export default Header;
