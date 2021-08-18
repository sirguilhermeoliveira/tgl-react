import Routes from './routes/index';
import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './theme/globalStyles';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
