import React from 'react';
import { Router, Switch } from 'react-router-dom';
import DefaultLayout from './components/layouts/DefaultLayout';
import {
  AsyncRegister,
  AsyncIntroduce,
  AsyncHome,
  AsyncProfile,
} from './pages';
import {
  RegisterPath,
  IntroducePath,
  HomePath,
  ProfilePath,
} from './constants/routerConstants';
import history from './config/history';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <DefaultLayout exact path={RegisterPath} component={AsyncRegister} isIntroduceHeader />
        <DefaultLayout exact path={IntroducePath} component={AsyncIntroduce} isIntroduceHeader />
        <DefaultLayout exact path={HomePath} component={AsyncHome} />
        <DefaultLayout exact path={ProfilePath} component={AsyncProfile} />
      </Switch>
    </Router>
  );
};

export default Routes;
