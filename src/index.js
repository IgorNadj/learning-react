import React from 'react';
import ReactDOM from 'react-dom';
import App from '../lib/app';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import cloneDeep from 'lodash/cloneDeep';


let reducer = (state, action) => {

	let getNextId = () => {
		return state.todos.reduce
			((acc, item) => {
				return Math.max(acc, item.id) + 1;
			},
			1
		);
	}

	if (action.type === 'ADD_NEW_TODO') {
		let newState = cloneDeep(state);
		newState.todos.push({
			id: getNextId(),
			title: 'NEW'
		});
		return newState;
	}

	return state;

}

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