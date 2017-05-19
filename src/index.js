import React from 'react';
import ReactDOM from 'react-dom';
import App from '../lib/components/app';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import reducer from '../lib/reducers/AppReducer';

let initialState = {
	todos: [
		{id: 1, title: 'One'},
		{id: 2, title: 'Two'},
	]
}

let store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
);