import cloneDeep from 'lodash/cloneDeep';
// TODO: shallow clone is much faster, and fullfills our obligations not to alter state


export default (state, action) => {

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