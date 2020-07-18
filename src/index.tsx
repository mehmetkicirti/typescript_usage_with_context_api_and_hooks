import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import { StoreProvider } from './service/Store';
import './index.css';
import {Router,RouteComponentProps} from '@reach/router';
import Homepage from './components/Homepage';
import FavPage from './components/FavPage';

const RouterPage = (props:{pageComponent :JSX.Element} & RouteComponentProps) => props.pageComponent;

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path='/'>
        <RouterPage pageComponent={<Homepage/>} path="/"/>
        <RouterPage pageComponent={<FavPage/>} path="/faves"/>
      </App>
    </Router>
  </StoreProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
