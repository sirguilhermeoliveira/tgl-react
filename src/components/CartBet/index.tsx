import {
  Bets,
  BetsNumbers,
  BetsPrice,
  BetsEmpty,
  BetsColor,
  BetsContainer,
  BetsRow,
} from './styles';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import type { AppDispatch } from '../../store';
import { formatNumberCart, formatNumberCartTotal } from '../../utils/index';

const CartBet: React.FC = () => {
  const cartGame = useSelector((state: any) => state.cart.games);
  const dispatch = useDispatch<AppDispatch>();

  const deleteItem = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.currentTarget.id);
    const gameId = +event.currentTarget.id;
    const filter = cartGame.filter((game: any) => {
      return game.id !== gameId;
    });
    dispatch(cartActions.removeGame(filter));
  };

  let games = <BetsEmpty>Empty cart</BetsEmpty>;

  if (cartGame.length > 0) {
    games = cartGame.map((game: any) => {
      return (
        <BetsContainer key={game.id}>
          <i
            style={{
              cursor: 'pointer',
              marginTop: 'auto',
              marginBottom: 'auto',
              marginRight: '10px',
              fontSize: '1.275rem',
            }}
            onClick={deleteItem}
            id={game.id}
            className='far fa-trash-alt'
          ></i>
          <Bets color={game.color}>
            <BetsNumbers>{formatNumberCart(game.bet)}</BetsNumbers>
            <BetsRow color={game.color}>
              <BetsColor color={game.color}>{game.game}</BetsColor>
              <BetsPrice>R$ {formatNumberCartTotal(game.price)}</BetsPrice>
            </BetsRow>
          </Bets>
        </BetsContainer>
      );
    });
  }
  return <Fragment>{games}</Fragment>;
};

export default CartBet;
