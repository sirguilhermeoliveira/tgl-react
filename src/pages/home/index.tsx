import {
  BodyLeft,
  BodyRight,
  Main,
  ButtonPagination,
  RecentGamesDiv,
  Filters,
  PaginationContainer,
  Loto,
  RecentGamesContainer,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { types as gamesJson } from '../../database/games.json';
import { useState, useEffect } from 'react';
import CartRecentGames from '../../components/CartRecentGames';
import { cartSaveActions } from '../../store/cartbet';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { formatPage } from '../../utils/index';

const Home: React.FC = () => {
  const [whichLoteriaIsVar, setWhichLoteriaIsVar] = useState('');
  const user_id = useSelector((state: RootState) => state.auth.user_id);
  const [page, setPage]: any = useState(1);
  const url_pagination =
    'http://127.0.0.1:3333/users/' + Number(user_id) + '/bets?page=' + page;
  const helperInfo = useSelector(
    (state: RootState) => state.filterCart.helperFilter
  );
  const dispatch = useDispatch<AppDispatch>();

  const changeGameColor = (event: any) => {
    console.log(whichLoteriaIsVar);
    if (helperInfo.length) {
      if (whichLoteriaIsVar === event.target.innerText) {
        dispatch(cartSaveActions.fillSave(helperInfo));
        setWhichLoteriaIsVar('');
        return;
      }
      dispatch(cartSaveActions.fillSave(helperInfo));
      const newId = event.target.id;
      const newGame = event.target.innerText;
      setWhichLoteriaIsVar(gamesJson[newId].type);
      const filter = helperInfo.filter((game) => game.game === newGame);
      dispatch(cartSaveActions.fillSave(filter));
    } else {
      toast.error('No games available');
    }
  };

  useEffect(() => {
    let url = 'http://127.0.0.1:3333/games';
    axios
      .get(url)
      .then((res: any) => {
        if (res.status === 200) {
          const gamesHelper = res.data;
          setallTheGames(gamesHelper.reverse());
          return;
        }
      })
      .catch((err: any) => {
        console.log(err);
      });

    axios
      .get(url_pagination)
      .then((res: any) => {
        if (res.status === 200) {
          console.log(res.data.meta);
          setHelperPagination(res.data.meta);
          return;
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [url_pagination]);
  const [getallTheGames, setallTheGames] = useState([]);
  const [getHelperPagination, setHelperPagination]: any = useState([]);

  const getGames = getallTheGames.map((item: any, index: any) => (
    <Loto
      className={whichLoteriaIsVar === item.type ? 'active' : ''}
      key={item.type}
      id={index}
      color={item.color}
      onClick={changeGameColor}
    >
      {item.type}
    </Loto>
  ));

  const helperNumberPageNavigation = formatPage(getHelperPagination.last_page);

  const getButtons = helperNumberPageNavigation.map((item: any, index: any) => (
    <ButtonPagination
      className={page === index + 1 ? 'active' : ''}
      onClick={() => setNewPage(index + 1)}
    >
      {index + 1}
    </ButtonPagination>
  ));

  function setNewPage(event: any) {
    setPage(event);
  }

  function setNextPage() {
    setPage(page + 1);
  }

  function setPrevPage() {
    setPage(page - 1);
  }

  return (
    <Main>
      <ToastContainer />
      <BodyLeft>
        <RecentGamesContainer>
          <RecentGamesDiv>RECENT GAMES</RecentGamesDiv>
          <Filters>Filters</Filters>
          {getGames}
        </RecentGamesContainer>
        <CartRecentGames url_bets={url_pagination} />
        <PaginationContainer>
          {getHelperPagination.first_page ===
          getHelperPagination.current_page ? (
            ''
          ) : (
            <button onClick={setPrevPage}>Prev</button>
          )}
          {getButtons}
          {getHelperPagination.next_page_url === null ? (
            ''
          ) : (
            <button onClick={setNextPage}>Next</button>
          )}
        </PaginationContainer>
      </BodyLeft>
      <BodyRight>
        <Link
          style={{ textDecoration: 'none', color: '#B5C401' }}
          to='/newbets'
        >
          New Bet <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </BodyRight>
    </Main>
  );
};

export default Home;
