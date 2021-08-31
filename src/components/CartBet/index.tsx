import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import {
  Bets,
  BetsTrashCan,
  BetsNumbers,
  BetsPrice,
  BetsEmpty,
  BetsColor,
  BetsRange,
  BetsContainer,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { cartInfoActions } from '../../store/cart';

const CartBet: React.FC = () => {
  const cartInfo = useSelector((state: any) => state.cartInfo.info);
  const dispatch = useDispatch();
  const formatNumberCartTotal = (number: number) => {
    return number.toFixed(2).replace('.', ',');
  };

  const formatNumberCart = (number: number) => {
    return number.toString();
  };

  const deleteItemHandler = (event: any) => {
    const newId = event.target.id;
    const filter = cartInfo.filter((game: any) => game.id === newId);
    dispatch(cartInfoActions.removeInfo(filter));
    // tá apagando tudo por enquanto
  };

  let infos = <BetsEmpty>Empty cart</BetsEmpty>;

  if (cartInfo.length > 0) {
    infos = cartInfo.map((info: any) => {
      return (
        <BetsRange key={info.id} onClick={deleteItemHandler}>
          <BetsTrashCan color={info.color}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </BetsTrashCan>
          <Bets color={info.color}>
            <BetsNumbers>{formatNumberCart(info.numbers)}</BetsNumbers>
            <BetsContainer color={info.color}>
              <BetsColor color={info.color}>{info.gameAdded}</BetsColor>
              <BetsPrice>R$ {formatNumberCartTotal(info.price)}</BetsPrice>
            </BetsContainer>
          </Bets>
        </BetsRange>
      );
    });
  }
  return <Fragment>{infos}</Fragment>;
};

export default CartBet;
