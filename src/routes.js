//Dependecies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './Components/App';
import Board from './Components/Board';
import Cupones from './Components/Cupones';
import Billetera from './Components/Billetera';
import Cuenta from './Components/Cuenta';
import Home from './Components/Home';
import Page404 from './Components/Page404';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/board" component={Board} />
      <Route exact path="/cupones" component={Cupones} />
      <Route exact path="/billetera" component={Billetera} />
      <Route exact path="/cuenta" component={Cuenta} />
      <Route exact path="/" component={Home} />
      <Route component={Page404} />
    </Switch>
  </App>;

  export default AppRoutes;
