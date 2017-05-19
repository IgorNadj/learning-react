import React from 'react';
import TodoItem from './TodoItem';


export default class TodoList extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<ul>
					{this.props.todos.map((item) =>
						<TodoItem key={item.id} item={item} />
					)}
				</ul>
				<button onClick={this.props.onAddNewItem}>Add</button>
			</div>
		)
	}

}