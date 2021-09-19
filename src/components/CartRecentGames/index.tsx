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
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import {
  formatNumberCart,
  formatNumberCartTotal,
  formatDate,
} from '../../utils/index';

const CartRecentGames: React.FC = () => {
  let games: any = <BetsEmpty>Empty cart</BetsEmpty>;
  const user_id = useSelector((state: RootState) => state.auth.user_id);
  useEffect(() => {
    let url_bets = 'http://127.0.0.1:3333/users/' + Number(user_id) + '/bets';
    axios
      .get(url_bets)
      .then((res: any) => {
        if (res.status === 200) {
          setallTheBets(res.data);
          return;
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [user_id]);
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
};

export default CartRecentGames;
