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
import { useState, useEffect } from 'react';
import CartRecentGames from '../../components/CartRecentGames';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { formatPage } from '../../utils/index';

const Home: React.FC = () => {
  const [whichLoteriaIsVar, setWhichLoteriaIsVar] = useState('');
  const user_id = useSelector((state: RootState) => state.auth.user_id);
  const [page, setPage]: any = useState(1);
  const [filter, setFilter]: any = useState(0);

  const url_pagination =
    'http://127.0.0.1:3333/users/' +
    Number(user_id) +
    '/bets?page=' +
    page +
    '&filter=' +
    filter;

  const changeGameColor = (event: any) => {
    let helper = 0;
    helper = Number(event.target.id);
    if (getHelperPagination) {
      if (whichLoteriaIsVar === event.target.innerText) {
        setFilter(0);
        setWhichLoteriaIsVar('');
        return;
      }
      setFilter(helper + 1);
      setWhichLoteriaIsVar(event.target.innerText);
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
    console.log(url_pagination);
  }

  function setNextPage() {
    setPage(page + 1);
    console.log(url_pagination);
  }

  function setPrevPage() {
    setPage(page - 1);
    console.log(url_pagination);
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
          {getHelperPagination.next_page_url === null ? '' : [getButtons]}
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
