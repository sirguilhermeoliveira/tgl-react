import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import {
  Bets,
  BetsTrashCan,
  BetsNumbers,
  BetsPrice,
  BetsEmpty,
  BetsColor,
  BetsContainer,
  BetsRow,
} from './styles';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

const CartBet: React.FC = () => {
  const cartGame = useSelector((state: any) => state.cart.games);
  const dispatch = useDispatch();
  const formatNumberCartTotal = (number: number) => {
    return number.toFixed(2).replace('.', ',');
  };

  const formatNumberCart = (number: number) => {
    return number.toString();
  };

  const deleteItem = (event: any) => {
    const gameId = +event.target.id;
    const filter = cartGame.filter((game: any) => {
      return game.id !== gameId;
    });
    dispatch(cartActions.removeGame(filter));
  };

  let games = <BetsEmpty>Empty cart</BetsEmpty>;

  if (cartGame.length > 0) {
    games = cartGame.map((game: any) => {
      return (
        <BetsContainer onClick={deleteItem} key={game.id}>
          <BetsTrashCan color={game.color} id={game.id}>
            T
          </BetsTrashCan>
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
