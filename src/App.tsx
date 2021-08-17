import Routes from './routes/index';
import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
