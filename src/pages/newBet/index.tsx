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
  Loto,
  FillBet,
  BetsDescription,
  BetsEmpty,
  NumbersContainer,
  Numbers,
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
        '<Loto id="bets-color-' +
        i +
        '" value="games' +
        i +
        '" OnClick={(' +
        i +
        ') => whichGameIs}>' +
        gamesJson[i].type +
        '</Loto>';
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
    fetch('../database/games.json')
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        var bets = document.getElementById('bets-description');
        if (bets) {
          bets.innerHTML = '';
          bets.innerHTML += data.types[whichLoteriaIsVar].description;
          var betsNew = document.getElementById('bets-newbet-for');
          if (betsNew) {
            betsNew.innerText = '';
            betsNew.innerText += 'for ' + data.types[whichLoteriaIsVar].type;
          } else {
            console.log('Cant find the id bets-newbet-for');
          }
        } else {
          console.log('Cant find the id bets-description');
        }
      })
      .catch(function (err) {
        console.log('Something is wrong. Error: ' + err);
      });
  }

  function changeColorBackground(number: number) {
    fetch('../database/games.json')
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        let ext = document.getElementById('bets-color-' + number);
        if (ext) {
          ext.style.color = '#FFFFFF';
          ext.style.backgroundColor = data.types[number].color;
        } else {
          console.log('Cant find the id bets-color-' + number);
        }
      })
      .catch(function (err) {
        console.log('Something is wrong. Error: ' + err);
      });
  }

  function getCartTotal() {
    var cartBets = document.getElementById('cart-total-bets');
    if (cartBets) {
      cartBets.innerText = '';
      let newTotalPrice = totalPrice.toFixed(2).replace('.', ',');
      cartBets.innerHTML += 'R$: ' + newTotalPrice;
    } else {
      console.log('Cant find the id cart-total-bets');
    }
  }

  function addToCart() {
    fetch('../database/games.json')
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (
          totalNumbers.length !== data.types[whichLoteriaIsVar]['max-number']
        ) {
          alert(
            'Error, you cant add to cart without all ' +
              data.types[whichLoteriaIsVar]['max-number'] +
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
          regexPrice = data.types[whichLoteriaIsVar].price;
          totalPrice += regexPrice;
          let newTotalPrice = data.types[whichLoteriaIsVar].price
            .toFixed(2)
            .replace('.', ',');
          html += '<div>';
          html +=
            '<BetsTrashCan data-style="cart-thrash-side-bar-"' +
            data.types[whichLoteriaIsVar].type +
            ' value="' +
            data.types[whichLoteriaIsVar].price +
            '" onClick={() => this.deleteItemCart()>';
          html += '<FontAwesomeIcon icon={faTrashAlt} />';
          html += '</BetsTrashCan>';
          html += '<Bets>';
          html += '<BetsNumbers>' + totalNumbers + '</BetsNumbers>';
          html += '<BetsContainer>';
          html +=
            '<BetsName data-style="cart-text-thrash-' +
            data.types[whichLoteriaIsVar].type +
            '>' +
            data.types[whichLoteriaIsVar].type +
            '</BetsName>';
          html += '<BetsPrice>R$ ' + newTotalPrice + '</BetsPrice>';
          html += '</BetsContainer>';
          html += '</Bets>';
          html += '</div>';
          cartBets.innerHTML += html;
        }
        let changeBackgroundColor = document.querySelectorAll<HTMLElement>(
          '[data-style="cart-thrash-side-bar-' +
            data.types[whichLoteriaIsVar].type +
            '"]'
        );
        changeBackgroundColor.forEach(
          (element) =>
            (element.style.backgroundColor =
              data.types[whichLoteriaIsVar].color)
        );
        let changeColorText = document.querySelectorAll<HTMLElement>(
          '[data-style="cart-text-thrash-' +
            data.types[whichLoteriaIsVar].type +
            '"]'
        );
        changeColorText.forEach(
          (element) =>
            (element.style.color = data.types[whichLoteriaIsVar].color)
        );
        getCartTotal();
        clearGame();
      })
      .catch(function (err) {
        console.log('Something is wrong. Error: ' + err);
      });
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
    fetch('../database/games.json')
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        let randomNumber = 1;
        let maxNumberJSON = data.types[whichLoteriaIsVar]['max-number'];
        if (maxNumberJSON === totalNumbers.length) {
          clearGame();
          completeGame();
        } else {
          for (let i = 1; totalNumbers.length <= maxNumberJSON - 1; i++) {
            do {
              randomNumber = Math.floor(
                Math.random() * data.types[whichLoteriaIsVar].range + 1
              );
            } while (totalNumbers.indexOf(randomNumber) !== -1);
            totalNumbers.push(randomNumber);
            var ext = document.getElementById('ext' + randomNumber);
            if (ext) {
              ext.style.backgroundColor = data.types[whichLoteriaIsVar].color;
              ext.setAttribute('value', 'onNumber');
            } else {
              console.log('Cant find the id ext' + randomNumber);
            }
          }
        }
      })
      .catch(function (err) {
        console.log('Something is wrong. Error: ' + err);
      });
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

  const getBetNumbers = (num: number) => {
    let str = '',
      i = 0;
    while (++i <= num) {
      if (i >= 100) {
        str += `<Loto onClick={(${i}) => changeButtonColor} value="offNumber" id="ext${i}">${(
          '0' + i
        ).slice(-3)}</Loto>`;
        document.getElementById('ext')!.innerHTML = str;
        return;
      }
      str += `<Loto onClick={(${i}) => changeButtonColor} value="offNumber" id="ext${i}">${(
        '0' + i
      ).slice(-2)}</Loto>`;
    }

    document.getElementById('ext')!.innerHTML = str;
  };

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
    fetch('../database/games.json')
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        clearGame();
        callGames();
        getCartTotal();
        changeColorBackground(number);
        callDescription();
        whichLoteriaIsVar = number;
        document.getElementById('ext')!.innerHTML = '';
        getBetNumbers(data.types[number].range);
      })
      .catch(function (err) {
        console.log('Something is wrong. Error: ' + err);
      });
  }

  function firstGame() {
    callGames();
    /*getCartTotal();
    callDescription();
    changeColorBackground(0);
    document.getElementById('ext')!.innerHTML = '';
    getBetNumbers(gamesJson[whichLoteriaIsVar].range); */
  }

  React.useEffect(() => {}, [firstGame()]);

  return (
    <Main>
      <BodyLeft>
        <NewBetContainer>
          <NewBetLeft>new bet</NewBetLeft>
          <NewBetRight id='bets-newbet-for'>for mega-sena</NewBetRight>
        </NewBetContainer>
        <ChooseGame>Choose a game</ChooseGame>
        <LotoContainer id='bets-container-lotos'>
          <Loto>Lotofácil</Loto>
          <Loto>Mega-Sena</Loto>
          <Loto>Lotomania</Loto>
        </LotoContainer>
        <FillBet>Fill your bet</FillBet>
        <BetsDescription id='bets-description'>
          Mark as many numbers as you want up to a maximum of 50. Win by hitting
          15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn
        </BetsDescription>
        <NumbersContainer id='ext'>
          <Numbers>01</Numbers>
          <Numbers>02</Numbers>
          <Numbers>03</Numbers>
          <Numbers>04</Numbers>
          <Numbers>05</Numbers>
          <Numbers>06</Numbers>
          <Numbers>07</Numbers>
          <Numbers>08</Numbers>
          <Numbers>09</Numbers>
        </NumbersContainer>
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
          <BetsTotalLeft>cart </BetsTotalLeft>
          <BetsTotalRight>total:</BetsTotalRight>
          <BetsTotalPrice id='cart-total-bets'>R$ 0,00</BetsTotalPrice>
        </BetsTotalContainer>
        <SaveButton>
          Save{' '}
          <ArrowIcon>
            <FontAwesomeIcon icon={faArrowRight} />
          </ArrowIcon>
        </SaveButton>
      </BodyRight>
    </Main>
  );
};

export default newBet;
