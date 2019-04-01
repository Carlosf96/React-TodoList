import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		};

		this.addItem = this.addItem.bind(this);
	}
	addItem(e) {
		if (this._inputElement !== '') {
			var newItem = {
				text: this._inputElement.value,
				key: Date.now()
			};
		}

		this.setState((prevState) => {
			return { items: prevState.items.concat(newItem) };
		});

		this._inputElement.value = '';

		e.preventDefault();
	}

	render() {
		return (
			<div className="TodoListMain">
				<div className="Header">
					<form onSubmit={this.addItem}>
						<input ref={(a) => (this._inputElement = a)} placeholder=" enter text" />
						<button type="submit">Add to list</button>
					</form>
				</div>
				<TodoItems entries={this.state.items} />
			</div>
		);
	}
}

export default TodoList;
