import {
  Bets,
  BetsName,
  BetsNumbers,
  BetsPrice,
  BetsEmpty,
  BetsContainer,
} from './styles';
import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import {
  formatNumberCart,
  formatNumberCartTotal,
  formatDate,
} from '../../utils/index';

function CartRecentGames({ url_bets }: any) {
  let games: any = <BetsEmpty>Empty Cart</BetsEmpty>;

  useEffect(() => {
    axios
      .get(url_bets)
      .then((res: any) => {
        if (res.status === 200) {
          setallTheBets(res.data.data);
          return;
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [url_bets]);
  const [getallTheBets, setallTheBets]: any = useState([]);
  if (getallTheBets.length > 0) {
    games = getallTheBets.map((recentGames: any) => {
      return (
        <BetsContainer key={recentGames.id}>
          <Bets color={recentGames.game.color}>
            <BetsNumbers>
              {formatNumberCart(recentGames.game_numbers)}
            </BetsNumbers>
            <BetsPrice>
              {formatDate(recentGames.created_at)} - R${' '}
              {formatNumberCartTotal(Number(recentGames.game.price))}
            </BetsPrice>
            <BetsName color={recentGames.game.color}>
              {recentGames.game.type}
            </BetsName>
          </Bets>
        </BetsContainer>
      );
    });
  }
  return <Fragment>{games}</Fragment>;
}

export default CartRecentGames;
