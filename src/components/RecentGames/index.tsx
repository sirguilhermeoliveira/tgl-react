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
  const cartInfo: any = useSelector((state: any) => state.cartSave.recentGames);
  const dispatch = useDispatch();

  const changeGameColor = (event: any) => {
    if (cartInfo.length >= 1) {
      const newId = event.target.id;
      setWhichLoteriaIsVar(gamesJson[newId].type);
      const newGame = event.target.innerText;
      const filter = cartInfo.filter((game: any) => game.gameAdded === newGame);
      dispatch(cartSaveActions.fillSave(filter));
    } else {
      alert('Cant use filter without games');
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
