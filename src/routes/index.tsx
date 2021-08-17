import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../pages/login';
import ResetPassword from '../pages/resetPassword';
import Registration from '../pages/registration';
import RecentGames from '../pages/recentGames';
import Home from '../pages/home';

const Routes = () => {
  return (
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/resetPassword'>
        <ResetPassword />
      </Route>
      <Route path='/registration'>
        <Registration />
      </Route>
      <Route path='/recentGames'>
        <RecentGames />
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='*'>
        <Redirect to='/login' />
      </Route>
    </Switch>
  );
};
export default Routes;
