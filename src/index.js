import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

// Redux 관련 불러오기
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// 스토어 생성
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
