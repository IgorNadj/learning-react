import React from 'react';
import TodoList from '../components/TodoList';
import {connect} from 'react-redux';

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