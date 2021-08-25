import {
  Main,
  BodyLeft,
  BodyRight,
  NewBetLeft,
  NewBetRight,
  BetsRange,
  BetsContainer,
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
  BetsEmpty,
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
  const [totalPrice, setTotalPrice]: any = useState(0);
  const [oldPrice, setOldPrice]: any = useState(0);
  const color = gamesJson[whichLoteriaIsVar].color;
  const [getDescription, setGetDescription] = useState(
    gamesJson[whichLoteriaIsVar].description
  );
  const [state, setState]: any = useState([]);
  const [getFor, setGetFor] = useState(gamesJson[whichLoteriaIsVar].type);

  const [range, setRange] = useState(gamesJson[whichLoteriaIsVar].range);
  const numbersList = Array.from(Array(range).keys()).map((num) => num + 1);

  const changeGameColor = (event: any) => {
    const newGame = event.target.id;
    setWhichLoteriaIsVar(newGame);
    setGetDescription(gamesJson[newGame].description);
    setGetFor(gamesJson[newGame].type);
    setRange(gamesJson[newGame].range);
    setTotalNumbers([]);
  };

  const formatNumber = (number: number) => {
    if (number < 10) return '0' + number;
    return number;
  };

  const formatNumberCart = (number: number) => {
    return number.toString();
  };

  const formatNumberCartTotal = (number: number) => {
    return number.toFixed(2).replace('.', ',');
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

  const completeGame = (event: any) => {
    let randomNumber = 1;
    let maxNumberJSON = gamesJson[whichLoteriaIsVar]['max-number'];
    let helperTotalNumbers = totalNumbers;
    if (maxNumberJSON === helperTotalNumbers.length) {
      helperTotalNumbers = [];
    }
    for (let i = 1; helperTotalNumbers.length <= maxNumberJSON - 1; i++) {
      do {
        randomNumber = Math.floor(
          Math.random() * gamesJson[whichLoteriaIsVar].range + 1
        );
      } while (helperTotalNumbers.indexOf(randomNumber) !== -1);
      helperTotalNumbers.push(randomNumber);
      setTotalNumbers([...helperTotalNumbers]);
    }
  };

  function deleteItemCart(event: any) {
    setTotalPrice(totalPrice - oldPrice);
    let searchTotalNumbers = state.indexOf(event.target.id);
    state.splice(searchTotalNumbers, 1);
    setState([...state]);
  }

  function addCart() {
    if (totalNumbers.length !== gamesJson[whichLoteriaIsVar]['max-number']) {
      alert(
        'Error, you cant add to cart without all ' +
          gamesJson[whichLoteriaIsVar]['max-number'] +
          ' numbers selected.'
      );
      return;
    }
    state.push([totalNumbers]);
    setState([...state]);
    setOldPrice(totalPrice);
    setTotalPrice(totalPrice + gamesJson[whichLoteriaIsVar].price);
  }

  const saveCart = () => {
    if (totalPrice < 30) {
      alert('The minimum in cart has to be R$ 30,00');
    } else {
      alert('REDUX');
    }
  };

  const clearGame = () => {
    setTotalNumbers([]);
  };

  const [totalNumbers, setTotalNumbers]: any = useState([]);

  const changeButtonColor = (event: any) => {
    if (
      totalNumbers.length === gamesJson[whichLoteriaIsVar]['max-number'] &&
      totalNumbers.indexOf(Number(event.target.id)) === -1
    ) {
      return alert('This is the limit of numbers you can choose.');
    }
    if (totalNumbers.indexOf(Number(event.target.id)) === -1) {
      totalNumbers.push(Number(event.target.id));
    } else {
      totalNumbers.splice(totalNumbers.indexOf(Number(event.target.id)), 1);
    }
    setTotalNumbers([...totalNumbers]);
  };

  const BetsParent = (props: any) => {
    const gameColor = gamesJson[whichLoteriaIsVar].color;
    const gameType = gamesJson[whichLoteriaIsVar].type;
    const gamePrice = gamesJson[whichLoteriaIsVar].price;

    return (
      <BetsRange>
        <BetsTrashCan onClick={deleteItemCart} color={gameColor}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </BetsTrashCan>
        <Bets color={gameColor}>
          <BetsNumbers>{formatNumberCart(props.children)}</BetsNumbers>
          <BetsContainer>
            <BetsName color={gameColor}>{gameType}</BetsName>
            <BetsPrice>R$ {formatNumberCartTotal(gamePrice)}</BetsPrice>
          </BetsContainer>
        </Bets>
      </BetsRange>
    );
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
            <Numbers
              onClick={changeButtonColor}
              id={num.toString()}
              className={
                totalNumbers.indexOf(num) === -1 ? 'desactive' : 'active'
              }
              color={color}
              key={num}
            >
              {formatNumber(num)}
            </Numbers>
          ))}
        </NumbersContainer>
        <ButtonContainer>
          <CompleteGame
            onClick={completeGame}
            color={gamesJson[whichLoteriaIsVar].color}
          >
            Complete game
          </CompleteGame>
          <ClearGame
            onClick={clearGame}
            color={gamesJson[whichLoteriaIsVar].color}
          >
            Clear Game
          </ClearGame>
          <AddCart onClick={addCart} color={gamesJson[whichLoteriaIsVar].color}>
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
          {state.length === 0 ? (
            <BetsEmpty>Empty Cart</BetsEmpty>
          ) : (
            state.map((item: any, index: any) => (
              <BetsParent key={`${item.id}${index}`}>{item}</BetsParent>
            ))
          )}
        </AllBets>
        <BetsTotalContainer>
          <BetsTotalLeft>cart</BetsTotalLeft>
          <BetsTotalRight>total:</BetsTotalRight>
          <BetsTotalPrice>
            R$ {formatNumberCartTotal(totalPrice)}
          </BetsTotalPrice>
        </BetsTotalContainer>
        <SaveButton
          onClick={saveCart}
          color={gamesJson[whichLoteriaIsVar].color}
        >
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
