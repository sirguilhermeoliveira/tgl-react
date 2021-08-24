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
import { setTimeout } from 'timers';
/*eslint-disable*/

const newBet: React.FC = () => {
  const [whichLoteriaIsVar, setWhichLoteriaIsVar] = useState(0);
  const [totalPrice, setTotalPrice]: any = useState(0);
  let totalNumbers: any = [];
  const [range, setRange] = useState(gamesJson[whichLoteriaIsVar].range);
  const [getDescription, setGetDescription] = useState(
    gamesJson[whichLoteriaIsVar].description
  );
  const [getFor, setGetFor] = useState(gamesJson[whichLoteriaIsVar].type);

  const numbersList = Array.from(Array(range).keys()).map((num) => num + 1);
  let oldValue = 0;
  const [getCartTotal, setGetCartTotal] = useState(oldValue);

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

  const completeGame = (event: any) => {
    let randomNumber = 1;
    let maxNumberJSON = gamesJson[whichLoteriaIsVar]['max-number'];

    if (maxNumberJSON === totalNumbers.length) {
      clearGame();
    } else {
      for (let i = 1; totalNumbers.length <= maxNumberJSON - 1; i++) {
        do {
          randomNumber = Math.floor(
            Math.random() * gamesJson[whichLoteriaIsVar].range + 1
          );
        } while (totalNumbers.indexOf(randomNumber) !== -1);
        totalNumbers.push(randomNumber);
      }
    }
  };

  function deleteItemCart(event: any) {
    //  console.log(typeof event);
    setTotalPrice(totalPrice - event.target.id);
    let item = event.target.closest('#div-01');
    item = item.closest('#div-parent');
    item.remove(event.target);
  }

  function addCart(event: any) {
    if (totalNumbers.length !== gamesJson[whichLoteriaIsVar]['max-number']) {
      alert(
        'Error, you cant add to cart without all ' +
          gamesJson[whichLoteriaIsVar]['max-number'] +
          ' numbers selected.'
      );
      return;
    }
    let priceHelper = gamesJson[whichLoteriaIsVar].price.toString();
    setState([
      ...state,
      <div id='div-01' key={'itemCart' + event.target.id}>
        <BetsTrashCan
          key={'itemCartTrash' + event.target.id}
          onClick={deleteItemCart}
          id={priceHelper}
          color={gamesJson[whichLoteriaIsVar].color}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </BetsTrashCan>
        <Bets
          key={'itemCartBets' + event.target.id}
          color={gamesJson[whichLoteriaIsVar].color}
        >
          <BetsNumbers key={'itemCartNumbers' + event.target.id}>
            {formatNumberCart(totalNumbers)}
          </BetsNumbers>
          <BetsContainer key={'itemCartDetails' + event.target.id}>
            <BetsName
              key={'itemCartNameColor' + event.target.id}
              color={gamesJson[whichLoteriaIsVar].color}
            >
              {gamesJson[whichLoteriaIsVar].type}
            </BetsName>
            <BetsPrice key={'itemCartPrice' + event.target.id}>
              R$ {gamesJson[whichLoteriaIsVar].price}
            </BetsPrice>
          </BetsContainer>
        </Bets>
      </div>,
    ]);
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
    setRange(0);
    let spliceRangeJSON = gamesJson[whichLoteriaIsVar].range;
    totalNumbers.splice(0, spliceRangeJSON);
    setTimeout(() => {
      setRange(spliceRangeJSON);
    }, 0);
  };

  const NumbersParent = (props: any) => {
    const [numbersColor, setNumbersColor] = useState('#ADC0C4');
    const changeButtonColor = (event: any) => {
      if (
        totalNumbers.length === gamesJson[whichLoteriaIsVar]['max-number'] &&
        numbersColor === '#ADC0C4'
      ) {
        return alert('This is the limit of numbers you can choose.');
      }
      if (numbersColor === '#ADC0C4') {
        totalNumbers.push(event.target.id);
        setNumbersColor(gamesJson[whichLoteriaIsVar].color);
      } else {
        setNumbersColor('#ADC0C4');
        let searchTotalNumbers = totalNumbers.indexOf(event.target.id);
        totalNumbers.splice(searchTotalNumbers, 1);
      }
    };
    return (
      <Numbers onClick={changeButtonColor} color={numbersColor} id={props.id}>
        {props.children}
      </Numbers>
    );
  };

  const formatNumber = (number: number) => {
    if (number < 10) return '0' + number;
    return number;
  };

  const formatNumberCart = (number: number) => {
    return totalNumbers.toString();
  };

  const formatNumberCartTotal = (number: number) => {
    return totalPrice.toFixed(2).replace('.', ',');
  };

  const [state, setState]: any = useState([]);
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
            state.map((item: any) => (
              <div key={item} id={'div-parent'}>
                {item}
              </div>
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
