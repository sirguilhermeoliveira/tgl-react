import {
  Main,
  BodyLeft,
  BodyRight,
  NewBetLeft,
  NewBetRight,
  BetsContainer,
  NewBetContainer,
  ChooseGame,
  LotoContainer,
  FillBet,
  BetsDescription,
  BetsEmpty,
  NumbersContainer,
  ButtonContainer,
  CompleteGame,
  ClearGame,
  AddCart,
  AddCartRight,
  ArrowIcon,
  Cart,
  Bets,
  BetsTrashCan,
  BetsNumbers,
  BetsPrice,
  BetsName,
  BetsTotalContainer,
  BetsTotalLeft,
  BetsTotalRight,
  BetsTotalPrice,
  SaveButton,
  AllBets,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faArrowRight,
  faCartPlus,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { types as gamesJson } from '../../database/games.json';
/*eslint-disable*/

const newBet: React.FC = () => {
  let counterNumbers;
  let totalNumbers: any = [];
  let allrandomNumbers = [];
  let firstClickCart = 0;
  let totalPrice = 0;
  let regexPrice = 0;
  let whichLoteriaIsVar = 0;

  function callGames() {
    let bets = document.getElementById('bets-container-lotos');
    bets!.innerHTML = '';
    const games = gamesJson.length;
    for (let i = 0; i < games; i++) {
      bets!.innerHTML +=
        '<div id="bets-color-' +
        i +
        '" value="games' +
        i +
        '" OnClick={this.whichGameIs(' +
        i +
        ')}>' +
        gamesJson[i].type +
        '</div>';
      let changeColor = document.getElementById('bets-color-' + i);
      if (changeColor) {
        changeColor.style.color = gamesJson[i].color;
        changeColor.style.borderColor = gamesJson[i].color;
      } else {
        console.log('Cant find the id bets-color-' + i);
      }
    }
  }

  function callDescription() {
    var bets = document.getElementById('bets-description');
    if (bets) {
      bets.innerHTML = '';
      bets.innerHTML += gamesJson[whichLoteriaIsVar].description;
      var betsNew = document.getElementById('bets-newbet-for');
      if (betsNew) {
        betsNew.innerText = '';
        betsNew.innerText += 'for ' + gamesJson[whichLoteriaIsVar].type;
      } else {
        console.log('Cant find the id bets-newbet-for');
      }
    } else {
      console.log('Cant find the id bets-description');
    }
  }

  function changeColorBackground(number: number) {
    let ext = document.getElementById('bets-color-' + number);
    if (ext) {
      ext.style.color = '#FFFFFF';
      ext.style.backgroundColor = gamesJson[number].color;
    } else {
      console.log('Cant find the id bets-color-' + number);
    }
  }

  function getCartTotal() {
    let cartBets = document.getElementById('cart-total-bets');
    if (cartBets) {
      cartBets.innerText = '';
      let newTotalPrice = totalPrice.toFixed(2).replace('.', ',');
      cartBets.innerHTML += 'R$: ' + newTotalPrice;
    } else {
      console.log('Cant find the id cart-total-bets');
    }
  }

  function addToCart() {
    if (totalNumbers.length !== gamesJson[whichLoteriaIsVar]['max-number']) {
      alert(
        'Error, you cant add to cart without all ' +
          gamesJson[whichLoteriaIsVar]['max-number'] +
          ' numbers selected.'
      );
      return;
    }
    var cartBets = document.getElementById('cart-bets');
    if (cartBets) {
      if (firstClickCart === 0) {
        cartBets.innerHTML = '';
        firstClickCart = 1;
      }

      let html = '';
      regexPrice = gamesJson[whichLoteriaIsVar].price;
      totalPrice += regexPrice;
      let newTotalPrice = gamesJson[whichLoteriaIsVar].price
        .toFixed(2)
        .replace('.', ',');
      html += '<div>';
      html +=
        '<BetsTrashCan data-style="cart-thrash-side-bar-"' +
        gamesJson[whichLoteriaIsVar].type +
        ' value="' +
        gamesJson[whichLoteriaIsVar].price +
        '" onClick={() => this.deleteItemCart()>';
      html += '<FontAwesomeIcon icon={faTrashAlt} />';
      html += '</BetsTrashCan>';
      html += '<Bets>';
      html += '<BetsNumbers>' + totalNumbers + '</BetsNumbers>';
      html += '<BetsContainer>';
      html +=
        '<BetsName data-style="cart-text-thrash-' +
        gamesJson[whichLoteriaIsVar].type +
        '>' +
        gamesJson[whichLoteriaIsVar].type +
        '</BetsName>';
      html += '<BetsPrice>R$ ' + newTotalPrice + '</BetsPrice>';
      html += '</BetsContainer>';
      html += '</Bets>';
      html += '</div>';
      cartBets.innerHTML += html;
    }
    let changeBackgroundColor = document.querySelectorAll<HTMLElement>(
      '[data-style="cart-thrash-side-bar-' +
        gamesJson[whichLoteriaIsVar].type +
        '"]'
    );
    changeBackgroundColor.forEach(
      (element) =>
        (element.style.backgroundColor = gamesJson[whichLoteriaIsVar].color)
    );
    let changeColorText = document.querySelectorAll<HTMLElement>(
      '[data-style="cart-text-thrash-' +
        gamesJson[whichLoteriaIsVar].type +
        '"]'
    );
    changeColorText.forEach(
      (element) => (element.style.color = gamesJson[whichLoteriaIsVar].color)
    );
    getCartTotal();
    clearGame();
  }

  function deleteItemCart(targetDelete: any) {
    var ext = targetDelete.getAttribute('value');
    totalPrice = totalPrice - ext;
    getCartTotal();
    let item = targetDelete.closest('.bar-side-cart');
    item.remove(targetDelete);
    if (totalPrice === 0) {
      var cartBets = document.getElementById('cart-bets');
      if (cartBets) {
        cartBets.innerHTML = '<BetsEmpty>' + 'Empty Cart' + '</BetsEmpty>';
        firstClickCart = 0;
      } else {
        console.log('Cant find the id cart-bets');
      }
    }
  }

  function completeGame() {
    let randomNumber = 1;
    let maxNumberJSON = gamesJson[whichLoteriaIsVar]['max-number'];
    if (maxNumberJSON === totalNumbers.length) {
      clearGame();
      completeGame();
    } else {
      for (let i = 1; totalNumbers.length <= maxNumberJSON - 1; i++) {
        do {
          randomNumber = Math.floor(
            Math.random() * gamesJson[whichLoteriaIsVar].range + 1
          );
        } while (totalNumbers.indexOf(randomNumber) !== -1);
        totalNumbers.push(randomNumber);
        var ext = document.getElementById('ext' + randomNumber);
        if (ext) {
          ext.style.backgroundColor = gamesJson[whichLoteriaIsVar].color;
          ext.setAttribute('value', 'onNumber');
        } else {
          console.log('Cant find the id ext' + randomNumber);
        }
      }
    }
  }

  function clearGame() {
    let spliceRangeJSON = gamesJson[whichLoteriaIsVar].range;
    totalNumbers.splice(0, spliceRangeJSON);
    for (let i = 1; i <= spliceRangeJSON; i++) {
      var ext = document.getElementById('ext' + i);
      if (ext) {
        ext.style.backgroundColor = '#ADC0C4';
        ext.setAttribute('value', 'offNumber');
      } else {
        console.log('Cant find the Id ext' + i);
      }
    }
  }

  function getBetNumbers(num: number) {
    let str = '',
      i = 0;
    while (++i <= num) {
      if (i >= 100) {
        str += `<div onClick={this.changeButtonColor(${i})} value="offNumber" id="ext${i}">${(
          '0' + i
        ).slice(-3)}</div>`;
        document.getElementById('ext')!.innerHTML = str;
        return;
      }
      str += `<div onClick={this.changeButtonColor(${i})} value="offNumber" id="ext${i}">${(
        '0' + i
      ).slice(-2)}</div>`;
    }

    document.getElementById('ext')!.innerHTML = str;
  }

  function changeButtonColor(number: number) {
    fetch('../database/games.json')
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        var ext = document.getElementById('ext' + number);
        if (ext) {
          if (
            totalNumbers.length ===
              data.types[whichLoteriaIsVar]['max-number'] &&
            ext.getAttribute('value') === 'offNumber'
          ) {
            return alert('This is the limit of numbers you can choose.');
          } else {
            if (ext.getAttribute('value') !== 'offNumber') {
              ext.style.backgroundColor = '#ADC0C4';
              var searchTotalNumbers = totalNumbers.indexOf(number);
              totalNumbers.splice(searchTotalNumbers, 1);
              ext.setAttribute('value', 'offNumber');
            } else {
              ext.style.backgroundColor = data.types[whichLoteriaIsVar].color;
              ext.setAttribute('value', 'onNumber');
              totalNumbers.push(number);
            }
          }
        } else {
          console.log('Cant find the id ext' + number);
        }
      })
      .catch(function (err) {
        console.log('Something is wrong. Error: ' + err);
      });
  }

  function whichGameIs(number: number) {
    clearGame();
    callGames();
    getCartTotal();
    changeColorBackground(number);
    callDescription();
    whichLoteriaIsVar = number;
    document.getElementById('ext')!.innerHTML = '';
    getBetNumbers(gamesJson[number].range);
  }

  function firstGame() {
    document.getElementById('ext')!.innerHTML = '';
    getBetNumbers(gamesJson[whichLoteriaIsVar].range);
    clearGame();
    callGames();
    getCartTotal();
    callDescription();
    changeColorBackground(0);
  }

  React.useEffect(() => {
    firstGame();
  }, []);

  return (
    <Main>
      <BodyLeft>
        <NewBetContainer>
          <NewBetLeft>new bet</NewBetLeft>
          <NewBetRight id='bets-newbet-for'></NewBetRight>
        </NewBetContainer>
        <ChooseGame>Choose a game</ChooseGame>
        <LotoContainer id='bets-container-lotos'></LotoContainer>
        <FillBet>Fill your bet</FillBet>
        <BetsDescription id='bets-description'></BetsDescription>
        <NumbersContainer id='ext'></NumbersContainer>
        <ButtonContainer>
          <CompleteGame onClick={completeGame}>Complete game</CompleteGame>
          <ClearGame onClick={clearGame}>Clear game</ClearGame>
          <AddCart onClick={addToCart}>
            <AddCartRight>
              <FontAwesomeIcon icon={faCartPlus} />
            </AddCartRight>{' '}
            Add to cart
          </AddCart>
        </ButtonContainer>
      </BodyLeft>

      <BodyRight>
        <Cart>cart</Cart>
        <AllBets id='cart-bets'>
          <BetsEmpty>Empty Cart</BetsEmpty>
          <div>
            <BetsTrashCan>
              <FontAwesomeIcon icon={faTrashAlt} />
            </BetsTrashCan>
            <Bets>
              <BetsNumbers>
                01,02,04,05,06,07,09,15,17
                <br />
                ,20,21,22,23,24,25
              </BetsNumbers>
              <BetsContainer>
                <BetsName>Lotomania</BetsName>
                <BetsPrice>R$ 2,50</BetsPrice>
              </BetsContainer>
            </Bets>
          </div>
        </AllBets>
        <BetsTotalContainer>
          <BetsTotalLeft>cart</BetsTotalLeft>
          <BetsTotalRight>total:</BetsTotalRight>
          <BetsTotalPrice id='cart-total-bets'>R$ 0,00</BetsTotalPrice>
        </BetsTotalContainer>
        <SaveButton>
          Save
          <ArrowIcon>
            <FontAwesomeIcon icon={faArrowRight} />
          </ArrowIcon>
        </SaveButton>
      </BodyRight>
    </Main>
  );
};

export default newBet;
