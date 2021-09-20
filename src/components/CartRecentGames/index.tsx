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

interface UrlObject {
  url_bets: string;
}

interface IGame {
  game: any;
  id: number;
  color: string;
  game_numbers: number;
  created_at: string;
  price: number;
  type: string;
}

function CartRecentGames({ url_bets }: UrlObject) {
  let games: object = <BetsEmpty>Empty Cart</BetsEmpty>;
  const [getallTheBets, setallTheBets]: any = useState([]);
  useEffect(() => {
    axios
      .get(url_bets)
      .then((res: any) => {
        console.log(typeof res.data);
        if (res.status === 200) {
          setallTheBets(res.data.data);
          return;
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [url_bets]);
  if (getallTheBets.length > 0) {
    games = getallTheBets.map((recentGames: IGame) => {
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
