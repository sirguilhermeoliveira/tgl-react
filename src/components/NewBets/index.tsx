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
import { useDispatch } from 'react-redux';
import {
  faArrowRight,
  faCartPlus,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { types as gamesJson } from '../../database/games.json';
import { useState } from 'react';
import { recentGamesActions } from '../../store/recentgames';

/*eslint-disable*/

const newBet: React.FC = () => {
  const dispatch = useDispatch();
  const [whichLoteriaIsVar, setWhichLoteriaIsVar] = useState(0);
  const [totalPrice, setTotalPrice]: any = useState(0);
  const [oldPrice, setOldPrice]: any = useState(0);
  const color = gamesJson[whichLoteriaIsVar].color;
  const [getDescription, setGetDescription] = useState(
    gamesJson[whichLoteriaIsVar].description
  );
  const [allGames, setAllGames]: any = useState([]);
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

  const completeGame = () => {
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
    setAllGames([...allGames]);
    let searchTotalPrice = event.target.id;
    setTotalPrice(totalPrice - searchTotalPrice);
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
    setAllGames([
      ...allGames,
      <div id='div-01' key={allGames.id}>
        <BetsTrashCan
          key={'itemCartTrash'}
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
    setOldPrice(totalPrice);
    setTotalPrice(totalPrice + gamesJson[whichLoteriaIsVar].price);
  }

  const saveCart = () => {
    if (totalPrice < 1) {
      alert('The minimum in cart has to be R$ 30,00');
    } else {
      console.log(totalNumbers);
      dispatch(recentGamesActions.games([...totalNumbers]));
      /*     alert('Games send to recent games.');
      setAllGames([]); */
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
      <div>
        <BodyRight>
          <Cart>cart</Cart>
          <AllBets>
            {allGames.length === 0 ? (
              <BetsEmpty>Empty Cart</BetsEmpty>
            ) : (
              allGames.map((item: any, index: any) => (
                <BetsRange id='div-02' key={index}>
                  {item}
                </BetsRange>
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
      </div>
    </Main>
  );
};

export default newBet;
