import React, { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header';

import * as Style from './styles';

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Style.DefaultLayoutContainer>
          <Header />
          <Style.MainContainer>
            <Component {...matchProps} />
          </Style.MainContainer>
        </Style.DefaultLayoutContainer>
      )}
    />
  );
};

export default DefaultLayout;
