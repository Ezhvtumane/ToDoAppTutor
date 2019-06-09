import React from 'react';
import TodoItem from './TodoItem';
import todosData from '../todosData';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      data: todosData,
    }
  }

  render() {
    const todosItem = this.state.data.map(todo => <TodoItem todoItem={todo} key={todo.id} />)

    const style = {
      fontSize: 30,
      color: "#FF8C00"
    }
    return (
      <div className="todo-list">
        <p style={style}>Main component</p>
        {todosItem}
      </div>
    );
  }
}

export default Main;