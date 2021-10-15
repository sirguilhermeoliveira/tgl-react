import {
  Main,
  BodyLeft,
  BodyRight,
  NewBetLeft,
  NewBetRight,
  NewBetContainer,
  ChooseGame,
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
  BetsTotalContainer,
  BetsTotalLeft,
  BetsTotalRight,
  BetsTotalPrice,
  SaveButton,
  AllBets,
} from './styles';
import { formatNumber, formatNumberCartTotal } from '../../utils/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import CartBet from '../../components/CartBet';
import { useState, useEffect } from 'react';
import { cartActions } from '../../store/cart';
import type { AppDispatch, RootState } from '../../store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const NewBet: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [gamesJson, setGamesJson]: any = useState([]);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const allBets = useSelector((state: RootState) => state.cart.games);
  const [whichLoteriaIsVar, setWhichLoteriaIsVar] = useState<any>();
  const user_id = useSelector((state: RootState) => state.auth.user_id);
  const [getDescription, setGetDescription] = useState();
  const [color, setColor] = useState();
  const [getFor, setGetFor] = useState();
  const [range, setRange] = useState();
  const [getallTheGames, setallTheGames]: any = useState([]);
  const numbersList = Array.from(Array(range).keys()).map((num) => num + 1);

  const changeGameColor = (id_game: number) => {
    const newGame = id_game - 1;
    setWhichLoteriaIsVar(newGame + 1);
    setGetDescription(gamesJson[newGame].description);
    setGetFor(gamesJson[newGame].type);
    setRange(gamesJson[newGame].range);
    setColor(gamesJson[newGame].color);
    setTotalNumbers([]);
  };

  useEffect(() => {
    let url = 'http://192.168.56.1:3333/games';
    axios
      .get(url)
      .then((res: any) => {
        const gamesHelper = res.data;
        setGamesJson(gamesHelper);
        setallTheGames(gamesHelper.reverse());
        changeGameColor(1);
      })
      .catch((err: any) => {
        console.log(err);
        return;
      });
  });

  const getGames = getallTheGames.map((item: any, index: any) => (
    <Loto
      className={getFor === item.type ? 'active' : ''}
      key={item.type}
      id={index}
      color={item.color}
      onClick={changeGameColor.bind(null, item.id, item.type)}
    >
      {item.type}
    </Loto>
  ));

  const completeGame = () => {
    let randomNumber = 1;
    let maxNumberJSON = Number(gamesJson[whichLoteriaIsVar - 1].max_number);
    let helperTotalNumbers = totalNumbers;
    if (maxNumberJSON === helperTotalNumbers.length) {
      helperTotalNumbers = [];
    }
    for (let i = 1; helperTotalNumbers.length <= maxNumberJSON - 1; i++) {
      do {
        randomNumber = Math.floor(
          Math.floor(Math.random() * gamesJson[whichLoteriaIsVar - 1].range) + 1
        );
      } while (helperTotalNumbers.indexOf(randomNumber) !== -1);
      helperTotalNumbers.push(randomNumber);
      setTotalNumbers([...helperTotalNumbers]);
    }
  };

  const addCart = () => {
    if (totalNumbers.length !== gamesJson[whichLoteriaIsVar - 1].max_number) {
      toast.error(
        'Error, you cant add to cart without all ' +
          gamesJson[whichLoteriaIsVar].max_number +
          ' numbers selected.'
      );
      return;
    }
    dispatch(
      cartActions.addGame({
        id: Math.random(),
        bet: totalNumbers,
        game: gamesJson[whichLoteriaIsVar - 1].type,
        game_id: Number(whichLoteriaIsVar) - 1,
        price: Number(gamesJson[whichLoteriaIsVar - 1].price),
        color: gamesJson[whichLoteriaIsVar - 1].color,
        date: new Intl.DateTimeFormat('pt-BR').format(new Date()),
      })
    );
    clearGame();
    toast.success('New Game Added');
  };

  function saveCart() {
    let bets: any = [];
    for (let i = 0; i < allBets.length; i++) {
      bets.push({
        game_id: allBets[i].game_id + 1,
        game_numbers: allBets[i].bet.toString(),
      });
    }
    if (totalPrice < 30) {
      toast.warn('The minimum in cart has to be R$ 30,00');
    } else {
      let url = 'http://192.168.56.1:3333/users/' + user_id + '/bets';
      axios
        .post(url, {
          bets,
        })
        .then((res: any) => {
          dispatch(cartActions.removeAllGames([]));
          toast.success('Bet Saved!!', {
            position: 'bottom-center',
            hideProgressBar: true,
          });
        })
        .catch((err: any) => {
          toast.error('Something is Wrong:' + err);
        });
    }
  }

  const clearGame = () => {
    setTotalNumbers([]);
  };

  const [totalNumbers, setTotalNumbers] = useState([] as Number[]);

  const changeButtonColor = (id_game: number) => {
    if (
      totalNumbers.length === gamesJson[whichLoteriaIsVar - 1].max_number &&
      totalNumbers.indexOf(id_game) === -1
    ) {
      return toast.warn('This is the limit of numbers you can choose.');
    }
    if (totalNumbers.indexOf(id_game) === -1) {
      totalNumbers.push(id_game);
      setTotalNumbers([...totalNumbers]);
    } else {
      totalNumbers.splice(totalNumbers.indexOf(Number(id_game)), 1);
      setTotalNumbers([...totalNumbers]);
    }
  };

  return (
    <Main>
      <ToastContainer />
      <BodyLeft>
        <NewBetContainer>
          <NewBetLeft>new bet</NewBetLeft>
          <NewBetRight>for {getFor}</NewBetRight>
        </NewBetContainer>
        <ChooseGame>Choose a game</ChooseGame>
        {getGames}
        <FillBet>Fill your bet</FillBet>
        <BetsDescription>{getDescription}</BetsDescription>
        <NumbersContainer>
          {numbersList.map((num: any) => (
            <Numbers
              onClick={changeButtonColor.bind(null, num)}
              id={num.id}
              className={
                totalNumbers.indexOf(num) === -1 ? 'desactive' : 'active'
              }
              color={color}
              key={num.id}
            >
              {formatNumber(num)}
            </Numbers>
          ))}
        </NumbersContainer>
        <ButtonContainer>
          <CompleteGame onClick={completeGame} color={color}>
            Complete game
          </CompleteGame>
          <ClearGame onClick={clearGame} color={color}>
            Clear Game
          </ClearGame>
          <AddCart onClick={addCart} color={color}>
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
            <CartBet />
          </AllBets>
          <BetsTotalContainer>
            <BetsTotalLeft>cart</BetsTotalLeft>
            <BetsTotalRight>total:</BetsTotalRight>
            <BetsTotalPrice>
              R$ {formatNumberCartTotal(totalPrice)}
            </BetsTotalPrice>
          </BetsTotalContainer>
          <SaveButton onClick={saveCart} color={color}>
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

export default NewBet;
