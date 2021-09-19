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
import { types as gamesJson } from '../../database/games.json';
import CartBet from '../../components/CartBet';
import { useState, useEffect } from 'react';
import { cartActions } from '../../store/cart';
import type { AppDispatch, RootState } from '../../store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const NewBet: React.FC = () => {
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const allBets = useSelector((state: RootState) => state.cart.games);
  const dispatch = useDispatch<AppDispatch>();
  const [whichLoteriaIsVar, setWhichLoteriaIsVar] = useState(0);
  const user_id = useSelector((state: RootState) => state.auth.user_id);
  const color = gamesJson[whichLoteriaIsVar].color;
  const [getDescription, setGetDescription] = useState(
    gamesJson[whichLoteriaIsVar].description
  );

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

  useEffect(() => {
    let url = 'http://127.0.0.1:3333/games';
    axios
      .get(url)
      .then((res: any) => {
        if (res.status === 200) {
          const gamesHelper = res.data;
          setallTheGames(gamesHelper.reverse());
          return;
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);
  const [getallTheGames, setallTheGames] = useState([]);

  const getGames = getallTheGames.map((item: any, index: any) => (
    <Loto
      className={
        gamesJson[whichLoteriaIsVar].type === item.type ? 'active' : ''
      }
      key={item.type}
      id={index}
      color={item.color}
      onClick={changeGameColor}
    >
      {item.type}
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

  const addCart = () => {
    if (totalNumbers.length !== gamesJson[whichLoteriaIsVar]['max-number']) {
      toast.error(
        'Error, you cant add to cart without all ' +
          gamesJson[whichLoteriaIsVar]['max-number'] +
          ' numbers selected.'
      );
      return;
    }
    dispatch(
      cartActions.addGame({
        id: Math.random(),
        bet: totalNumbers,
        game: gamesJson[whichLoteriaIsVar].type,
        game_id: Number(whichLoteriaIsVar) + 1,
        price: gamesJson[whichLoteriaIsVar].price,
        color: gamesJson[whichLoteriaIsVar].color,
        date: new Intl.DateTimeFormat('pt-BR').format(new Date()),
      })
    );
    clearGame();
    toast.success('New Game Added');
  };

  async function saveCart() {
    if (totalPrice < 10) {
      toast.warn('The minimum in cart has to be R$ 30,00');
    } else {
      let url = 'http://127.0.0.1:3333/users/' + user_id + '/bets';
      for (let i = 0; i < allBets.length; i++) {
        await axios
          .post(url, {
            bets: [
              {
                game_id: allBets[i].game_id,
                game_numbers: allBets[i].bet.toString(),
              },
            ],
          })
          .then((res: any) => {
            console.log(res.data);
            return;
          })
          .catch((err: any) => {
            console.log(err);
            //      toast.error('Something is wrong.');
          });
      }
      dispatch(cartActions.removeAllGames([]));
      toast.success('Bet Saved!!', {
        position: 'bottom-center',
        hideProgressBar: true,
      });
    }
  }

  const clearGame = () => {
    setTotalNumbers([]);
  };

  const [totalNumbers, setTotalNumbers] = useState([] as Number[]);
  const changeButtonColor = (event: React.MouseEvent<HTMLElement>) => {
    if (
      totalNumbers.length === gamesJson[whichLoteriaIsVar]['max-number'] &&
      totalNumbers.indexOf(Number(event.currentTarget.id)) === -1
    ) {
      return toast.warn('This is the limit of numbers you can choose.');
    }
    if (totalNumbers.indexOf(Number(event.currentTarget.id)) === -1) {
      totalNumbers.push(Number(event.currentTarget.id));
      setTotalNumbers([...totalNumbers]);
    } else {
      totalNumbers.splice(
        totalNumbers.indexOf(Number(event.currentTarget.id)),
        1
      );
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
            <CartBet />
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

export default NewBet;
