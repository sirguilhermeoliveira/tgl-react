import {
  Main,
  BodyLeft,
  BodyRight,
  NewBetLeft,
  NewBetRight,
  NewBetContainer,
  ChooseGame,
  LotoContainer,
  Loto,
  FillBet,
  BetsDescription,
  NumbersContainer,
  Numbers,
  ButtonContainer,
  CompleteGame,
  ClearGame,
  AddCart,
  AddCartRight,
  Cart,
  Bets,
  BetsTrashCan,
  BetsNumbers,
  BetsPrice,
  BetsName,
  BetsTotalContainer,
  BetsTotalLeft,
  BetsTotalRight,
  BetsTotalPrice,
  SaveButton,
  AllBets,
} from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faCartPlus,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
  return (
    <Main>
      <BodyLeft>
        <NewBetContainer>
          <NewBetLeft>new bet</NewBetLeft>
          <NewBetRight>for mega-sena</NewBetRight>
        </NewBetContainer>
        <ChooseGame>Choose a game</ChooseGame>
        <LotoContainer>
          <Loto>Lotofácil</Loto>
          <Loto>Mega-Sena</Loto>
          <Loto>Lotomania</Loto>
        </LotoContainer>
        <FillBet>Fill your bet</FillBet>
        <BetsDescription>
          Mark as many numbers as you want up to a maximum of 50. Win by hitting
          15, 16, 17,
          <br />
          18, 19, 20 or none of the 20 numbers drawn
        </BetsDescription>
        <NumbersContainer>
          <Numbers>01</Numbers>
          <Numbers>02</Numbers>
          <Numbers>03</Numbers>
          <Numbers>04</Numbers>
          <Numbers>05</Numbers>
          <Numbers>06</Numbers>
          <Numbers>07</Numbers>
          <Numbers>08</Numbers>
          <Numbers>09</Numbers>
        </NumbersContainer>
        <ButtonContainer>
          <CompleteGame>Complete game</CompleteGame>
          <ClearGame>Clear game</ClearGame>
          <AddCart>
            <AddCartRight>
              <FontAwesomeIcon icon={faCartPlus} />
            </AddCartRight>{' '}
            Add to cart
          </AddCart>
        </ButtonContainer>
      </BodyLeft>

      <BodyRight>
        <Cart>cart</Cart>
        <AllBets>
          <BetsTrashCan>
            <FontAwesomeIcon icon={faTrashAlt} />
          </BetsTrashCan>
          <Bets>
            <BetsNumbers>
              01,02,04,05,06,07,09,15,17,20,21,22,23,24,25
            </BetsNumbers>
            <BetsPrice>30/11/2020 - (R$ 2,50)</BetsPrice>
            <BetsName>Lotomania</BetsName>
          </Bets>
        </AllBets>
        <BetsTotalContainer>
          <BetsTotalLeft>cart </BetsTotalLeft>
          <BetsTotalRight>total:</BetsTotalRight>
          <BetsTotalPrice>R$ 7,00</BetsTotalPrice>
        </BetsTotalContainer>
        <SaveButton>
          Save <FontAwesomeIcon icon={faArrowRight} />
        </SaveButton>
      </BodyRight>
    </Main>
  );
};

export default Home;
