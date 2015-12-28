/// <reference path="../../../../typings/tsd.d.ts" />

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import * as Immutable from 'immutable';

import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';
import { TodoList } from '../models/todos';

interface TodoProps {
  todos?: TodoList;
  dispatch?: Redux.Dispatch;
}

class Todo extends React.Component<TodoProps, any> {
  render() {
    const { todos, dispatch } = this.props;
    const actions = bindActionCreators(TodoActions, dispatch);

    return (
      <div className="todoapp">
        <Header addTodo={actions.addTodo} />
        <MainSection
          todos={todos}
          actions={actions}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Todo);
