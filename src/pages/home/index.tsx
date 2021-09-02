import {
  BodyLeft,
  BodyRight,
  Main,
  RecentGamesDiv,
  Filters,
  Loto,
  RecentGamesContainer,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { types as gamesJson } from '../../database/games.json';
import { useState } from 'react';
import CartRecentGames from '../../components/CartRecentGames';
import { cartSaveActions } from '../../store/cartbet';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home: React.FC = () => {
  const [whichLoteriaIsVar, setWhichLoteriaIsVar] = useState('');
  const helperInfo = useSelector(
    (state: RootState) => state.filterCart.helperFilter
  );
  const dispatch = useDispatch<AppDispatch>();

  const changeGameColor = (event: any) => {
    console.log(whichLoteriaIsVar);
    if (helperInfo.length) {
      if (whichLoteriaIsVar === event.target.innerText) {
        dispatch(cartSaveActions.fillSave(helperInfo));
        setWhichLoteriaIsVar('');
        return;
      }
      dispatch(cartSaveActions.fillSave(helperInfo));
      const newId = event.target.id;
      const newGame = event.target.innerText;
      setWhichLoteriaIsVar(gamesJson[newId].type);
      const filter = helperInfo.filter((game) => game.game === newGame);
      dispatch(cartSaveActions.fillSave(filter));
    } else {
      toast.error('No games available');
    }
  };

  const getGames = gamesJson.map((item: any, index: any) => (
    <Loto
      className={whichLoteriaIsVar === item.type ? 'active' : ''}
      key={item.type}
      id={index}
      color={item.color}
      onClick={changeGameColor}
    >
      {item.type}
    </Loto>
  ));

  return (
    <Main>
      <ToastContainer />
      <BodyLeft>
        <RecentGamesContainer>
          <RecentGamesDiv>RECENT GAMES</RecentGamesDiv>
          <Filters>Filters</Filters>
          {getGames}
        </RecentGamesContainer>
        <CartRecentGames />
      </BodyLeft>
      <BodyRight>
        <Link
          style={{ textDecoration: 'none', color: '#B5C401' }}
          to='/newbets'
        >
          New Bet <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </BodyRight>
    </Main>
  );
};

export default Home;
