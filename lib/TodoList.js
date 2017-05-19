import React from 'react';
import TodoItem from './TodoItem';
import {connect} from 'react-redux';


class TodoList extends React.Component {

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

export default connect(
	(state) => {
		return {
			todos: state.todos
		}
	},
	(dispatch, ownProps) => {
		return {
			onAddNewItem: () => {
				dispatch({
					type: 'ADD_NEW_TODO'
				});
			}
		}
	},
)(TodoList);