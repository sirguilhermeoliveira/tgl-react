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

const RecentGames: React.FC = () => {
  return (
    <Main>
      <BodyLeft>
        <RecentGamesContainer>
          <RecentGamesDiv>RECENT GAMES</RecentGamesDiv>
          <Filters>Filters</Filters>
          <Loto>Lotofácil</Loto>
          <Loto>Mega-Sena</Loto>
          <Loto>Lotomania</Loto>
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
        <Bets>
          <BetsNumbers>
            01,02,04,05,06,07,09,15,17,20,21,22,23,24,25
          </BetsNumbers>
          <BetsPrice>30/11/2020 - (R$ 2,50)</BetsPrice>
          <BetsName>Lotomania</BetsName>
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
