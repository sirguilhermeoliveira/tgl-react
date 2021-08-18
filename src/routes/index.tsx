import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../pages/login';
import ResetPassword from '../pages/resetPassword';
import Registration from '../pages/registration';
import RecentGames from '../pages/recentGames';
import Home from '../pages/home';
import Footer from '../components/Footer/index';
import Header from '../components/Header/index';

const Routes = () => {
  return (
    <Switch>
      <Route path='/login'>
        <Login />
        <Footer />
      </Route>
      <Route path='/resetPassword'>
        <ResetPassword />
        <Footer />
      </Route>
      <Route path='/registration'>
        <Registration />
        <Footer />
      </Route>
      <Route path='/recentGames'>
        <Header />
        <RecentGames />
        <Footer />
      </Route>
      <Route path='/home'>
        <Header />
        <Home />
        <Footer />
      </Route>
      <Route path='*'>
        <Redirect to='/home' />
      </Route>
    </Switch>
  );
};
export default Routes;
