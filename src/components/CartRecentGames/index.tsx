import {
  Bets,
  BetsName,
  BetsNumbers,
  BetsPrice,
  BetsEmpty,
  BetsContainer,
} from './styles';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { formatNumberCart, formatNumberCartTotal } from '../../utils/index';
import { RootState } from '../../store';

const CartRecentGames: React.FC = () => {
  const cartSave = useSelector(
    (state: RootState) => state.cartSave.recentGames
  );
  let games: any = <BetsEmpty>Empty cart</BetsEmpty>;

  if (cartSave.length > 0) {
    games = cartSave.map((recentGames) => {
      return (
        <BetsContainer key={recentGames.id}>
          <Bets color={recentGames.color}>
            <BetsNumbers>{formatNumberCart(recentGames.bet)}</BetsNumbers>
            <BetsPrice>
              {recentGames.date} - (R${' '}
              {formatNumberCartTotal(recentGames.price)})
            </BetsPrice>
            <BetsName color={recentGames.color}>{recentGames.game}</BetsName>
          </Bets>
        </BetsContainer>
      );
    });
  }
  return <Fragment>{games}</Fragment>;
};

export default CartRecentGames;
