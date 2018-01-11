import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './containers/App';
import reducer from './reducers/comment';
import './index.css';

const store = createStore(reducer);

ReactDom.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root'));
