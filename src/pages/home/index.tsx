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
  const [getallTheGames, setallTheGames] = useState([]);
  const [getHelperPagination, setHelperPagination]: any = useState([]);
  const helperNumberPageNavigation = formatPage(getHelperPagination.last_page);

  const url_pagination =
    'http://192.168.56.1:3333/users/' +
    Number(user_id) +
    '/bets?page=' +
    page +
    '&filter=' +
    filter;

  function setNewPage(event: React.MouseEvent) {
    setPage(event);
  }

  function setNextPage() {
    setPage(page + 1);
  }

  function setPrevPage() {
    setPage(page - 1);
  }

  const changeGameFilter = (event: any) => {
    let helper = 0;
    helper = Number(event.target.id);
    if (getHelperPagination) {
      if (whichLoteriaIsVar === event.target.innerText) {
        setPage(1);
        setFilter(0);
        setWhichLoteriaIsVar('');
        return;
      }
      setFilter(helper + 1);
      setPage(1);
      setWhichLoteriaIsVar(event.target.innerText);
    } else {
      toast.error('No games available');
    }
  };

  useEffect(() => {
    let url = 'http://192.168.56.1:3333/games';
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
          setHelperPagination(res.data.meta);
          return;
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [url_pagination]);

  const getGames = getallTheGames.map((item: any, index: any) => (
    <Loto
      className={whichLoteriaIsVar === item.type ? 'active' : ''}
      key={item.type}
      id={index}
      color={item.color}
      onClick={changeGameFilter}
    >
      {item.type}
    </Loto>
  ));

  const getButtons = helperNumberPageNavigation.map((item: any, index: any) => (
    <ButtonPagination
      className={page === index + 1 ? 'active' : ''}
      onClick={() => setNewPage(index + 1)}
    >
      {index + 1}
    </ButtonPagination>
  ));

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
            <ButtonPagination onClick={setPrevPage}>Prev</ButtonPagination>
          )}
          {getHelperPagination.last_page === 1 ? '' : [getButtons]}
          {getHelperPagination.next_page_url === null ? (
            ''
          ) : (
            <ButtonPagination onClick={setNextPage}>Next</ButtonPagination>
          )}
        </PaginationContainer>
      </BodyLeft>
      <BodyRight>
        <Link
          data-cy='click-newBet'
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
