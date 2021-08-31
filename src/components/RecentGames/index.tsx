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

const RecentGames: React.FC = () => {
  const [whichLoteriaIsVar, setWhichLoteriaIsVar]: any = useState('');
  const helperInfo: any = useSelector(
    (state: any) => state.filterCart.helperFilter
  );
  const dispatch = useDispatch();

  const changeGameColor = (event: any) => {
    dispatch(cartSaveActions.filterRecentGames(helperInfo));
    const newId = event.target.id;
    const newGame = event.target.innerText;
    setWhichLoteriaIsVar(gamesJson[newId].type);
    const filter = helperInfo.filter((game: any) => game.gameAdded === newGame);
    dispatch(cartSaveActions.filterRecentGames(filter));
    console.log(helperInfo);
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
