/// <reference path="../../../../typings/tsd.d.ts" />

import * as React from 'react';

import { Todo, TodoList } from './../models/todos';
import TodoItem from './TodoItem';
import Footer from './Footer';

import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../constants/TodoFilters';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: (todo:Todo) => !todo.completed,
  [SHOW_COMPLETED]: (todo:Todo) => todo.completed
};

interface MainSectionProps {
  todos: TodoList;
  actions: any;
}

interface MainSectionState {
  filter: string;
}

class MainSection extends React.Component<MainSectionProps, MainSectionState> {
  constructor(props, context) {
    super(props, context);
    this.state = { filter: SHOW_ALL };
  }

  handleClearCompleted() {
    const atLeastOneCompleted = this.props.todos.some(todo => todo.completed);
    if (atLeastOneCompleted) {
      this.props.actions.clearCompleted();
    }
  }

  handleShow(filter) {
    this.setState({ filter });
  }

  renderToggleAll(completedCount) {
    const { todos, actions } = this.props;
    if (todos.size > 0) {
      return (
        <input className="toggle-all"
               type="checkbox"
               checked={completedCount === todos.size}
               onChange={() => actions.completeAll()} />
      );
    }
  }

  renderFooter(completedCount: number) {
    const { todos } = this.props;
    const { filter } = this.state;
    const activeCount = todos.size - completedCount;

    if (todos.size) {
      return (
        <Footer completedCount={completedCount}
                activeCount={activeCount}
                filter={filter}
                onClearCompleted={this.handleClearCompleted.bind(this)}
                onShow={this.handleShow.bind(this)} />
      );
    }
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos 
      || this.state.filter !== nextState.filter;
  }

  render() {
    const { todos, actions } = this.props;
    const { filter } = this.state;

    const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    const completedCount = todos.reduce((count: number, todo): number =>
      todo.completed ? count + 1 : count,
      0
    );

    return (
      <section className="main">
        {this.renderToggleAll(completedCount)}
        <ul className="todo-list">
          {filteredTodos.map(todo =>
            <TodoItem
              key={todo.id}
              todo={todo}
              { ...actions }/>
          )}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    );
  }
}

export default MainSection;