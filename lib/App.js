import React from 'react';
import {TodoList} from './TodoList';


export class App extends React.Component {

	render(){
		return (
			<div>
				<h2>Todo</h2>
				<TodoList />
			</div>
		)
	}

}