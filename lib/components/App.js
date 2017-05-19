import React from 'react';
import TodoList from '../containers/TodoListContainer';


export default class App extends React.Component {

	render(){
		return (
			<div>
				<h2>Todo</h2>
				<TodoList />
			</div>
		)
	}

}