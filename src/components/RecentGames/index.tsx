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
import CartRecentGames from '../CartRecentGames';
import { useSelector } from 'react-redux';
import { cartSaveActions } from '../../store/cartbet';
import { useDispatch } from 'react-redux';
import type { AppDispatch, RootState } from '../../store';

const RecentGames: React.FC = () => {
  const [whichLoteriaIsVar, setWhichLoteriaIsVar]: any = useState('');
  const helperInfo = useSelector(
    (state: RootState) => state.filterCart.helperFilter
  );
  //const newGames: any = useSelector((state: any) => state.cartSave.recentGames);
  const dispatch = useDispatch<AppDispatch>();

  const changeGameColor = (event: any) => {
    if (helperInfo.length) {
      dispatch(cartSaveActions.filterRecentGames(helperInfo));
      const newId = event.target.id;
      const newGame = event.target.innerText;
      setWhichLoteriaIsVar(gamesJson[newId].type);
      const filter = helperInfo.filter((game: any) => game.game === newGame);
      dispatch(cartSaveActions.filterRecentGames(filter));
    } else {
      alert('No games available');
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

export default RecentGames;
