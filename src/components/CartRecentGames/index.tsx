import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import {
  Bets,
  BetsName,
  BetsNumbers,
  BetsPrice,
  BetsEmpty,
  BetsContainer,
} from './styles';

const CartRecentGames: React.FC = () => {
  const cartSave = useSelector((state: any) => state.cartSave.recentGames);

  const formatNumberCartTotal = (number: number) => {
    return number.toFixed(2).replace('.', ',');
  };

  const formatNumberCart = (number: number) => {
    return number.toString();
  };

  let games = <BetsEmpty>Empty cart</BetsEmpty>;

  if (cartSave.length > 0) {
    games = cartSave.map((recentGames: any) => {
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
