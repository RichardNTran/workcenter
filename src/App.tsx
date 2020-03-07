import React from "react";
import { ThemeProvider } from "styled-components";
import theme from './constants/theme';
import GlobalStyle from './GlobalStyles';
import AppRoutes from "./routers";

import 'antd/dist/antd.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

export interface IAppProps extends StateProps, DispatchProps {}

export class App extends React.Component<IAppProps> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    );
  }
}

const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default App;
