import React from 'react';
import {cloneDeep} from 'lodash';
import {TodoItem} from './todo-item';


export class Todo extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			items: [
				{ id: 1, title: 'One' },
				{ id: 2, title: 'Two' },
			]
		};
	}

	addItem(){
		let items = cloneDeep(this.state.items);
		items.push({
			id: this.getNextId(),
			title: 'NEW'
		});
		this.setState({ items: items });
	}

	getNextId(){
		return this.state.items.reduce
			((acc, item) => {
				return Math.max(acc, item.id) + 1;
			},
			1
		);
	}

	render(){
		return (
			<div>
				<ul>
					{this.state.items.map((item) =>
						<TodoItem key={item.id} item={item} />
					)}
				</ul>
				<button onClick={() => this.addItem()}>Add</button>
			</div>
		)
	}

}