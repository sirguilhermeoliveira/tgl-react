import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../pages/login';
import ResetPassword from '../pages/resetPassword';
import Registration from '../pages/registration';
import RecoveryPassword from '../pages/recoveryPassword';
import Home from '../pages/home';
import NewBet from '../pages/newBet';
import Account from '../pages/account';
import Footer from '../components/Footer/index';
import Header from '../components/Header/index';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

const Routes = () => {
  const authToken = useSelector((state: RootState) => state.auth.authToken);
  return (
    <Switch>
      {!authToken && (
        <Route path='/login'>
          <Login />
          <Footer />
        </Route>
      )}
      {!authToken && (
        <Route path='/resetPassword'>
          <ResetPassword />
          <Footer />
        </Route>
      )}
      {!authToken && (
        <Route path='/registration'>
          <Registration />
          <Footer />
        </Route>
      )}
      {!authToken && (
        <Route path='/recoveryPassword'>
          <RecoveryPassword />
          <Footer />
        </Route>
      )}
      {authToken && (
        <Route path='/home'>
          <Header />
          <Home></Home>
          <Footer />
        </Route>
      )}
      {authToken && (
        <Route path='/newbets'>
          <Header />
          <NewBet></NewBet>
          <Footer />
        </Route>
      )}
      {authToken && (
        <Route path='/account'>
          <Header />
          <Account></Account>
          <Footer />
        </Route>
      )}
      <Route path='*'>
        {authToken ? <Redirect to='/home' /> : <Redirect to='/login' />}
      </Route>
    </Switch>
  );
};
export default Routes;
