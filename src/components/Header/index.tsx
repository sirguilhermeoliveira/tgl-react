import { HeaderTGL, HeaderTGLSub, HeaderItem, Main } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  return (
    <Main>
      <HeaderTGL>
        TGL
        <HeaderTGLSub />
      </HeaderTGL>
      <HeaderItem>Account</HeaderItem>
      <HeaderItem>
        Sair <FontAwesomeIcon icon={faArrowRight} />
      </HeaderItem>
    </Main>
  );
};

export default Header;
