import {
  BodyLeft,
  BodyRight,
  Main,
  RecentGamesDiv,
  Filters,
  Loto,
  Bets,
  BetsNumbers,
  RecentGamesContainer,
  BetsPrice,
  BetsName,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { types as gamesJson } from '../../database/games.json';
import { useState } from 'react';

const RecentGames: React.FC = () => {
  const [whichLoteriaIsVar, setWhichLoteriaIsVar] = useState('');

  const changeGameColor = (event: any) => {
    const newGame = event.target.id;
    setWhichLoteriaIsVar(gamesJson[newGame].type);
    //aqui vai ativar o filter
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
        <Bets>
          <BetsNumbers>
            01,02,04,05,06,07,09,15,17,20,21,22,23,24,25
          </BetsNumbers>
          <BetsPrice>30/11/2020 - (R$ 2,50)</BetsPrice>
          <BetsName>Lotofácil</BetsName>
        </Bets>
        <Bets>
          <BetsNumbers>
            01,02,04,05,06,07,09,15,17,20,21,22,23,24,25
          </BetsNumbers>
          <BetsPrice>30/11/2020 - (R$ 2,50)</BetsPrice>
          <BetsName>Mega-Sena</BetsName>
        </Bets>
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
