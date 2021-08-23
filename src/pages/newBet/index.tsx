import {
  Main,
  BodyLeft,
  BodyRight,
  NewBetLeft,
  NewBetRight,
  BetsContainer,
  NewBetContainer,
  ChooseGame,
  LotoContainer,
  Loto,
  FillBet,
  BetsDescription,
  BetsEmpty,
  NumbersContainer,
  Numbers,
  ButtonContainer,
  CompleteGame,
  ClearGame,
  AddCart,
  AddCartRight,
  ArrowIcon,
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
import { types as gamesJson } from '../../database/games.json';
import { useState } from 'react';
/*eslint-disable*/

const newBet: React.FC = () => {
  const [whichLoteriaIsVar, setWhichLoteriaIsVar] = useState(0);
  let totalNumbers: any = [];
  const [range, setRange] = useState(gamesJson[whichLoteriaIsVar].range);
  const [getDescription, setGetDescription] = useState(
    gamesJson[whichLoteriaIsVar].description
  );
  const [getFor, setGetFor] = useState(gamesJson[whichLoteriaIsVar].type);
  const numbersList = Array.from(Array(range).keys()).map((num) => num + 1);
  const [totalPrice, setTotalPrice] = useState(0);

  const [getCartTotal, setGetCartTotal] = useState(
    totalPrice.toFixed(2).replace('.', ',')
  );

  const changeGameColor = (event: any) => {
    const newGame = event.target.id;
    setWhichLoteriaIsVar(newGame);
    setGetDescription(gamesJson[newGame].description);
    setGetFor(gamesJson[newGame].type);
    setRange(gamesJson[newGame].range);
    let spliceRangeJSON = gamesJson[newGame].range;
    totalNumbers.splice(0, spliceRangeJSON);
  };

  const getGames = gamesJson.map((game: any, index: any) => (
    <Loto
      className={
        gamesJson[whichLoteriaIsVar].type === game.type ? 'active' : ''
      }
      key={game.type}
      id={index}
      color={game.color}
      onClick={changeGameColor}
    >
      {game.type}
    </Loto>
  ));

  const NumbersParent = (props: any) => {
    const [numbersColor, setNumbersColor] = useState('#ADC0C4');
    console.log(props.id);
    const changeButtonColor = () => {
      if (
        totalNumbers.length === gamesJson[whichLoteriaIsVar]['max-number'] &&
        numbersColor === '#ADC0C4'
      ) {
        return alert('This is the limit of numbers you can choose.');
      }
      if (numbersColor === '#ADC0C4') {
        setNumbersColor(gamesJson[whichLoteriaIsVar].color);
        totalNumbers.push(props.id);
      } else {
        setNumbersColor('#ADC0C4');
        let searchTotalNumbers = totalNumbers.indexOf(props!.id);
        totalNumbers.splice(searchTotalNumbers, 1);
      }
    };

    return (
      <Numbers
        style={{ backgroundColor: numbersColor }}
        onClick={changeButtonColor}
      >
        {props.children}
      </Numbers>
    );
  };

  const formatNumber = (number: number) => {
    if (number < 10) return '0' + number;
    return number;
  };

  return (
    <Main>
      <BodyLeft>
        <NewBetContainer>
          <NewBetLeft>new bet</NewBetLeft>
          <NewBetRight>for {getFor}</NewBetRight>
        </NewBetContainer>
        <ChooseGame>Choose a game</ChooseGame>
        {getGames}
        <LotoContainer></LotoContainer>
        <FillBet>Fill your bet</FillBet>
        <BetsDescription>{getDescription}</BetsDescription>
        <NumbersContainer>
          {numbersList.map((num) => (
            <NumbersParent key={num} id={num}>
              {formatNumber(num)}
            </NumbersParent>
          ))}
        </NumbersContainer>
        <ButtonContainer>
          <CompleteGame color={gamesJson[whichLoteriaIsVar].color}>
            Complete game
          </CompleteGame>
          <ClearGame color={gamesJson[whichLoteriaIsVar].color}>
            Clear Game
          </ClearGame>
          <AddCart color={gamesJson[whichLoteriaIsVar].color}>
            <AddCartRight>
              <FontAwesomeIcon icon={faCartPlus} />
            </AddCartRight>
            Add to cart
          </AddCart>
        </ButtonContainer>
      </BodyLeft>

      <BodyRight>
        <Cart>cart</Cart>
        <AllBets>
          <BetsEmpty>Empty Cart</BetsEmpty>
          <div>
            <BetsTrashCan>
              <FontAwesomeIcon icon={faTrashAlt} />
            </BetsTrashCan>
            <Bets>
              <BetsNumbers>
                01,02,04,05,06,07,09,15,17
                <br />
                ,20,21,22,23,24,25
              </BetsNumbers>
              <BetsContainer>
                <BetsName>Lotomania</BetsName>
                <BetsPrice>R$ 2,50</BetsPrice>
              </BetsContainer>
            </Bets>
          </div>
        </AllBets>
        <BetsTotalContainer>
          <BetsTotalLeft>cart</BetsTotalLeft>
          <BetsTotalRight>total:</BetsTotalRight>
          <BetsTotalPrice>R$ {getCartTotal}</BetsTotalPrice>
        </BetsTotalContainer>
        <SaveButton color={gamesJson[whichLoteriaIsVar].color}>
          Save
          <ArrowIcon>
            <FontAwesomeIcon icon={faArrowRight} />
          </ArrowIcon>
        </SaveButton>
      </BodyRight>
    </Main>
  );
};

export default newBet;
