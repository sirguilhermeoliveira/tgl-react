import {
  HeaderTGL,
  HeaderTGLSub,
  HeaderItemContainer,
  HeaderItemAccount,
  HeaderItemLeave,
  HeaderUppercase,
  HeaderHome,
  Main,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  return (
    <Main>
      <HeaderTGL>
        <HeaderUppercase>
          tgl
          <HeaderTGLSub />
        </HeaderUppercase>
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
